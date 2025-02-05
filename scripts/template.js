function getImgHtml(path, img_title, alt_description, indexer) {
    return `<div class="img-container" onclick="openOverlay(event)">
                    <img id="${indexer}" class="renderedImg" src="${path}${img_title}" alt="${alt_description}" />
                </div>
			`;
}

function getOverlayHtml(event, counter) {
    return `<div class="overlay-container">
                <div class="overlayHead">
                    <div>
                        <span id="img-title">${event.target.src
                            .replace(/^.*[\\/]/, '')
                            .replace('.avif', '')}</span>
                    </div>
                    <div class="overlay-close-button" onclick="closeOverlay()">
                        <div id="overlay-close-x1"></div>
                        <div id="overlay-close-x2"></div>
                    </div>
                </div>
                <div id="overlay-picked-img" class="overlay-picked-img">
                    <img id="overlay-img" src="${event.target.src}" alt="${
        event.target.alt
    }" />
                </div>
                <div class="overlay-footer-nav">
                    <button id="overlay-nav-left" class="overlay-nav-arrow" onclick="getNextImageLeft()">&#8678</button>
                    <div id="overlay-nav-counter">${
                        parseInt(event.target.id) + 1
                    }/${counter}</div>
                    <button id="overlay-nav-right" class="overlay-nav-arrow" onclick="getNextImageRight()">&#8680</button>
                </div>
            </div>
            `;
}

function renderNextImg(image) {
    return `<img id="overlay-img" src="${image.src}" alt="${image.alt}" />`;
}

function renderNewCounter(imageCounter, arrayLength) {
    return `${imageCounter}/${arrayLength}`;
}

function renderNewTitle(title) {
    return `${title.replace(/^.*[\\/]/, '').replace('.avif', '')}`;
}
