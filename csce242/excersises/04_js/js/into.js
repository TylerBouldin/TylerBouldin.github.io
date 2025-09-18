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




