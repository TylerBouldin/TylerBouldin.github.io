async function loadShopItems() {
    const url = 'https://tylerbouldin.github.io/csce242/projects/part6/data.json';
    
    try {
        console.log('Trying to fetch from:', url);
        const response = await fetch(url);
        console.log('Response status:', response.status);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Loaded items:', data.shop);
        displayItems(data.shop);
    } catch (error) {
        console.log('Error loading shop items:', error);
        // Show error message on page
        const shopGrid = document.getElementById('shop-grid');
        shopGrid.innerHTML = '<p>Error loading products. Please check console for details.</p>';
    }
}

function displayItems(items) {
    const shopGrid = document.getElementById('shop-grid');
    shopGrid.innerHTML = '';
    
    items.forEach(item => {
        const itemHTML = `
            <a href="${item.link}" class="shop-item">
                <h3>${item.name}</h3>
                <div class="item-image">
                    <img src="${item.img_name}" alt="${item.name}">
                </div>
                <p class="item-price">${item.price}</p>
            </a>
        `;
        
        shopGrid.innerHTML += itemHTML;
    });
}

window.onload = loadShopItems;

