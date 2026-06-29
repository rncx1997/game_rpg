const games = [
    // RPG
    { id: 1, title: "Shadow of the Dragon", genre: "rpg", genreLabel: "RPG", size: "4.2 GB", downloads: "12.4k", image: "https://placehold.co/400x250/1a1a3e/7c3aed?text=Shadow+of+the+Dragon", description: "Jelajahi dunia fantasi yang luas, kalahkan naga legendaris, dan selamatkan kerajaan dari kegelapan abadi. Dengan sistem pertarungan real-time dan grafis memukau.", specs: ["OS: Windows 10/11 64-bit", "CPU: Intel Core i5-8400", "RAM: 8 GB", "GPU: GTX 1060 6GB", "Storage: 20 GB"] },
    { id: 2, title: "Eternal Kingdom", genre: "rpg", genreLabel: "RPG", size: "5.8 GB", downloads: "8.7k", image: "https://placehold.co/400x250/1a1a3e/7c3aed?text=Eternal+Kingdom", description: "RPG epik dengan cerita mendalam tentang kerajaan yang hancur. Bangun kembali kejayaan dan lawan kegelapan yang mengancam.", specs: ["OS: Windows 10 64-bit", "CPU: Intel Core i5-9400", "RAM: 8 GB", "GPU: GTX 1050 Ti", "Storage: 25 GB"] },
    { id: 3, title: "Soul Reaper", genre: "rpg", genreLabel: "RPG", size: "6.1 GB", downloads: "15.2k", image: "https://placehold.co/400x250/1a1a3e/8b5cf6?text=Soul+Reaper", description: "RPG gelap dengan sistem pertarungan souls-like. Kumpulkan jiwa musuh dan ukir takdirmu sendiri.", specs: ["OS: Windows 10/11 64-bit", "CPU: Intel Core i7-8700", "RAM: 16 GB", "GPU: RTX 2060", "Storage: 35 GB"] },
    { id: 4, title: "Ragnarok Online 2", genre: "rpg", genreLabel: "RPG", size: "5.5 GB", downloads: "22.1k", image: "https://placehold.co/400x250/1a1a3e/f59e0b?text=Ragnarok+Online+2", description: "Sekuel dari game MMORPG legendaris. Dunia Midgard kembali dengan grafis modern dan konten tak terbatas.", specs: ["OS: Windows 10 64-bit", "CPU: Intel Core i5-9400", "RAM: 8 GB", "GPU: GTX 960", "Storage: 30 GB"] },
    { id: 5, title: "Divinity Fallen", genre: "rpg", genreLabel: "RPG", size: "7.2 GB", downloads: "9.8k", image: "https://placehold.co/400x250/1a1a3e/a78bfa?text=Divinity+Fallen", description: "RPG taktis dengan sistem party-based. Pimpin tim pahlawan dan hadapi ancaman dewa yang jatuh.", specs: ["OS: Windows 10/11 64-bit", "CPU: Intel Core i5-10400", "RAM": 12 GB", "GPU: GTX 1660", "Storage: 40 GB"] },

    // Action
    { id: 6, title: "Hellfire Rising", genre: "action", genreLabel: "Action", size: "5.0 GB", downloads: "18.5k", image: "https://placehold.co/400x250/1a1a3e/ef4444?text=Hellfire+Rising", description: "Action RPG dengan pertarungan brutal melawan iblis. Kuasai berbagai senjata dan sihir untuk bertahan hidup.", specs: ["OS: Windows 10/11 64-bit", "CPU: Intel Core i5-10400", "RAM": 12 GB", "GPU: GTX 1660", "Storage: 25 GB"] },
    { id: 7, title: "Soul Eater", genre: "action", genreLabel: "Action", size: "7.3 GB", downloads: "14.1k", image: "https://placehold.co/400x250/1a1a3e/f43f5e?text=Soul+Eater", description: "Action RPG gelap dengan sistem pertarungan souls-like. Kumpulkan jiwa musuh untuk meningkatkan kekuatan.", specs: ["OS: Windows 10/11 64-bit", "CPU: Intel Core i7-8700", "RAM: 16 GB", "GPU: RTX 2060", "Storage: 35 GB"] },
    { id: 8, title: "Blade Storm", genre: "action", genreLabel: "Action", size: "4.8 GB", downloads: "11.3k", image: "https://placehold.co/400x250/1a1a3e/f87171?text=Blade+Storm", description: "Game action hack and slash dengan combo tanpa batas. Tebas musuh dengan gaya dan kecepatan.", specs: ["OS: Windows 10 64-bit", "CPU: Intel Core i5-9400", "RAM: 8 GB", "GPU: GTX 1050", "Storage: 20 GB"] },
    { id: 9, title: "Fury Unleashed", genre: "action", genreLabel: "Action", size: "6.5 GB", downloads: "7.6k", image: "https://placehold.co/400x250/1a1a3e/dc2626?text=Fury+Unleashed", description: "Game action dengan mekanik rage. Semakin marah semakin kuat. Hancurkan semua yang menghalangi.", specs: ["OS: Windows 10/11 64-bit", "CPU: Intel Core i5-10400", "RAM": 8 GB", "GPU: GTX 1060", "Storage: 30 GB"] },

    // Adventure
    { id: 10, title: "Elder Woods", genre: "adventure", genreLabel: "Petualangan", size: "3.5 GB", downloads: "9.2k", image: "https://placehold.co/400x250/1a1a3e/22c55e?text=Elder+Woods", description: "Game petualangan open-world di hutan mistis. Temukan artefak kuno, pecahkan teka-teki, dan hadapi makhluk legendaris.", specs: ["OS: Windows 10 64-bit", "CPU: Intel Core i5-9400", "RAM: 8 GB", "GPU: GTX 1050 Ti", "Storage: 15 GB"] },
    { id: 11, title: "Ocean Depths", genre: "adventure", genreLabel: "Petualangan", size: "6.2 GB", downloads: "6.8k", image: "https://placehold.co/400x250/1a1a3e/3b82f6?text=Ocean+Depths", description: "Jelajahi kedalaman lautan yang penuh misteri. Temukan kota yang hilang dan makhluk laut purba.", specs: ["OS: Windows 10/11 64-bit", "CPU: Intel Core i5-10400", "RAM": 8 GB", "GPU: GTX 1060", "Storage: 25 GB"] },
    { id: 12, title: "Skyward Journey", genre: "adventure", genreLabel: "Petualangan", size: "4.0 GB", downloads: "5.4k", image: "https://placehold.co/400x250/1a1a3e/34d399?text=Skyward+Journey", description: "Petualangan di langit dengan pesawat udara sendiri. Temukan pulau terbang dan rahasia di awan.", specs: ["OS: Windows 10 64-bit", "CPU: Intel Core i5-9400", "RAM: 8 GB", "GPU: GTX 1050", "Storage: 18 GB"] },
    { id: 13, title: "Desert Nomad", genre: "adventure", genreLabel: "Petualangan", size: "3.8 GB", downloads: "4.2k", image: "https://placehold.co/400x250/1a1a3e/f59e0b?text=Desert+Nomad", description: "Bertahan hidup di padang pasir yang luas. Cari oasis, bangun tempat berlindung, dan temukan peradaban kuno.", specs: ["OS: Windows 10 64-bit", "CPU: Intel Core i5-8400", "RAM: 8 GB", "GPU: GTX 1050 Ti", "Storage: 16 GB"] },

    // Fantasy
    { id: 14, title: "Dragon's Lair", genre: "fantasy", genreLabel: "Fantasi", size: "6.5 GB", downloads: "20.5k", image: "https://placehold.co/400x250/1a1a3e/a855f7?text=Dragon+Lair", description: "Masuki sarang naga dan hadapi makhluk legendaris. Kumpulkan harta karun dan kuasai sihir kuno.", specs: ["OS: Windows 10/11 64-bit", "CPU: Intel Core i5-10400", "RAM": 12 GB", "GPU: GTX 1660", "Storage: 30 GB"] },
    { id: 15, title: "Elven Legacy", genre: "fantasy", genreLabel: "Fantasi", size: "5.2 GB", downloads: "13.7k", image: "https://placehold.co/400x250/1a1a3e/818cf8?text=Elven+Legacy", description: "Rasakan kehidupan seorang peri dalam dunia fantasi yang indah. Jelajahi hutan ajaib dan kuasai sihir alam.", specs: ["OS: Windows 10 64-bit", "CPU: Intel Core i5-9400", "RAM: 8 GB", "GPU: GTX 1050 Ti", "Storage: 22 GB"] },
    { id: 16, title: "Dwarf Fortress", genre: "fantasy", genreLabel: "Fantasi", size: "4.0 GB", downloads: "8.9k", image: "https://placehold.co/400x250/1a1a3e/f97316?text=Dwarf+Fortress", description: "Bangun benteng bawah tanah sebagai seorang dwarf. Tambang, buat senjata, dan pertahankan diri dari serangan.", specs: ["OS: Windows 10 64-bit", "CPU: Intel Core i5-8400", "RAM: 8 GB", "GPU: GTX 1050", "Storage: 15 GB"] },

    // Sci-Fi
    { id: 17, title: "Cyber Realm Online", genre: "sci-fi", genreLabel: "Sci-Fi", size: "6.8 GB", downloads: "16.3k", image: "https://placehold.co/400x250/1a1a3e/06b6d4?text=Cyber+Realm+Online", description: "MMORPG bertema cyberpunk dengan dunia neon yang luas. Kustomisasi karakter tanpa batas dan pertarungan PvP epik.", specs: ["OS: Windows 10 64-bit", "CPU: Intel Core i7-8700", "RAM: 16 GB", "GPU: RTX 2060", "Storage: 40 GB"] },
    { id: 18, title: "Starlight Wanderer", genre: "sci-fi", genreLabel: "Sci-Fi", size: "8.1 GB", downloads: "11.9k", image: "https://placehold.co/400x250/1a1a3e/a855f7?text=Starlight+Wanderer", description: "Jelajahi galaksi sebagai pemburu hadiah luar angkasa. Setiap planet memiliki cerita dan bahaya unik.", specs: ["OS: Windows 10/11 64-bit", "CPU: Intel Core i7-10700", "RAM: 16 GB", "GPU: RTX 2070", "Storage: 50 GB"] },
    { id: 19, title: "Neon Dystopia", genre: "sci-fi", genreLabel: "Sci-Fi", size: "5.5 GB", downloads: "7.4k", image: "https://placehold.co/400x250/1a1a3e/2dd4bf?text=Neon+Dystopia", description: "Cyberpunk thriller dengan cerita noir. Di kota neon, setiap pilihan memiliki konsekuensi.", specs: ["OS: Windows 10 64-bit", "CPU: Intel Core i5-9400", "RAM": 8 GB", "GPU: GTX 1060", "Storage: 25 GB"] },
    { id: 20, title: "Space Colony", genre: "sci-fi", genreLabel: "Sci-Fi", size: "7.0 GB", downloads: "6.1k", image: "https://placehold.co/400x250/1a1a3e/14b8a6?text=Space+Colony", description: "Bangun koloni di planet asing. Kelola sumber daya, lindungi koloni dari ancaman alien.", specs: ["OS: Windows 10/11 64-bit", "CPU: Intel Core i5-10400", "RAM: 12 GB", "GPU: GTX 1660", "Storage: 30 GB"] },

    // Horror
    { id: 21, title: "Darkest Dungeon 2", genre: "horror", genreLabel: "Horor", size: "2.8 GB", downloads: "10.2k", image: "https://placehold.co/400x250/1a1a3e/64748b?text=Darkest+Dungeon+2", description: "Roguelike RPG dengan atmosfer horor psikologis. Atasi kegilaan dan monstrositas dalam perjalanan ke kegelapan.", specs: ["OS: Windows 10 64-bit", "CPU: Intel Core i5-9300", "RAM: 8 GB", "GPU: GTX 1050", "Storage: 12 GB"] },
    { id: 22, title: "Whispering Shadows", genre: "horror", genreLabel: "Horor", size: "4.5 GB", downloads: "8.8k", image: "https://placehold.co/400x250/1a1a3e/475569?text=Whispering+Shadows", description: "Horor psikologis di rumah terbengkalai. Pecahkan misteri dan selamatkan diri dari bayangan yang berbisik.", specs: ["OS: Windows 10 64-bit", "CPU: Intel Core i5-8400", "RAM: 8 GB", "GPU: GTX 1050 Ti", "Storage: 18 GB"] },
    { id: 23, title: "Blood Moon", genre: "horror", genreLabel: "Horor", size: "5.0 GB", downloads: "6.5k", image: "https://placehold.co/400x250/1a1a3e/991b1b?text=Blood+Moon", description: "Selamatkan diri dari pemburu di malam bulan darah. Gunakkan kegelapan sebagai pelindung.", specs: ["OS: Windows 10/11 64-bit", "CPU: Intel Core i5-9400", "RAM": 8 GB", "GPU: GTX 1060", "Storage: 22 GB"] },

    // Open World
    { id: 24, title: "Valhalla Calling", genre: "open-world", genreLabel: "Open World", size: "9.5 GB", downloads: "25.3k", image: "https://placehold.co/400x250/1a1a3e/eab308?text=Valhalla+Calling", description: "Open-world RPG Viking. Serbu desa, bangun klan, dan raih tempat di Valhalla melalui pertempuran epik.", specs: ["OS: Windows 10/11 64-bit", "CPU: Intel Core i7-9700", "RAM: 16 GB", "GPU: RTX 2070", "Storage: 60 GB"] },
    { id: 25, title: "Wandering Isles", genre: "open-world", genreLabel: "Open World", size: "8.0 GB", downloads: "9.4k", image: "https://placehold.co/400x250/1a1a3e/22d3ee?text=Wandering+Isles", description: "Jelajahi kepulauan misterius dengan perahu layar. Setiap pulau menyimpan rahasia dan petualangan baru.", specs: ["OS: Windows 10/11 64-bit", "CPU: Intel Core i5-10400", "RAM: 12 GB", "GPU: GTX 1660", "Storage: 35 GB"] },
    { id: 26, title: "Wild Frontier", genre: "open-world", genreLabel: "Open World", size: "7.8 GB", downloads: "12.7k", image: "https://placehold.co/400x250/1a1a3e/84cc16?text=Wild+Frontier", description: "Jelajahi alam liar yang luas. Berburu, memancing, dan bangun tempat perlindungan di alam bebas.", specs: ["OS: Windows 10 64-bit", "CPU: Intel Core i5-9400", "RAM": 8 GB", "GPU: GTX 1050 Ti", "Storage: 30 GB"] },

    // Strategy
    { id: 27, title: "Kingdom Reborn", genre: "strategy", genreLabel: "Strategi", size: "4.0 GB", downloads: "7.8k", image: "https://placehold.co/400x250/1a1a3e/ec4899?text=Kingdom+Reborn", description: "Strategy RPG dengan elemen manajemen kerajaan. Bangun istana, latih pasukan, dan perluas wilayahmu.", specs: ["OS: Windows 10 64-bit", "CPU: Intel Core i5-10400", "RAM": 8 GB", "GPU: GTX 1050", "Storage: 10 GB"] },
    { id: 28, title: "War Front", genre: "strategy", genreLabel: "Strategi", size: "5.5 GB", downloads: "6.3k", image: "https://placehold.co/400x250/1a1a3e/f43f5e?text=War+Front", description: "Game strategi perang real-time. Pimpin pasukan dan taklukkan medan perang dengan taktik cerdas.", specs: ["OS: Windows 10 64-bit", "CPU: Intel Core i5-9400", "RAM": 8 GB", "GPU: GTX 1050 Ti", "Storage: 20 GB"] },
    { id: 29, title: "Empire Rising", genre: "strategy", genreLabel: "Strategi", size: "6.0 GB", downloads: "5.1k", image: "https://placehold.co/400x250/1a1a3e/d946ef?text=Empire+Rising", description: "Bangun imperium dari nol. Kelola ekonomi, diplomasi, dan militer untuk menjadi penguasa dunia.", specs: ["OS: Windows 10/11 64-bit", "CPU: Intel Core i5-10400", "RAM": 12 GB", "GPU: GTX 1060", "Storage: 25 GB"] },

    // Simulation
    { id: 30, title: "Life Simulator", genre: "simulation", genreLabel: "Simulasi", size: "3.2 GB", downloads: "14.5k", image: "https://placehold.co/400x250/1a1a3e/06b6d4?text=Life+Simulator", description: "Jalani kehidupan virtual. Bangun karir, cari pasangan, beli rumah, dan wujudkan impian.", specs: ["OS: Windows 10 64-bit", "CPU: Intel Core i5-8400", "RAM: 8 GB", "GPU: Intel HD Graphics", "Storage: 10 GB"] },
    { id: 31, title: "Farm Valley", genre: "simulation", genreLabel: "Simulasi", size: "2.5 GB", downloads: "18.2k", image: "https://placehold.co/400x250/1a1a3e/22c55e?text=Farm+Valley", description: "Game simulasi pertanian yang santai. Tanam, panen, dan bangun pertanian impianmu.", specs: ["OS: Windows 7/10 64-bit", "CPU: Intel Core i3-8100", "RAM: 4 GB", "GPU: Intel HD Graphics", "Storage: 5 GB"] },
    { id: 32, title: "City Planner", genre: "simulation", genreLabel: "Simulasi", size: "4.8 GB", downloads: "9.9k", image: "https://placehold.co/400x250/1a1a3e/2dd4bf?text=City+Planner", description: "Bangun dan kelola kota metropolitan. Atur zonasi, transportasi, dan kebutuhan warga.", specs: ["OS: Windows 10 64-bit", "CPU: Intel Core i5-9400", "RAM: 8 GB", "GPU: GTX 1050", "Storage: 15 GB"] },

    // Racing
    { id: 33, title: "Neon Speed", genre: "racing", genreLabel: "Balapan", size: "6.0 GB", downloads: "21.4k", image: "https://placehold.co/400x250/1a1a3e/f97316?text=Neon+Speed", description: "Balapan di jalanan kota neon. Modifikasi mobil dan jadilah yang tercepat di malam hari.", specs: ["OS: Windows 10 64-bit", "CPU: Intel Core i5-9400", "RAM: 8 GB", "GPU: GTX 1060", "Storage: 25 GB"] },
    { id: 34, title: "Moto GP 2026", genre: "racing", genreLabel: "Balapan", size: "7.5 GB", downloads: "16.8k", image: "https://placehold.co/400x250/1a1a3e/ef4444?text=Moto+GP+2026", description: "Balapan motor paling realistis. Rasakan sensasi kecepatan di sirkuit internasional.", specs: ["OS: Windows 10/11 64-bit", "CPU: Intel Core i5-10400", "RAM": 12 GB", "GPU: GTX 1660", "Storage: 35 GB"] },
    { id: 35, title: "Desert Rally", genre: "racing", genreLabel: "Balapan", size: "5.0 GB", downloads: "7.5k", image: "https://placehold.co/400x250/1a1a3e/f59e0b?text=Desert+Rally", description: "Taklukkan padang pasir dengan mobil rally. Navigasi medan ekstrem dan menangkan kejuaraan.", specs: ["OS: Windows 10 64-bit", "CPU: Intel Core i5-9400", "RAM": 8 GB", "GPU: GTX 1050 Ti", "Storage": 20 GB"] },

    // Fighting
    { id: 36, title: "Shadow Fight Arena", genre: "fighting", genreLabel: "Fighting", size: "3.8 GB", downloads: "19.6k", image: "https://placehold.co/400x250/1a1a3e/64748b?text=Shadow+Fight+Arena", description: "Game fighting dengan bayangan. Kuasai berbagai gaya bela diri dan kalahkan lawan di arena.", specs: ["OS: Windows 10 64-bit", "CPU: Intel Core i5-8400", "RAM: 8 GB", "GPU: GTX 1050", "Storage: 15 GB"] },
    { id: 37, title: "Mortal Kombat X", genre: "fighting", genreLabel: "Fighting", size: "8.2 GB", downloads: "32.1k", image: "https://placehold.co/400x250/1a1a3e/dc2626?text=Mortal+Kombat+X", description: "Game fighting legendaris dengan pertarungan brutal. Pilih petarung dan tunjukkan kemampuanmu.", specs: ["OS: Windows 10 64-bit", "CPU: Intel Core i5-9400", "RAM": 8 GB", "GPU: GTX 1050 Ti", "Storage: 40 GB"] },
    { id: 38, title: "Street Brawler", genre: "fighting", genreLabel: "Fighting", size: "4.5 GB", downloads: "11.2k", image: "https://placehold.co/400x250/1a1a3e/fbbf24?text=Street+Brawler", description: "Pertarungan jalanan klasik dengan roster petarung unik. Combo system yang memuaskan.", specs: ["OS: Windows 10 64-bit", "CPU: Intel Core i5-8400", "RAM: 8 GB", "GPU: GTX 1050", "Storage: 18 GB"] },

    // Sports
    { id: 39, title: "FIFA 2026", genre: "sports", genreLabel: "Olahraga", size: "9.0 GB", downloads: "45.2k", image: "https://placehold.co/400x250/1a1a3e/22c55e?text=FIFA+2026", description: "Game sepak bola paling realistis. Tim terkini, grafis terbaik, dan gameplay yang halus.", specs: ["OS: Windows 10/11 64-bit", "CPU: Intel Core i7-9700", "RAM": 16 GB", "GPU: RTX 2060", "Storage: 50 GB"] },
    { id: 40, title: "NBA Slam Dunk", genre: "sports", genreLabel: "Olahraga", size: "7.5 GB", downloads: "14.8k", image: "https://placehold.co/400x250/1a1a3e/f97316?text=NBA+Slam+Dunk", description: "Game basket arcade dengan aksi slam dunk spektakuler. Mode karir dan multiplayer seru.", specs: ["OS: Windows 10 64-bit", "CPU: Intel Core i5-9400", "RAM": 8 GB", "GPU: GTX 1050 Ti", "Storage: 30 GB"] },
    { id: 41, title: "Tennis Grand Slam", genre: "sports", genreLabel: "Olahraga", size: "3.0 GB", downloads: "5.6k", image: "https://placehold.co/400x250/1a1a3e/3b82f6?text=Tennis+Grand+Slam", description: "Game tenis realistis dengan semua turnamen grand slam. Kontrol presisi dan fisika bola akurat.", specs: ["OS: Windows 10 64-bit", "CPU: Intel Core i5-8400", "RAM: 8 GB", "GPU: GTX 1050", "Storage: 10 GB"] },

    // Puzzle
    { id: 42, title: "Portal Worlds", genre: "puzzle", genreLabel: "Puzzle", size: "2.8 GB", downloads: "12.5k", image: "https://placehold.co/400x250/1a1a3e/06b6d4?text=Portal+Worlds", description: "Game puzzle dengan portal. Pecahkan teka-teki fisika yang menantang di berbagai dunia.", specs: ["OS: Windows 10 64-bit", "CPU: Intel Core i5-8400", "RAM: 8 GB", "GPU: GTX 1050", "Storage: 10 GB"] },
    { id: 43, title: "Mystic Puzzle", genre: "puzzle", genreLabel: "Puzzle", size: "1.5 GB", downloads: "6.8k", image: "https://placehold.co/400x250/1a1a3e/a855f7?text=Mystic+Puzzle", description: "Puzzle game misterius dengan teka-teki logika. Cocok untuk mengasah otak.", specs: ["OS: Windows 7/10 64-bit", "CPU: Intel Core i3-8100", "RAM: 4 GB", "GPU: Intel HD Graphics", "Storage: 4 GB"] },
    { id: 44, title: "Block Builder", genre: "puzzle", genreLabel: "Puzzle", size: "800 MB", downloads: "8.3k", image: "https://placehold.co/400x250/1a1a3e/22c55e?text=Block+Builder", description: "Game puzzle bangun struktur. Kreativitas dan logika berpadu dalam game adiktif ini.", specs: ["OS: Windows 7/10 64-bit", "CPU: Intel Core i3-8100", "RAM: 4 GB", "GPU: Intel HD Graphics", "Storage: 2 GB"] },

    // Platformer
    { id: 45, title: "Super Mario Pixel", genre: "platformer", genreLabel: "Platformer", size: "500 KB", downloads: "99.9k", image: "https://placehold.co/400x250/1a1a3e/e74c3c?text=Super+Mario+Pixel", description: "Game platformer klasik Super Mario versi pixel. Mainkan langsung di browser! Lompat, kumpulkan koin, dan kalahkan musuh.", specs: ["Browser: Chrome/Firefox/Edge", "OS: Semua Platform", "RAM: 512 MB", "Storage: 1 MB", "Kontrol: Keyboard + Touch"] },
    { id: 46, title: "Sonic Dash", genre: "platformer", genreLabel: "Platformer", size: "2.0 GB", downloads: "28.4k", image: "https://placehold.co/400x250/1a1a3e/3b82f6?text=Sonic+Dash", description: "Platformer kecepatan tinggi. Kumpulkan cincin dan kalahkan Dr. Eggman dalam petualangan seru.", specs: ["OS: Windows 10 64-bit", "CPU: Intel Core i5-8400", "RAM: 8 GB", "GPU: GTX 1050", "Storage: 10 GB"] },
    { id: 47, title: "Mega Man X", genre: "platformer", genreLabel: "Platformer", size: "1.8 GB", downloads: "15.7k", image: "https://placehold.co/400x250/1a1a3e/3b82f6?text=Mega+Man+X", description: "Platformer action klasik. Kalahkan boss dan dapatkan senjata baru untuk tantangan berikutnya.", specs: ["OS: Windows 10 64-bit", "CPU: Intel Core i5-8400", "RAM: 8 GB", "GPU: GTX 1050", "Storage: 8 GB"] },

    // Retro
    { id: 48, title: "Pac-Man World", genre: "retro", genreLabel: "Retro", size: "200 MB", downloads: "33.2k", image: "https://placehold.co/400x250/1a1a3e/fbbf24?text=Pac-Man+World", description: "Klasik Pac-Man dalam versi modern. Makan titik, hindari hantu, dan raih skor tertinggi.", specs: ["OS: Windows 7/10 64-bit", "CPU: Intel Core i3", "RAM: 2 GB", "GPU: Intel HD Graphics", "Storage: 500 MB"] },
    { id: 49, title: "Space Invaders 2026", genre: "retro", genreLabel: "Retro", size: "300 MB", downloads: "8.9k", image: "https://placehold.co/400x250/1a1a3e/22c55e?text=Space+Invaders+2026", description: "Space Invaders reimagined. Pertahanan bumi dari serangan alien dengan grafis retro modern.", specs: ["OS: Windows 7/10 64-bit", "CPU: Intel Core i3", "RAM: 2 GB", "GPU: Intel HD Graphics", "Storage: 1 GB"] },
    { id: 50, title: "Street Fighter 2 HD", genre: "retro", genreLabel: "Retro", size: "1.2 GB", downloads: "22.8k", image: "https://placehold.co/400x250/1a1a3e/dc2626?text=Street+Fighter+2+HD", description: "Klasik fighting game dalam HD. Semua karakter original dengan grafis yang diperbarui.", specs: ["OS: Windows 10 64-bit", "CPU: Intel Core i5-8400", "RAM: 4 GB", "GPU: Intel HD Graphics", "Storage: 5 GB"] },

    // Indie
    { id: 51, title: "Void Survivor", genre: "indie", genreLabel: "Indie", size: "800 MB", downloads: "7.6k", image: "https://placehold.co/400x250/1a1a3e/14b8a6?text=Void+Survivor", description: "Survival RPG indie dengan mekanik crafting mendalam. Bertahan hidup di dunia yang hancur dan bangun peradaban baru.", specs: ["OS: Windows 7/10 64-bit", "CPU: Intel Core i3-8100", "RAM: 4 GB", "GPU: Intel HD Graphics", "Storage: 2 GB"] },
    { id: 52, title: "Pixel Story", genre: "indie", genreLabel: "Indie", size: "500 MB", downloads: "5.2k", image: "https://placehold.co/400x250/1a1a3e/f59e0b?text=Pixel+Story", description: "RPG indie dengan grafis pixel art yang memukau. Cerita mengharukan tentang persahabatan dan petualangan.", specs: ["OS: Windows 7/10 64-bit", "CPU: Intel Core i3-8100", "RAM: 4 GB", "GPU: Intel HD Graphics", "Storage: 1 GB"] },
    { id: 53, title: "The Last Campfire", genre: "indie", genreLabel: "Indie", size: "1.2 GB", downloads: "4.8k", image: "https://placehold.co/400x250/1a1a3e/a855f7?text=The+Last+Campfire", description: "Game petualangan indie yang mengharukan. Bantu makhluk tersesat menemukan jalan pulang.", specs: ["OS: Windows 10 64-bit", "CPU: Intel Core i3-8100", "RAM: 4 GB", "GPU: Intel HD Graphics", "Storage: 3 GB"] }
];

const gamesGrid = document.getElementById('gamesGrid');
const searchInput = document.getElementById('searchInput');
const genreFilter = document.getElementById('genreFilter');
const noResults = document.getElementById('noResults');
const modal = document.getElementById('gameModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalGenre = document.getElementById('modalGenre');
const modalSize = document.getElementById('modalSize');
const modalDesc = document.getElementById('modalDesc');
const modalSpecs = document.getElementById('modalSpecs');
const downloadBtn = document.getElementById('downloadBtn');
const closeBtn = document.querySelector('.close-btn');
const toast = document.getElementById('toast');

function downloadGame(game) {
    if (game.title === "Super Mario Pixel") {
        const link = document.createElement('a');
        link.href = 'mario-game.html';
        link.download = 'Super-Mario-Pixel.html';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast('Download Super Mario Pixel berhasil!');
        return;
    }

    const fileSize = game.size;
    const estimatedTime = fileSize.includes('GB') ?
        (parseFloat(fileSize) * 60).toFixed(0) + ' menit' :
        (parseFloat(fileSize) * 8).toFixed(0) + ' detik';

    const installerContent = `╔══════════════════════════════════════════╗
║         GameRPG - Download Manager        ║
╠══════════════════════════════════════════╣
║  Game: ${game.title.padEnd(32)}║
║  Genre: ${game.genreLabel.padEnd(31)}║
║  Ukuran: ${game.size.padEnd(29)}║
║  Versi: 1.0.0 (Full)                     ║
║                                          ║
║  ${'File installer sedang diunduh...'.padEnd(38)}║
║  Estimasi waktu: ${estimatedTime.padEnd(22)}║
║                                          ║
║  ⚠️  File ini adalah simulasi download.   ║
║  Game asli tersedia di toko resmi.       ║
╚══════════════════════════════════════════╝

Terima kasih telah menggunakan GameRPG!
Kunjungi https://gamerpg.com untuk game lainnya.
`;
    const blob = new Blob([installerContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = game.title.replace(/\s+/g, '-') + '-Installer.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast('Download ' + game.title + ' dimulai!');
}

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
        card.innerHTML = `
            <img src="${game.image}" alt="${game.title}" class="game-card-image" loading="lazy">
            <div class="game-card-body">
                <h3>${game.title}</h3>
                <div class="game-meta">
                    <span><i class="fas fa-hdd"></i> ${game.size}</span>
                    <span><i class="fas fa-download"></i> ${game.downloads}</span>
                </div>
                <span class="genre-tag">${game.genreLabel}</span>
            </div>
        `;
        card.addEventListener('click', () => openModal(game));
        gamesGrid.appendChild(card);
    });
}

function filterGames() {
    const query = searchInput.value.toLowerCase().trim();
    const genre = genreFilter.value;

    const filtered = games.filter(game => {
        const matchSearch = game.title.toLowerCase().includes(query) ||
            game.genreLabel.toLowerCase().includes(query);
        const matchGenre = genre === 'all' || game.genre === genre;
        return matchSearch && matchGenre;
    });

    renderGames(filtered);
}

searchInput.addEventListener('input', filterGames);
genreFilter.addEventListener('change', filterGames);

function openModal(game) {
    modalImage.src = game.image;
    modalImage.alt = game.title;
    modalTitle.textContent = game.title;
    modalGenre.textContent = 'Genre: ' + game.genreLabel;
    modalSize.textContent = 'Ukuran: ' + game.size;
    modalDesc.textContent = game.description;

    modalSpecs.innerHTML = '';
    game.specs.forEach(spec => {
        const li = document.createElement('li');
        li.textContent = spec;
        modalSpecs.appendChild(li);
    });

    if (game.title === "Super Mario Pixel") {
        downloadBtn.innerHTML = '<i class="fas fa-play"></i> Mainkan & Download';
        downloadBtn.onclick = (e) => {
            e.preventDefault();
            window.open('mario-game.html', '_blank');
            setTimeout(() => downloadGame(game), 1000);
        };
    } else {
        downloadBtn.innerHTML = '<i class="fas fa-download"></i> Download Game';
        downloadBtn.onclick = (e) => {
            e.preventDefault();
            downloadGame(game);
        };
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
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

// Contact form
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Pesan berhasil dikirim! Kami akan menghubungi Anda.');
    e.target.reset();
});

// Init
filterGames();
