// State variables
let viewCounter = 0; // Tracks image lightbox views
let videoViewCounter = 0; // Tracks video lightbox views
let streakCounter = 0; // Tracks consecutive views
let images = document.querySelectorAll('#image-gallery img'); // Image gallery
let videos = document.querySelectorAll('.video-thumb'); // Video gallery
const imageLightbox = document.querySelector('#image-lightbox'); // Image lightbox
const videoLightbox = document.querySelector('#video-lightbox'); // Video lightbox
const lightboxImage = document.querySelector('.lightbox-image'); // Lightbox image
const lightboxVideo = document.querySelector('.lightbox-video'); // Lightbox video
const caption = document.querySelectorAll('.caption'); // Captions
const thumbnails = document.querySelectorAll('.thumbnail-preview img'); // Image thumbnails
let currentImageIndex = 0; // Current image index
let currentVideoIndex = 0; // Current video index
let isDragging = false; // Gallery drag state
let startX, scrollLeft;

// Initialize image lightbox
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        openImageLightbox(index);
    });
});

// Initialize video lightbox
videos.forEach((vid, index) => {
    vid.addEventListener('click', () => {
        openVideoLightbox(index);
    });
});

// Opens image lightbox at specified index
function openImageLightbox(index) {
    currentImageIndex = index;
    const img = images[index];
    lightboxImage.src = img.dataset.full;
    lightboxImage.alt = img.alt;
    caption[0].textContent = img.dataset.caption;
    imageLightbox.classList.add('active');
    updateThumbnails();
    viewCounter++;
    streakCounter++;
    document.querySelector('#view-counter').textContent = viewCounter;
    document.querySelector('#streak-counter').textContent = streakCounter;
    triggerConfetti();
    updateAchievements();
}

// Opens video lightbox at specified index
function openVideoLightbox(index) {
    currentVideoIndex = index;
    const vid = videos[index];
    lightboxVideo.src = `${vid.dataset.video}?mute=1`; // Append mute=1 to mute video
    caption[1].textContent = vid.dataset.caption;
    videoLightbox.classList.add('active');
    videoViewCounter++;
    streakCounter++;
    document.querySelector('#video-view-counter').textContent = videoViewCounter;
    document.querySelector('#streak-counter').textContent = streakCounter;
    triggerConfetti();
    updateAchievements();
}

// Updates image thumbnail preview highlighting
function updateThumbnails() {
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentImageIndex);
    });
}

// Closes lightboxes
document.querySelectorAll('.close').forEach(close => {
    close.addEventListener('click', () => {
        imageLightbox.classList.remove('active');
        videoLightbox.classList.remove('active');
        lightboxVideo.src = ''; // Stop video
        streakCounter = 0;
        document.querySelector('#streak-counter').textContent = streakCounter;
    });
});

// Navigate image lightbox
document.querySelector('#image-lightbox .prev').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    openImageLightbox(currentImageIndex);
});

document.querySelector('#image-lightbox .next').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    openImageLightbox(currentImageIndex);
});

// Navigate video lightbox
document.querySelector('#video-lightbox .prev').addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    openVideoLightbox(currentVideoIndex);
});

document.querySelector('#video-lightbox .next').addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    openVideoLightbox(currentVideoIndex);
});

// Image thumbnail click navigation
thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        openImageLightbox(index);
    });
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'l' || e.key === 'L') {
        if (!imageLightbox.classList.contains('active') && !videoLightbox.classList.contains('active')) {
            if (images.length > 0) openImageLightbox(0);
        }
    } else if (e.key === 'v' || e.key === 'V') {
        if (!imageLightbox.classList.contains('active') && !videoLightbox.classList.contains('active')) {
            if (videos.length > 0) openVideoLightbox(0);
        }
    } else if (e.key === 't' || e.key === 'T') {
        document.querySelector('#timeline').scrollIntoView({ behavior: 'smooth' });
        triggerAchievement('ach-timeline');
    } else if (imageLightbox.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            openImageLightbox(currentImageIndex);
        } else if (e.key === 'ArrowRight') {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            openImageLightbox(currentImageIndex);
        } else if (e.key === 'Escape') {
            imageLightbox.classList.remove('active');
            streakCounter = 0;
            document.querySelector('#streak-counter').textContent = streakCounter;
        }
    } else if (videoLightbox.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
            openVideoLightbox(currentVideoIndex);
        } else if (e.key === 'ArrowRight') {
            currentVideoIndex = (currentVideoIndex + 1) % videos.length;
            openVideoLightbox(currentVideoIndex);
        } else if (e.key === 'Escape') {
            videoLightbox.classList.remove('active');
            lightboxVideo.src = ''; // Stop video
            streakCounter = 0;
            document.querySelector('#streak-counter').textContent = streakCounter;
        }
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll-to-top button
const scrollTopBtn = document.querySelector('#scroll-top');
window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Section reveal and skill bar animation
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            section.classList.add('visible');
            if (section.id === 'skills') {
                document.querySelectorAll('.progress').forEach(bar => {
                    bar.style.width = `${bar.dataset.progress}%`;
                });
            }
        }
    });
});

// Gallery drag-to-scroll
document.querySelectorAll('.gallery').forEach(gallery => {
    gallery.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - gallery.offsetLeft;
        scrollLeft = gallery.scrollLeft;
    });
    gallery.addEventListener('mouseleave', () => {
        isDragging = false;
    });
    gallery.addEventListener('mouseup', () => {
        isDragging = false;
    });
    gallery.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - gallery.offsetLeft;
        const walk = (x - startX) * 2;
        gallery.scrollLeft = scrollLeft - walk;
    });
});

// Contact form validation (visual only)
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll('#contact-form input, #contact-form textarea');
    let valid = true;
    inputs.forEach(input => {
        if (!input.value) {
            input.style.border = '2px solid #ff4500';
            valid = false;
        } else {
            input.style.border = '2px solid #ffd700';
        }
    });
    if (valid) {
        alert('Form submitted! (Demo only)');
        triggerConfetti();
        inputs.forEach(input => (input.value = ''));
    }
});

// Galaxy background animation
const canvas = document.querySelector('#galaxy-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 300;
for (let i = 0; i < numStars; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * canvas.width,
        radius: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.1
    });
}

function drawGalaxy() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Nebula gradient
    const gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width);
    gradient.addColorStop(0, 'rgba(30, 60, 114, 0.8)');
    gradient.addColorStop(1, 'rgba(42, 82, 152, 0.2)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw 3D stars
    stars.forEach(star => {
        star.z -= parseFloat(star.speed);
        if (star.z <= 0) {
            star.z = canvas.width;
            star.x = Math.random() * canvas.width;
            star.y = Math.random() * canvas.height;
        }
        const sx = (star.x - canvas.width / 2) * (canvas.width / star.z) + canvas.width / 2;
        const sy = (star.y - canvas.height / 2) * (canvas.width / star.z) + canvas.height / 2;
        const scale = canvas.width / star.z;
        ctx.beginPath();
        ctx.arc(sx, sy, star.radius * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${1 - star.z / canvas.width})`;
        ctx.fill();
    });

    // Comet effect
    if (Math.random() < 0.01) {
        ctx.beginPath();
        ctx.moveTo(canvas.width, Math.random() * canvas.height);
        ctx.lineTo(canvas.width - 100, Math.random() * canvas.height);
        ctx.strokeStyle = 'rgba(255, 215, 0, 0.5)';
        ctx.stroke();
    }

    requestAnimationFrame(drawGalaxy);
}

// Handle window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Update achievements
function updateAchievements() {
    if (viewCounter >= 5) {
        document.querySelector('#ach-5').classList.add('unlocked');
        if (viewCounter === 5) triggerConfetti();
    }
    if (viewCounter >= 10) {
        document.querySelector('#ach-10').classList.add('unlocked');
        if (viewCounter === 10) triggerConfetti();
    }
    if (videoViewCounter >= 2) {
        document.querySelector('#ach-video').classList.add('unlocked');
        if (videoViewCounter === 2) triggerConfetti();
    }
}

// Trigger specific achievement
function triggerAchievement(id) {
    const ach = document.querySelector(`#${id}`);
    if (!ach.classList.contains('unlocked')) {
        ach.classList.add('unlocked');
        triggerConfetti();
    }
}

// Trigger confetti
function triggerConfetti() {
    if (typeof confetti === 'function') {
        confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 }, colors: ['#ffd700', '#ff4500', '#ffec99'] });
    }
}

// Start galaxy animation
drawGalaxy();