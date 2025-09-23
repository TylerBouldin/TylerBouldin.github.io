const boatsBefore = {
    "Pontoon Boat": "images/beforePontoon.webp",
    "Ski Boat": "images/skiBefore.webp", 
    "Speed Boat": "images/speedBoatBefore.webp",
    "Wake Boat": "images/wakeBefore.webp"
};

const boatsAfter = {
    "Pontoon Boat": "images/pontoonAfter.webp",
    "Ski Boat": "images/skiAfter.webp",
    "Speed Boat": "images/speedBoatAfter.webp", 
    "Wake Boat": "images/wakeAfter.jpg"
};

function loadBoats() {
    const container = document.getElementById('boatsContainer');
    
    for (const boatName in boatsBefore) {
        const boatDiv = document.createElement('div');
        boatDiv.className = 'boat-item';
        boatDiv.setAttribute('data-boat-name', boatName);
        
        const img = document.createElement('img');
        img.src = boatsBefore[boatName];
        img.alt = boatName + ' before';
        img.className = 'boat-image';
        
        const overlay = document.createElement('div');
        overlay.className = 'boat-overlay';
        overlay.textContent = 'Please buy ' + boatName;
        
        boatDiv.appendChild(img);
        boatDiv.appendChild(overlay);
        container.appendChild(boatDiv);
        
        boatDiv.addEventListener('click', function() {
            showPopup(boatName);
        });
    }
}

function showPopup(boatName) {
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popupTitle');
    const popupImage = document.getElementById('popupImage');
    
    popupTitle.textContent = boatName + ' after purchase';
    popupImage.src = boatsAfter[boatName];
    popupImage.alt = boatName + ' after';
    
    popup.classList.remove('hidden');
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
    loadBoats();
    
    document.getElementById('close').addEventListener('click', closePopup);
    
    document.getElementById('popup').addEventListener('click', function(e) {
        if (e.target === this) {
            closePopup();
        }
    });
});
