"use strict";
window.addEventListener('load', () => {
    // Create and implement dignities and plants
    addDignities(document.getElementsByClassName('dignities')[0], dignities);
    addPlants(document.getElementsByClassName('plants-container')[0], plants);
    // Open modal window
    const formButton = document.getElementsByName('open-form-button')[0];
    formButton.addEventListener('click', openModalWindow);
});
