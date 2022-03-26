"use strict";
function createPlantDOM(plant) {
    const plantDOM = document.createElement('div');
    plantDOM.className = 'plant';
    plantDOM.innerHTML = `
    <div class="plant-image" style="background-image: url(${plant.icon})"></div>
    <h4 class="plant-title">${plant.title}</h4>
    <span class="plant-subtitle">${plant.subtitle}</span>
  `;
    // Used background-image property instead of <img> because of unformatted images
    return plantDOM;
}
function addPlants(parent, plants) {
    plants.forEach((plant) => {
        parent.appendChild(createPlantDOM(plant));
    });
}
