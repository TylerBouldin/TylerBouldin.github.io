/*const sayHello = () => {
    console.log("Hello World");
}


const btnClickMe = document.getElementById("btn-click-me").onclick = sayHello;
*/
document.getElementById("btn-click-me").onclick = (event) => {
    document.getElementById("p-welcome").innerHTML = "Hello World";
    event.currentTarget.classList.add("clicked");
    //curent target is the button that was clicked
};

document.getElementById("btn-happy").onclick = (event) => {
    document.getElementById("p-welcome").innerHTML = "Happy";
    document.getElementById("p-welcome").classList = "Happy";

    event.currentTarget.classList.add("clicked");
};

document.getElementById("btn-mood-ring").onclick = (event) => {
    const color = document.getElementById("txt-color").value.trim().toLowerCase();
    const p = document.getElementById("p-mood-results");
    p.innerHTML = "";
    const error = document.getElementById("error-color");
    error.innterHTML = "";

    if(color = ""){
        document.getElementById("error-color").innerHTML = "* blank";
    }
    else if(color = "red"){
        mood="angry"
    }
    else if(color = "blue"){
        mood="sad"
    }
    else if(color = "yellow"){
        mood="mellow"
    }
}

// Percentage Progress Bar functionality
document.getElementById("update-progress").onclick = (event) => {
    const percentageInput = document.getElementById("percentage-input");
    const progressFill = document.getElementById("progress-fill");
    const percentageDisplay = document.getElementById("percentage-display");
    
    let percentage = parseInt(percentageInput.value);
    
    // Validate input
    if (isNaN(percentage) || percentage < 0) {
        percentage = 0;
    } else if (percentage > 100) {
        percentage = 100;
    }
    
    // Update the input value to the validated value
    percentageInput.value = percentage;
    
    // Update the progress bar width
    progressFill.style.width = percentage + "%";
    
    // Update the percentage display
    percentageDisplay.innerHTML = percentage + "%";
    
    // Change color based on percentage
    if (percentage < 25) {
        progressFill.style.backgroundColor = "#ff4444"; // Red
    } else if (percentage < 50) {
        progressFill.style.backgroundColor = "#ffaa44"; // Orange
    } else if (percentage < 75) {
        progressFill.style.backgroundColor = "#44ff44"; // Light Green
    } else {
        progressFill.style.backgroundColor = "#44aa44"; // Green
    }
}






