document.addEventListener('DOMContentLoaded', function() {
    
    const exercise1Link = document.getElementById('exercise1');
    const exercise2Link = document.getElementById('exercise2');
    const plantingSection = document.getElementById('planting-section');
    const clockSection = document.getElementById('clock-section');
    const menuToggle = document.getElementById('menuToggle');
    const exerciseNav = document.querySelector('.exercise-nav');
    const daysSlider = document.getElementById('daysSlider');
    const daysText = document.getElementById('daysText');
    const statusText = document.getElementById('statusText');
    const plantIcon = document.getElementById('plantIcon');
    const timeDisplay = document.getElementById('timeDisplay');

    exercise1Link.addEventListener('click', function(e) {
        e.preventDefault();
        clockSection.classList.add('hidden');
        plantingSection.classList.remove('hidden');
        exercise1Link.classList.add('active');
        exercise2Link.classList.remove('active');
    });

    exercise2Link.addEventListener('click', function(e) {
        e.preventDefault();
        plantingSection.classList.add('hidden');
        clockSection.classList.remove('hidden');
        exercise2Link.classList.add('active');
        exercise1Link.classList.remove('active');
    });

    menuToggle.addEventListener('click', function() {
        console.log('Menu toggle clicked');
        exerciseNav.classList.toggle('show');
        menuToggle.classList.toggle('open');
        console.log('Open class toggled:', menuToggle.classList.contains('open'));
    });

    daysSlider.addEventListener('input', function() {
        const days = parseInt(this.value);
        
        daysText.textContent = `It's been ${days} day${days === 1 ? '' : 's'} since watering your plant`;
        
        if (days === 1) {
            plantIcon.textContent = '🌱';
            plantIcon.className = 'plant-icon plant-healthy';
            statusText.textContent = 'Your plant is fresh and thriving';
            
        } else if (days === 2) {
            plantIcon.textContent = '🌿';
            plantIcon.className = 'plant-icon plant-healthy';
            statusText.textContent = 'Your plant looks great and is growing well';
            
        } else if (days === 3) {
            plantIcon.textContent = '🌱';
            plantIcon.className = 'plant-icon plant-needs-water';
            statusText.textContent = 'Your plant is doing okay, but could use some water soon';
            
        } else if (days === 4) {
            plantIcon.textContent = '🌿';
            plantIcon.className = 'plant-icon plant-needs-water';
            statusText.textContent = 'Your plant is getting a bit thirsty, time to water';
            
        } else if (days === 5) {
            plantIcon.textContent = '🌱';
            plantIcon.className = 'plant-icon plant-needs-water';
            statusText.textContent = 'Your plant really needs water now, don\'t wait much longer';
            
        } else if (days === 6) {
            plantIcon.textContent = '🥀';
            plantIcon.className = 'plant-icon plant-wilting';
            statusText.textContent = 'Your plant is starting to droop, water it immediately';
            
        } else if (days === 7) {
            plantIcon.textContent = '🥀';
            plantIcon.className = 'plant-icon plant-wilting';
            statusText.textContent = 'Your plant is wilting badly, this is an emergency';
            
        } else if (days === 8) {
            plantIcon.textContent = '🥀';
            plantIcon.className = 'plant-icon plant-wilting';
            statusText.textContent = 'Your plant is in critical condition, water it now or it might not survive';
            
        } else if (days === 9) {
            plantIcon.textContent = '🥀';
            plantIcon.className = 'plant-icon plant-wilting';
            statusText.textContent = 'Your plant is barely hanging on, this might be your last chance';
            
        } else if (days === 10) {
            plantIcon.textContent = '💀';
            plantIcon.className = 'plant-icon plant-dead';
            statusText.textContent = 'Your plant is almost gone, it\'s probably too late to save it';
            
        } else if (days === 11) {
            plantIcon.textContent = '💀';
            plantIcon.className = 'plant-icon plant-dead';
            statusText.textContent = 'Your plant has given up, it\'s time to say goodbye';
            
        } else if (days === 12) {
            plantIcon.textContent = '💀';
            plantIcon.className = 'plant-icon plant-dead';
            statusText.textContent = 'Your plant is no longer with us, RIP little plant';
        }
    });

    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        
        hours = hours % 12;
        hours = hours ? hours : 12;
        
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        
        timeDisplay.textContent = `${hours}:${formattedMinutes} ${ampm}`;
    }

    updateClock();
    setInterval(updateClock, 60000);

    exercise1Link.classList.add('active');
    plantingSection.classList.remove('hidden');
    clockSection.classList.add('hidden');
    
    daysSlider.dispatchEvent(new Event('input'));
});
