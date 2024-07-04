let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-container img');
const fullSizeImages = [
    "Images/Fullsize/Casting1.png",
    "Images/Fullsize/Casting2.png",
    "Images/Fullsize/Casting3.png",
    "Images/Fullsize/Casting4.png",
    "Images/Fullsize/Casting5.png",
    "Images/Fullsize/Casting6.png",
    "Images/Fullsize/Casting7.png",
    "Images/Fullsize/Casting8.png",
    "Images/Fullsize/Casting9.png",
    "Images/Fullsize/Casting10.png"
];

function openLightbox(index) {
    currentImageIndex = index;
    document.getElementById("lightbox-img").src = fullSizeImages[currentImageIndex];
    document.getElementById("lightbox-container").style.display = "block";
    loadThumbnails();
}

function closeLightbox() {
    document.getElementById("lightbox-container").style.display = "none";
}

function navigateLightbox(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = fullSizeImages.length - 1;
    } else if (currentImageIndex >= fullSizeImages.length) {
        currentImageIndex = 0;
    }
    document.getElementById("lightbox-img").src = fullSizeImages[currentImageIndex];
}

function loadThumbnails() {
    const thumbnailContainer = document.getElementById("lightbox-thumbnails");
    thumbnailContainer.innerHTML = "";
    fullSizeImages.forEach((src, index) => {
        const thumb = document.createElement("img");
        thumb.src = src.replace("Fullsize", "Thumbnails");
        thumb.onclick = () => openLightbox(index);
        thumbnailContainer.appendChild(thumb);
    });
}

document.getElementById("lightbox-container").addEventListener('click', function(event) {
    if (event.target === this) {
        closeLightbox();
    }
});
