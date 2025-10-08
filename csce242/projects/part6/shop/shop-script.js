async function loadShopItems() {
    const url = 'https://tylerbouldin.github.io/csce242/projects/part6/shop/shop-items.json';
    
    try {
        const response = await fetch(url);
        const items = await response.json();
        displayItems(items);
    } catch (error) {
        console.log('Error loading shop items:', error);
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

