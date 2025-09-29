class Painting {
    constructor(name, artist, image, framed, location) {
        this.name = name;
        this.artist = artist;
        this.image = image;
        this.framed = framed;
        this.location = location;
    }

    getSection() {
        return `
            <div class="painting-item" onclick="showModal('${this.name}', '${this.artist}', '${this.image}', ${this.framed}, '${this.location}')">
                <img src="images/${this.image}" class="painting-image" alt="${this.name}">
                <div class="painting-title">${this.name}</div>
            </div>
        `;
    }
}

const paintings = [
    new Painting("Girl with a Pearl Earring", "Johannes Vermeer", "blondeLday.jpg", true, "Mauritshuis, The Hague, Netherlands"),
    new Painting("The Swing", "Jean-Honore Fragonard", "pinkLday.webp", false, "Wallace Collection, London, UK"),
    new Painting("Starry Night", "Vincent van Gogh", "starry-night.jpg", true, "Museum of Modern Art (MoMA), New York City, USA"),
    new Painting("The School of Athens", "Raphael", "wallPainting.jpeg", false, "Apostolic Palace, Vatican City"),
    new Painting("The Scream", "Edvard Munch", "weirdPerson.webp", true, "National Gallery, Oslo, Norway")
];

function loadPaintings() {
    const container = document.getElementById('paintings-container');
    paintings.forEach(painting => {
        container.innerHTML += painting.getSection();
    });
}

function showModal(name, artist, image, framed, location) {
    document.getElementById('modal-title').textContent = name;
    document.getElementById('modal-artist').textContent = `by ${artist}`;
    document.getElementById('modal-location').textContent = `Location: ${location}`;
    document.getElementById('modal-image').src = `images/${image}`;
    
    if (framed) {
        document.getElementById('modal-image').style.border = '5px solid #000';
    } else {
        document.getElementById('modal-image').style.border = 'none';
    }
    
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}

document.addEventListener('DOMContentLoaded', loadPaintings);
