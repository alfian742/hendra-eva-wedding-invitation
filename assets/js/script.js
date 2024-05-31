// Pengaturan Countdown
simplyCountdown('.simply-countdown', {
    year: 2024,
    month: 6,
    day: 2,
    hours: 12,
    words: {
        days: { singular: 'hari', plural: 'hari' },
        hours: { singular: 'jam', plural: 'jam' },
        minutes: { singular: 'menit', plural: 'menit' },
        seconds: { singular: 'detik', plural: 'detik' }
    },
});

// Penanganan audio
const rootElement = document.querySelector(":root");
const audioIconWrapper = document.querySelector('.audio-icon-wrapper');
const audioIcon = document.querySelector('.audio-icon-wrapper i');
const song = document.querySelector('#song');
let isPlaying = false;

// Fungsi untuk menonaktifkan scroll
function disableScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = () => {
        window.scrollTo(scrollTop, scrollLeft);
    };

    rootElement.style.scrollBehavior = 'auto';
}

// Fungsi untuk mengaktifkan scroll
function enableScroll() {
    window.onscroll = () => { };
    rootElement.style.scrollBehavior = 'smooth';
    playAudio();
}

// Fungsi untuk memutar audio
function playAudio() {
    song.volume = 0.5;
    audioIconWrapper.style.display = 'flex';
    song.play();
    isPlaying = true;
}

// Penanganan klik pada ikon audio
audioIconWrapper.onclick = () => {
    if (isPlaying) {
        song.pause();
        audioIcon.classList.remove('bi-disc');
        audioIcon.classList.add('bi-pause-circle');
    } else {
        song.play();
        audioIcon.classList.add('bi-disc');
        audioIcon.classList.remove('bi-pause-circle');
    }

    isPlaying = !isPlaying;
};

// Menonaktifkan scroll saat halaman dimuat
disableScroll();