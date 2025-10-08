async function loadInstructions() {
    const url = 'https://tylerbouldin.github.io/csce242/projects/part6/how-to-play/instructions.json';
    
    try {
        console.log('Trying to fetch from:', url);
        const response = await fetch(url);
        console.log('Response status:', response.status);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const instructions = await response.json();
        console.log('Loaded instructions:', instructions);
        displayInstructions(instructions);
    } catch (error) {
        console.log('Error loading instructions:', error);
        const instructionsContainer = document.getElementById('instructions-container');
        instructionsContainer.innerHTML = '<p>Error loading instructions. Please check console for details.</p>';
    }
}

function displayInstructions(instructions) {
    const instructionsContainer = document.getElementById('instructions-container');
    instructionsContainer.innerHTML = '';
    
    instructions.forEach(instruction => {
        const instructionHTML = `
            <div class="section-item">
                <div class="text-content">
                    <h3>${instruction.title}</h3>
                    <p>${instruction.description}</p>
                </div>
                <div class="image-content">
                    <img src="${instruction.img_name}" alt="${instruction.alt_text}">
                </div>
            </div>
        `;
        
        instructionsContainer.innerHTML += instructionHTML;
    });
}

window.onload = loadInstructions;
