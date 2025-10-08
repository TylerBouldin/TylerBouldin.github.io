async function loadGalleryItems() {
    const url = 'https://tylerbouldin.github.io/csce242/projects/part6/gallery/gallery-items.json';
    
    try {
        console.log('Trying to fetch from:', url);
        const response = await fetch(url);
        console.log('Response status:', response.status);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const items = await response.json();
        console.log('Loaded gallery items:', items);
        displayGalleryItems(items);
    } catch (error) {
        console.log('Error loading gallery items:', error);
        const galleryGrid = document.getElementById('gallery-grid');
        galleryGrid.innerHTML = '<p>Error loading gallery. Please check console for details.</p>';
    }
}

function displayGalleryItems(items) {
    const galleryGrid = document.getElementById('gallery-grid');
    galleryGrid.innerHTML = '';
    
    items.forEach(item => {
        const itemHTML = `
            <div class="gallery-item">
                <img src="${item.img_name}" alt="${item.alt_text}">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        
        galleryGrid.innerHTML += itemHTML;
    });
}

window.onload = loadGalleryItems;
