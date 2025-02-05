let content_container = document.getElementById('all-imgs-container');
let overlay = document.getElementById('overlay');
let path = './images/content_images/';
let allImages = [];

let images = [
    'angel_of_the_north.avif',
    'burgruine_hardenstein.avif',
    'burg_blankenstein.avif',
    'celtic_cross.avif',
    'irish_landsight.avif',
    'netherlands_evening.avif',
    'nevermore.avif',
    'roses_of_westerholt.avif',
    'sun_over_sea.avif',
    'the_long_hall.avif',
    'view_to_an_angel.avif',
    'westerholt_leuchtet.avif',
];

function renderImages() {
    for (i = 0; i < images.length; i++) {
        content_container.innerHTML += getImgHtml(
            path,
            images[i],
            `Picture of ${images[i].substring(0, images[i].length - 4)}`,
            i
        );
    }
}

function openOverlay(event) {
    overlay.classList.remove('d_none');
    allImages = document.getElementsByClassName('renderedImg');

    for (i = 0; i < allImages.length; i++) {
        allImages[i].classList.add('img-in-bg');
    }

    overlay.innerHTML = getOverlayHtml(event, allImages.length);
}

function closeOverlay() {
    overlay.classList.add('d_none');

    for (i = 0; i < allImages.length; i++) {
        allImages[i].classList.remove('img-in-bg');
    }
}

function getCurrentImageId() {
    let current_alt = document.getElementById('overlay-img').alt;
    let idToReturn = 0;
    for (i = 0; i < allImages.length; i++) {
        if (allImages[i].alt == current_alt) {
            idToReturn = allImages[i].id;
            break;
        }
    }

    return idToReturn;
}

function getNextImageLeft() {
    let currentId = getCurrentImageId();
    let imgCounterDown = currentId;
    imgCounterDown--;
    let overlay_img = document.getElementById('overlay-picked-img');
    let overlay_navCounter = document.getElementById('overlay-nav-counter');

    if (imgCounterDown < 0) {
        imgCounterDown = allImages.length - 1;
    }

    overlay_img.innerHTML = renderNextImg(allImages[imgCounterDown]);
    overlay_navCounter.innerText = renderNewCounter(
        imgCounterDown + 1,
        allImages.length
    );
    updateOverlayImageTitle(allImages[imgCounterDown].src);
}

function getNextImageRight() {
    let currentId = getCurrentImageId();
    let imgCounterUp = currentId;
    imgCounterUp++;
    let overlay_img = document.getElementById('overlay-picked-img');
    let overlay_navCounter = document.getElementById('overlay-nav-counter');

    if (imgCounterUp >= allImages.length) {
        imgCounterUp = 0;
    }

    overlay_img.innerHTML = renderNextImg(allImages[imgCounterUp]);
    overlay_navCounter.innerText = renderNewCounter(
        imgCounterUp + 1,
        allImages.length
    );
    updateOverlayImageTitle(allImages[imgCounterUp].src);
}

function updateOverlayImageTitle(title) {
    let imageTitle = document.getElementById('img-title');
    imageTitle.innerText = renderNewTitle(title);
}
