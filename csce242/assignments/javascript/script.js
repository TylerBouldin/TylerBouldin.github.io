const lyrics = [
    "Here comes the sun",
    "Sun",
    "Sun", 
    "Sun",
    "Here it comes"
];

const sunnyColumn = document.getElementById('sunny-times-column');
const sunnyContent = document.getElementById('sunny-content');
const colorPicker = document.getElementById('color-picker');
const colorPreview = document.getElementById('color-preview');
const colorCode = document.getElementById('color-code');
const sunnyButton = document.getElementById('sunny-button');
const weatherImage = document.getElementById('weather-image');

let isSunny = false;

const showLyrics = () => {
    sunnyContent.innerHTML = '<div class="lyrics"><p>Here comes the sun</p><p>Sun</p><p>Sun</p><p>Sun</p><p>Here it comes</p></div>';
};

const hideLyrics = () => {
    sunnyContent.innerHTML = '';
};

const changeColor = (color) => {
    colorPreview.style.backgroundColor = color;
    colorCode.textContent = 'Color Code: ' + color.toUpperCase();
    colorCode.style.color = color;
};

const changeImage = () => {
    if (isSunny) {
        weatherImage.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDIwMCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTUwIiBmaWxsPSIjMzM2NkNDIi8+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNDAiIHI9IjIwIiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSI4MCIgY3k9IjMwIiByPSIxNSIgZmlsbD0id2hpdGUiLz4KPGNpcmNsZSBjeD0iMTIwIiBjeT0iNTAiIHI9IjE4IiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSIxNTAiIGN5PSIzNSIgcj0iMTIiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgY3g9IjE4MCIgY3k9IjQ1IiByPSIxNCIgZmlsbD0id2hpdGUiLz4KPC9zdmc+";
        sunnyButton.textContent = 'Become Sunny';
        isSunny = false;
    } else {
        weatherImage.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDIwMCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTUwIiBmaWxsPSIjODdDRUYiLz4KPGNpcmNsZSBjeD0iMTAwIiBjeT0iNzUiIHI9IjQwIiBmaWxsPSIjRkZEMDAwIi8+CjxjaXJjbGUgY3g9IjkwIiBjeT0iNjUiIHI9IjgiIGZpbGw9IiMzMzMzMzMiLz4KPGNpcmNsZSBjeD0iMTEwIiBjeT0iNjUiIHI9IjgiIGZpbGw9IiMzMzMzMzMiLz4KPGVsbGlwc2UgY3g9IjEwMCIgY3k9IjgwIiByeD0iMTUiIHJ5PSI4IiBmaWxsPSIjMzMzMzMzIi8+CjxjaXJjbGUgY3g9IjkwIiBjeT0iNjAiIHI9IjMiIGZpbGw9IiNGRjY2OTkiLz4KPGNpcmNsZSBjeD0iMTEwIiBjeT0iNjAiIHI9IjMiIGZpbGw9IiNGRjY2OTkiLz4KPC9zdmc+";
        sunnyButton.textContent = 'Become Cloudy';
        isSunny = true;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    
    sunnyColumn.addEventListener('click', () => {
        if (sunnyContent.innerHTML === '') {
            showLyrics();
        } else {
            hideLyrics();
        }
    });
    
    colorPicker.addEventListener('input', (event) => {
        changeColor(event.target.value);
    });
    
    sunnyButton.addEventListener('click', () => {
        changeImage();
    });
    
    changeColor('#ff0000');
    
});
