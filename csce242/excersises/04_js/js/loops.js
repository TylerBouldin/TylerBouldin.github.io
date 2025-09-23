document.getElementById('btn-display').onclick = () => {
    const displaySection = document.getElementById('loop-result');
    const ul = document.createElement("ul");
    displaySection.appendChild(ul);


    for(let i = 0; i < 10; i++){
        const li = document.createElement("li");
        li.innerHTML = `${i}`;
        ul.appendChild(li);
    }
}