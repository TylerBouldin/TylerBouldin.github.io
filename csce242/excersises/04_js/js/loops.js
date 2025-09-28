document.getElementById('btn-display').onclick = () => {
    const displaySection = document.getElementById('loop-result');
    const ul = document.createElement("ul");
    displaySection.appendChild(ul);


    for(let i = 0; i < 10; i++){
        const li = document.createElement("li");
        li.innerHTML = `${i}`;
        ul.appendChild(li);
    }
};


document.getElementById('btn-count').onclick = () => {
    const error = document.getElementById('error-number');
    error.innerHTML = "";

    const startNum = parseInt(document.getElementById('txt-start').value);
    const endNum = parseInt(document.getElementById('txt-end').value);

    const resultDiv = document.getElementById('d-count');
    resultDiv.innerHTML = "";

    if(startNum > endNum){
        error.innerHTML = "Start number must be less than end number";
    }
};
