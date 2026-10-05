let galleryPictures = [
    "Alaska-810433_1280.jpg",
    "c1ri-nature-5411408_1280.jpg",
    "dominickvietor-volcano-8488486_1280.jpg",
    "elg21-lake-6701636_1280.jpg",
    "gregovish-sunset-291021_1280.jpg",
    "jplenio-trees-8686902_1280.jpg",
    "nevigetom-spotted-owlet-5093773_1280.jpg",
    "sushuti-bali-2975787_1280.jpg",
    "timrael-seals-6627197_1280.jpg",
    "trondmyhre4-water-6579313_1280.jpg",
    "walkerssk-beach-1761410_1280.jpg",
    "worldvashemudomu-winter-4742436_1280.jpg"
];

function initGalleryFunctions() {
loadGalleryItem();

}

function loadGalleryItem() {
    let contentRef = document.getElementById('gallery')
    for (let indexGalleryItem = 0; indexGalleryItem < galleryPictures.length; indexGalleryItem++) {
        contentRef.innerHTML += getNotesTemplate(indexGalleryItem);
    }
}

function getNotesTemplate(indexGalleryItem) {
    return `<img class="gallery-item" src="./assets/img/${galleryPictures[indexGalleryItem]}" onclick="openDialog(${indexGalleryItem})" alt="Bild aus der Photogallerie">`

}

let currentIndex = 0;

function openDialog(indexGalleryItem) {
    currentIndex = indexGalleryItem;
    renderDialog();
    document.getElementById('gallery-dialog').showModal();
}

function renderDialog() {
    let pictureName = galleryPictures[currentIndex];

    document.getElementById('dialog-img').src = `./assets/img/${pictureName}`;
    document.getElementById('dialog-title').innerText = pictureName.replace('.jpg', '');
    document.getElementById('dialog-counter').innerText = `${currentIndex + 1}/${galleryPictures.length}`;
}

function showNextPicture() {
    currentIndex++;
    if (currentIndex >= galleryPictures.length) {
        currentIndex = 0;
    }
    renderDialog();
}

function showPreviousPicture() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = galleryPictures.length - 1;
    }
    renderDialog();
}

function closeDialog() {
    document.getElementById('gallery-dialog').close();
}

function closeDialogOnBackdrop(event) {
    if (event.target === event.currentTarget) {
        closeDialog();
    }
}
