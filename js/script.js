const games = [
    { id: 1, title: "Super Mario Pixel", genre: "platformer", genreLabel: "Platformer", size: "Browser", plays: "99.9k", image: "img/supermario.jpg", description: "Game platformer klasik Super Mario versi pixel. Lompat, kumpulkan koin, dan kalahkan musuh.", playable: true, url: "mario-game.html" },
    { id: 2, title: "Pacman Pixel", genre: "retro", genreLabel: "Retro", size: "Browser", plays: "88.5k", image: "https://img.itch.zone/aW1nLzE5MjA4MTQ5LnBuZw==/original/ZX%2FlHq.png", description: "Game klasik Pacman versi pixel. Makan semua titik dan hindari hantu.", playable: true, url: "pacman-game.html" },
    { id: 3, title: "Tetris Pixel", genre: "puzzle", genreLabel: "Puzzle", size: "Browser", plays: "76.2k", image: "img/tetris.webp", description: "Game puzzle klasik Tetris. Susun blok untuk menghilangkan baris. Semakin tinggi skor, semakin cepat!", playable: true, url: "tetris-game.html" },
    { id: 4, title: "Sonic Pixel", genre: "platformer", genreLabel: "Platformer", size: "Browser", plays: "65.1k", image: "https://placehold.co/300x200/1e40af/fbbf24?text=SONIC", description: "Game platformer Sonic versi pixel. Kumpulkan ring, kalahkan musuh, dan capai kecepatan maksimal!", playable: true, url: "sonic-game.html" }
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
let currentGame = null;

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
        card.innerHTML = `
            <img src="${game.image}" alt="${game.title}" class="game-card-image" loading="lazy">
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
    gamePlayTitle.textContent = game.title;
    gameIframe.src = game.url;
    gamePlayModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    gameIframe.onload = () => gameIframe.focus();
    setTimeout(() => gameIframe.focus(), 300);
}

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
    if (e.key === 'Escape') {
        if (gamePlayModal.classList.contains('active')) closeGamePlay();
        else closeModal();
        return;
    }
    // Prevent scrolling for game keys
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' ', 'w', 'W', 'a', 'A', 's', 'S', 'd', 'D'].includes(e.key)) {
        e.preventDefault();
    }
    // Forward keyboard events to game iframe
    const iframe = document.getElementById('gameIframe');
    if (iframe && iframe.contentDocument && gamePlayModal.classList.contains('active')) {
        iframe.contentDocument.dispatchEvent(new KeyboardEvent('keydown', {
            key: e.key, code: e.code, keyCode: e.keyCode,
            bubbles: true, cancelable: true
        }));
    }
});

document.addEventListener('keyup', (e) => {
    const iframe = document.getElementById('gameIframe');
    if (iframe && iframe.contentDocument && gamePlayModal.classList.contains('active')) {
        iframe.contentDocument.dispatchEvent(new KeyboardEvent('keyup', {
            key: e.key, code: e.code, keyCode: e.keyCode,
            bubbles: true, cancelable: true
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

// Contact form
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Pesan berhasil dikirim!');
    e.target.reset();
});

// Init
filterGames();
