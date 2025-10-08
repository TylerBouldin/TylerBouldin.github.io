async function loadFeatures() {
    const url = 'https://tylerbouldin.github.io/csce242/projects/part6/data.json';
    
    try {
        console.log('Trying to fetch from:', url);
        const response = await fetch(url);
        console.log('Response status:', response.status);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Loaded features:', data.features);
        displayFeatures(data.features);
    } catch (error) {
        console.log('Error loading features:', error);
        const featuresContainer = document.getElementById('features-container');
        featuresContainer.innerHTML = '<p>Error loading features. Please check console for details.</p>';
    }
}

function displayFeatures(features) {
    const featuresContainer = document.getElementById('features-container');
    featuresContainer.innerHTML = '';
    
    features.forEach(feature => {
        const featureHTML = `
            <div class="feature-card">
                <div class="feature-icon">${feature.icon}</div>
                <h4>${feature.title}</h4>
                <p>${feature.description}</p>
            </div>
        `;
        
        featuresContainer.innerHTML += featureHTML;
    });
}

window.onload = loadFeatures;
