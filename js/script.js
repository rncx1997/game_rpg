const games = [
    { id: 1, title: "Super Mario Pixel", genre: "platformer", genreLabel: "Platformer", size: "Browser", plays: "99.9k", image: "img/supermario.jpg", description: "Game platformer klasik Super Mario versi pixel. Lompat, kumpulkan koin, dan kalahkan musuh.", playable: true, url: "mario-game.html" },
    { id: 2, title: "Pacman Pixel", genre: "retro", genreLabel: "Retro", size: "Browser", plays: "88.5k", image: "https://img.itch.zone/aW1nLzE5MjA4MTQ5LnBuZw==/original/ZX%2FlHq.png", description: "Game klasik Pacman versi pixel. Makan semua titik dan hindari hantu.", playable: true, url: "pacman-game.html" },
    { id: 3, title: "Tetris Pixel", genre: "puzzle", genreLabel: "Puzzle", size: "Browser", plays: "76.2k", image: "img/tetris.webp", description: "Game puzzle klasik Tetris. Susun blok untuk menghilangkan baris. Semakin tinggi skor, semakin cepat!", playable: true, url: "tetris-game.html" },
    { id: 4, title: "Sonic Pixel", genre: "platformer", genreLabel: "Platformer", size: "Browser", plays: "65.1k", image: "https://m.gjcdn.net/fireside-post-image/800/6885345-ll-szknyn9v-v4.webp", description: "Game platformer Sonic versi pixel. Kumpulkan ring, kalahkan musuh, dan capai kecepatan maksimal!", playable: true, url: "sonic-game.html" },
    { id: 5, title: "Tower Block Pixel", genre: "puzzle", genreLabel: "Puzzle", size: "Browser", plays: "42.3k", image: "img/tower block.webp", description: "Game puzzle susun balok kota. Blok jatuh dari atas, geser dengan A/D, Space turun cepat. Susun bebas setinggi mungkin!", playable: true, url: "tower-game.html" },
    { id: 6, title: "Air Force Pixel", genre: "shooter", genreLabel: "Shooter", size: "Browser", plays: "0", image: "img/airforce.svg", description: "Game pesawat tempur di angkasa. Hancurkan pesawat alien, kumpulkan power-up, dan bertahan selama mungkin! Ada 5 jenis musuh termasuk boss.", playable: true, url: "airforce-game.html" }
];

const gamesGrid = document.getElementById('gamesGrid');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');
const modal = document.getElementById('gameModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalGenre = document.getElementById('modalGenre');
const modalDesc = document.getElementById('modalDesc');
const playBtn = document.getElementById('playBtn');
const playBtnWrapper = document.getElementById('playBtnWrapper');
const gamePlayModal = document.getElementById('gamePlayModal');
const gameIframe = document.getElementById('gameIframe');
const gamePlayTitle = document.getElementById('gamePlayTitle');
const closeBtn = document.querySelector('.close-btn');
const closeGameBtns = document.querySelectorAll('.close-game-btn');
const toast = document.getElementById('toast');
const adOverlay = document.getElementById('adOverlay');
const adVideo = document.getElementById('adVideo');
const adSkipBtn = document.getElementById('adSkipBtn');
const adTimer = document.getElementById('adTimer');
const adLoading = document.getElementById('adLoading');
let currentGame = null;
let adPendingCallback = null;
let adCountdown = 5;
let adInterval = null;
let adSkippable = false;

function renderGames(filteredGames) {
    gamesGrid.innerHTML = '';
    if (filteredGames.length === 0) {
        noResults.classList.remove('hidden');
        return;
    }
    noResults.classList.add('hidden');

    filteredGames.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        const badge = game.playable ? 'playable-badge' : '';
        const isFav = isFavorite(game.id);
        card.innerHTML = `
            <img src="${game.image}" alt="${game.title}" class="game-card-image" loading="lazy">
            <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${game.id}" onclick="event.stopPropagation();toggleFav(${game.id})"><i class="fa${isFav ? 's' : 'r'} fa-heart"></i></button>
            <div class="game-card-body">
                <h3>${game.title}</h3>
                <div class="game-meta">
                    <span><i class="fas fa-hdd"></i> ${game.size}</span>
                    <span><i class="fas fa-play"></i> ${game.plays}</span>
                </div>
                <span class="genre-tag ${badge}">${game.genreLabel}</span>
            </div>
        `;
        card.addEventListener('click', () => openModal(game));
        gamesGrid.appendChild(card);
    });
}

function filterGames() {
    const query = searchInput.value.toLowerCase().trim();
    const filtered = games.filter(game =>
        game.title.toLowerCase().includes(query) ||
        game.genreLabel.toLowerCase().includes(query)
    );
    renderGames(filtered);
}

function getFavs() {
    return JSON.parse(localStorage.getItem('ternalFavs') || '[]');
}
function isFavorite(id) {
    return getFavs().includes(id);
}
function toggleFav(id) {
    let favs = getFavs();
    if (favs.includes(id)) {
        favs = favs.filter(f => f !== id);
    } else {
        favs.push(id);
    }
    localStorage.setItem('ternalFavs', JSON.stringify(favs));
    filterGames();
}

searchInput.addEventListener('input', filterGames);

function openModal(game) {
    currentGame = game;
    modalImage.src = game.image;
    modalImage.alt = game.title;
    modalTitle.textContent = game.title;
    modalGenre.textContent = 'Genre: ' + game.genreLabel;
    modalDesc.textContent = game.description;

    if (game.playable) {
        playBtnWrapper.classList.remove('hidden');
        playBtn.innerHTML = '<i class="fas fa-play"></i> Mainkan';
        playBtn.onclick = () => openGamePlay(game);
    } else {
        playBtnWrapper.classList.add('hidden');
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function openGamePlay(game) {
    closeModal();
    showAd(() => {
        gamePlayTitle.textContent = game.title;
        gameIframe.src = game.url;
        gamePlayModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        gameIframe.onload = () => gameIframe.focus();
        setTimeout(() => gameIframe.focus(), 300);
        addGameHistory(game.title);
    });
}

const AD_DATA = {
    logo: '🛁',
    brand: 'Old Spice',
    tagline: 'Bau badan? Old Spice jawabannya!'
};

function showAd(callback) {
    adPendingCallback = callback;
    adCountdown = 5;
    adSkippable = false;
    adTimer.textContent = '5';
    adSkipBtn.disabled = true;
    adSkipBtn.classList.remove('active');
    document.getElementById('adProgressBar').style.width = '0%';

    document.getElementById('adBrandLogo').textContent = AD_DATA.logo;
    document.getElementById('adBrandName').textContent = AD_DATA.brand;
    document.getElementById('adBrandTagline').textContent = AD_DATA.tagline;

    adVideo.currentTime = 0;
    adVideo.play();

    adLoading.classList.remove('hidden');
    setTimeout(function() { adLoading.classList.add('hidden'); }, 2000);

    adOverlay.classList.remove('hidden');

    clearInterval(adInterval);
    adInterval = setInterval(function() {
        adCountdown--;
        var pct = ((5 - adCountdown) / 5) * 100;
        document.getElementById('adProgressBar').style.width = Math.min(pct, 100) + '%';
        if (adCountdown > 0) {
            adTimer.textContent = adCountdown;
        } else {
            clearInterval(adInterval);
            adSkippable = true;
            adSkipBtn.disabled = false;
            adSkipBtn.classList.add('active');
            adTimer.textContent = '';
            document.getElementById('adProgressBar').style.width = '100%';
            adLoading.classList.add('hidden');
        }
    }, 1000);
}

function closeAd() {
    clearInterval(adInterval);
    adOverlay.classList.add('hidden');
    adVideo.pause();
    if (adPendingCallback) {
        var cb = adPendingCallback;
        adPendingCallback = null;
        cb();
    }
}

adSkipBtn.addEventListener('click', function() {
    if (adSkippable) closeAd();
});
adSkipBtn.addEventListener('touchend', function(e) {
    if (adSkippable) { e.preventDefault(); closeAd(); }
});

gamePlayModal.addEventListener('click', (e) => {
    if (e.target === gamePlayModal || e.target === gamePlayModal.querySelector('.modal-game-content')) {
        closeGamePlay();
    } else {
        gameIframe.focus();
    }
});

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function closeGamePlay() {
    gamePlayModal.classList.remove('active');
    gameIframe.src = '';
    document.body.style.overflow = 'auto';
}

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

closeGameBtns.forEach(btn => {
    btn.addEventListener('click', closeGamePlay);
});

document.addEventListener('keydown', (e) => {
    const isGameActive = gamePlayModal.classList.contains('active');
    
    if (e.key === 'Escape') {
        if (isGameActive) closeGamePlay();
        else closeModal();
        return;
    }
    
    // Only intercept game keys when game modal is active
    if (isGameActive && ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' ', 'Space', 'w', 'W', 'a', 'A', 's', 'S', 'd', 'D', 'r', 'R'].includes(e.key)) {
        e.preventDefault();
        // Forward keyboard events to game iframe
        const iframe = document.getElementById('gameIframe');
        const doc = iframe?.contentDocument || iframe?.contentWindow?.document;
        if (doc) {
            doc.dispatchEvent(new KeyboardEvent('keydown', {
                key: e.key, code: e.code, keyCode: e.keyCode || e.which,
                which: e.keyCode || e.which, bubbles: true, cancelable: true
            }));
        }
    }
});

document.addEventListener('keyup', (e) => {
    if (!gamePlayModal.classList.contains('active')) return;
    const iframe = document.getElementById('gameIframe');
    const doc = iframe?.contentDocument || iframe?.contentWindow?.document;
    if (doc) {
        doc.dispatchEvent(new KeyboardEvent('keyup', {
            key: e.key, code: e.code, keyCode: e.keyCode || e.which,
            which: e.keyCode || e.which, bubbles: true, cancelable: true
        }));
    }
});

function showToast(message) {
    toast.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 3000);
}

// Navbar mobile toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    sections.forEach(section => {
        const top = section.offsetTop - 150;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');
        const link = navLinks.querySelector(`a[href="#${id}"]`);
        if (link) {
            link.classList.toggle('active', scrollY >= top && scrollY < bottom);
        }
    });
});

// Animated counter
const counters = document.querySelectorAll('.count');
const speed = 200;
const animateCounter = (counter) => {
    const target = +counter.dataset.target;
    const increment = target / speed;
    const updateCount = () => {
        const count = +counter.innerText;
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            requestAnimationFrame(updateCount);
        } else {
            counter.innerText = target.toLocaleString();
        }
    };
    updateCount();
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            counters.forEach(counter => animateCounter(counter));
            observer.disconnect();
        }
    });
}, { threshold: 0.5 });
if (counters.length > 0) {
    observer.observe(counters[0].closest('.stats'));
}

// Billboard click
(function() {
    const items = document.querySelectorAll('.billboard-item');
    items.forEach((item, idx) => {
        item.addEventListener('click', () => {
            const game = games[idx % games.length];
            if (game) openModal(game);
        });
    });
})();

// Init
filterGames();

// Auth system
function showAuthModal() {
    document.getElementById('authModal').style.display = 'flex';
}
function hideAuthModal() {
    document.getElementById('authModal').style.display = 'none';
    document.getElementById('authError').textContent = '';
}
function switchAuthTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    if (tab === 'login') {
        document.getElementById('tabLogin').classList.add('active');
        document.getElementById('authSubmit').textContent = 'Masuk';
    } else {
        document.getElementById('tabRegister').classList.add('active');
        document.getElementById('authSubmit').textContent = 'Daftar';
    }
    document.getElementById('authError').textContent = '';
}
function handleAuth(e) {
    e.preventDefault();
    const name = document.getElementById('authName').value.trim();
    const pass = document.getElementById('authPass').value;
    const isLogin = document.getElementById('tabLogin').classList.contains('active');
    const errorEl = document.getElementById('authError');
    const users = JSON.parse(localStorage.getItem('ternalUsers') || '{}');
    if (isLogin) {
        if (!users[name]) { errorEl.textContent = 'Akun tidak ditemukan'; return; }
        if (users[name] !== pass) { errorEl.textContent = 'Kata sandi salah'; return; }
        localStorage.setItem('ternalUser', name);
    } else {
        if (users[name]) { errorEl.textContent = 'Nama sudah terdaftar'; return; }
        users[name] = pass;
        localStorage.setItem('ternalUsers', JSON.stringify(users));
        localStorage.setItem('ternalUser', name);
    }
    hideAuthModal();
    updateProfileUI();
    updateCommentUI();
    showToast('Selamat datang, ' + name + '!');
}
function logout() {
    localStorage.removeItem('ternalUser');
    updateProfileUI();
    updateCommentUI();
    showToast('Berhasil keluar');
}
function updateProfileUI() {
    const name = localStorage.getItem('ternalUser');
    const btnLogin = document.getElementById('btnLogin');
    const profileMenu = document.getElementById('profileMenu');
    const profileName = document.getElementById('profileName');
    const navProfileLink = document.getElementById('navProfileLink');
    if (name) {
        btnLogin.style.display = 'none';
        profileMenu.style.display = 'flex';
        profileName.textContent = name;
        navProfileLink.style.display = '';
ensureJoinDate();

// Auto-play from query param (profile page link)
(function() {
    const params = new URLSearchParams(window.location.search);
    const playId = params.get('play');
    if (playId) {
        const game = games.find(g => g.id === parseInt(playId));
        if (game) {
            // Wait for page to load then open
            const wait = setInterval(() => {
                if (document.querySelector('.game-card')) {
                    clearInterval(wait);
                    setTimeout(() => openGamePlay(game), 300);
                }
            }, 100);
        }
    }
})();
    } else {
        btnLogin.style.display = '';
        profileMenu.style.display = 'none';
        navProfileLink.style.display = 'none';
    }
}
document.getElementById('authModal').addEventListener('click', function(e) {
    if (e.target === this) hideAuthModal();
});
document.getElementById('profileMenu').addEventListener('click', function() {
    this.classList.toggle('active');
});
document.addEventListener('click', function(e) {
    const pm = document.getElementById('profileMenu');
    if (!pm.contains(e.target)) pm.classList.remove('active');
});
updateProfileUI();

// Subscribe system
function showSubscribeModal() {
    document.getElementById('subscribeModal').style.display = 'flex';
}
function hideSubscribeModal() {
    document.getElementById('subscribeModal').style.display = 'none';
    document.getElementById('subError').textContent = '';
}
function handleSubscribe(e) {
    e.preventDefault();
    const name = document.getElementById('subName').value.trim();
    const email = document.getElementById('subEmail').value.trim();
    const subs = JSON.parse(localStorage.getItem('ternalSubs') || '[]');
    if (subs.some(s => s.email === email)) {
        document.getElementById('subError').textContent = 'Email sudah terdaftar!';
        return;
    }
    subs.push({ name, email, date: new Date().toISOString() });
    localStorage.setItem('ternalSubs', JSON.stringify(subs));
    hideSubscribeModal();
    showToast('Terima kasih! Berlangganan berhasil.');
}
document.getElementById('subscribeModal').addEventListener('click', function(e) {
    if (e.target === this) hideSubscribeModal();
});

// Seed default accounts
(function() {
    const users = JSON.parse(localStorage.getItem('ternalUsers') || '{}');
    if (!users['rncx']) {
        users['rncx'] = '#chacinx';
    }
    if (!users['iamutaki']) {
        users['iamutaki'] = '#chacinx';
    }
    localStorage.setItem('ternalUsers', JSON.stringify(users));
})();

// Game history
function addGameHistory(title) {
    const name = localStorage.getItem('ternalUser');
    if (!name) return;
    const key = 'ternalHistory_' + name;
    const history = JSON.parse(localStorage.getItem(key) || '[]');
    history.unshift({ title, time: new Date().toLocaleString('id-ID') });
    if (history.length > 20) history.pop();
    localStorage.setItem(key, JSON.stringify(history));
}

// Profile
function showProfileModal() {
    const name = localStorage.getItem('ternalUser');
    if (!name) return;
    document.getElementById('profileModalName').textContent = name;
    const photo = localStorage.getItem('ternalPhoto_' + name);
    const icon = document.getElementById('profilePhotoIcon');
    const img = document.getElementById('profilePhotoImg');
    if (photo) {
        icon.style.display = 'none';
        img.style.display = '';
        img.src = photo;
    } else {
        icon.style.display = '';
        img.style.display = 'none';
    }
    const join = localStorage.getItem('ternalJoin_' + name) || new Date().toLocaleDateString('id-ID');
    document.getElementById('profileJoin').textContent = join;
    const key = 'ternalHistory_' + name;
    const history = JSON.parse(localStorage.getItem(key) || '[]');
    document.getElementById('profileGames').textContent = history.length;
    const list = document.getElementById('historyList');
    if (history.length === 0) {
        list.innerHTML = '<p class="history-empty">Belum ada riwayat game</p>';
    } else {
        list.innerHTML = history.map(h =>
            '<div class="history-item"><div class="history-item-icon"><i class="fas fa-gamepad"></i></div><div class="history-item-info"><div class="history-item-title">' + h.title + '</div><div class="history-item-time">' + h.time + '</div></div></div>'
        ).join('');
    }
    document.getElementById('profileModal').style.display = 'flex';
}
function hideProfileModal() {
    document.getElementById('profileModal').style.display = 'none';
}
function changePhoto(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(ev) {
        const data = ev.target.result;
        const name = localStorage.getItem('ternalUser');
        localStorage.setItem('ternalPhoto_' + name, data);
        showProfileModal();
    };
    reader.readAsDataURL(file);
}
function editName() {
    const section = document.querySelector('.profile-name-section');
    const current = document.getElementById('profileModalName').textContent;
    section.innerHTML = '<div><input type="text" class="edit-name-input" id="editNameInput" value="' + current + '" placeholder="Nama baru" maxlength="20"></div><div class="edit-name-actions"><button onclick="saveName()"><i class="fas fa-check"></i></button><button onclick="showProfileModal()"><i class="fas fa-times"></i></button></div>';
    document.getElementById('editNameInput').focus();
    document.getElementById('editNameInput').select();
}
function saveName() {
    const newName = document.getElementById('editNameInput').value.trim();
    if (!newName || newName.length < 2) return;
    const oldName = localStorage.getItem('ternalUser');
    if (newName === oldName) { showProfileModal(); return; }
    const users = JSON.parse(localStorage.getItem('ternalUsers') || '{}');
    if (users[newName]) { showToast('Nama sudah dipakai'); return; }
    users[newName] = users[oldName];
    delete users[oldName];
    localStorage.setItem('ternalUsers', JSON.stringify(users));
    localStorage.setItem('ternalUser', newName);
    const photo = localStorage.getItem('ternalPhoto_' + oldName);
    if (photo) { localStorage.setItem('ternalPhoto_' + newName, photo); localStorage.removeItem('ternalPhoto_' + oldName); }
    const history = localStorage.getItem('ternalHistory_' + oldName);
    if (history) { localStorage.setItem('ternalHistory_' + newName, history); localStorage.removeItem('ternalHistory_' + oldName); }
    const join = localStorage.getItem('ternalJoin_' + oldName);
    if (join) { localStorage.setItem('ternalJoin_' + newName, join); localStorage.removeItem('ternalJoin_' + oldName); }
    updateProfileUI();
    showProfileModal();
    showToast('Nama berhasil diubah!');
}
document.getElementById('profileModal').addEventListener('click', function(e) {
    if (e.target === this) hideProfileModal();
});

// Save join date on first login
function ensureJoinDate() {
    const name = localStorage.getItem('ternalUser');
    if (name && !localStorage.getItem('ternalJoin_' + name)) {
        localStorage.setItem('ternalJoin_' + name, new Date().toLocaleDateString('id-ID'));
    }
}
ensureJoinDate();

// Comment system
function toggleCommentSidebar() {
    document.getElementById('commentSidebar').classList.toggle('open');
}
function getComments() {
    return JSON.parse(localStorage.getItem('ternalComments') || '[]');
}
function saveComments(comments) {
    localStorage.setItem('ternalComments', JSON.stringify(comments));
}
function renderComments() {
    const list = document.getElementById('commentList');
    const comments = getComments();
    const user = localStorage.getItem('ternalUser');
    if (comments.length === 0) {
        list.innerHTML = '<p class="comment-empty">Belum ada komentar</p>';
    } else {
        list.innerHTML = comments.map((c, i) => {
            const initial = c.author.charAt(0).toUpperCase();
            const isOwner = user === c.author;
            const deleteBtn = isOwner ? '<button class="comment-delete" onclick="deleteComment(' + i + ')"><i class="fas fa-trash"></i></button>' : '';
            return '<div class="comment-item"><div class="comment-avatar">' + initial + '</div><div class="comment-body"><div class="comment-meta"><span class="comment-author">' + c.author + '</span><span class="comment-time">' + c.time + ' ' + deleteBtn + '</span></div><div class="comment-text">' + c.text.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</div></div></div>';
        }).join('');
        list.scrollTop = list.scrollHeight;
    }
    const badge = document.getElementById('commentBadge');
    if (comments.length > 0) {
        badge.style.display = 'flex';
        badge.textContent = comments.length;
    } else {
        badge.style.display = 'none';
    }
}
function postComment() {
    const user = localStorage.getItem('ternalUser');
    if (!user) { showAuthModal(); return; }
    const input = document.getElementById('commentInput');
    const text = input.value.trim();
    if (!text) return;
    const comments = getComments();
    comments.push({ author: user, text: text, time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) });
    saveComments(comments);
    input.value = '';
    renderComments();
}
function deleteComment(index) {
    const comments = getComments();
    const user = localStorage.getItem('ternalUser');
    if (comments[index] && comments[index].author === user) {
        comments.splice(index, 1);
        saveComments(comments);
        renderComments();
    }
}
function updateCommentUI() {
    const user = localStorage.getItem('ternalUser');
    const hint = document.getElementById('commentLoginHint');
    const form = document.getElementById('commentForm');
    if (user) {
        hint.style.display = 'none';
        form.style.display = 'flex';
    } else {
        hint.style.display = 'flex';
        form.style.display = 'none';
    }
    renderComments();
}
updateCommentUI();
