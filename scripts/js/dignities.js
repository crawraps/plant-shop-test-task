"use strict";
function createDignityDOM(dignity) {
    const dignityDOM = document.createElement('div');
    dignityDOM.className = 'dignity';
    dignityDOM.innerHTML = `
    <div class="dignity-title-block">
      <img class="dignity-title-image" height="48" width="48" src="${dignity.icon}" alt="${dignity.title}">
      <h3 class="dignity-title">${dignity.title}</h3>
    </div>
    <p class="dignity-subtitle">${dignity.subtitle}</p>  
  `;
    return dignityDOM;
}
function addDignities(parent, dignities) {
    dignities.forEach((dignity) => {
        parent.appendChild(createDignityDOM(dignity));
    });
}
