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



