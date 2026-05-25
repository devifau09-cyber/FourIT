JS

// KONTROL HAMBURGER MENU MOBILE
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');

menuBtn.addEventListener('click', () => {
    // Membuka atau menutup menu list (Slide dari samping kiri)
    if (menu.classList.contains('left-[-100%]')) {
        menu.classList.remove('left-[-100%]');
        menu.classList.add('left-0');
    } else {
        menu.classList.remove('left-0');
        menu.classList.add('left-[-100%]');
    }

    // Animasi tombol garis tiga berubah jadi bentuk (X)
    bar1.classList.toggle('rotate-45');
    bar1.classList.toggle('translate-y-2');
    bar2.classList.toggle('opacity-0');
    bar3.classList.toggle('-rotate-45');
    bar3.classList.toggle('-translate-y-2');
});

// Tutup menu secara otomatis saat user mengklik salah satu link tautan di HP
document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('left-0');
        menu.classList.add('left-[-100%]');
        
        bar1.classList.remove('rotate-45', 'translate-y-2');
        bar2.classList.remove('opacity-0');
        bar3.classList.remove('-rotate-45', '-translate-y-2');
    });
});


// ANIMASI PENGHITUNG ANGKA (COUNTER)
const counters = document.querySelectorAll('.counter');
const speed = 150; 

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target + "+"; 
            }
        };
        updateCount();
    });
};

// Memicu jalannya counter saat discroll ke area target stats
const statsSection = document.querySelector('.counter')?.parentElement?.parentElement;
let animated = false;

window.addEventListener('scroll', () => {
    if(!statsSection) return;
    const sectionPos = statsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.1;

    if (sectionPos < screenPos && !animated) {
        startCounters();
        animated = true;
    }
});


// HANDLING SUBMIT FORM PENDAFTARAN
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Data pendaftaran Anda berhasil terkirim. Tim SMK Budi Bakti Ciwidey akan segera menghubungi Anda.');
    this.reset();
});
