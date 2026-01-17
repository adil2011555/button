let button = document.getElementById("bn");
let text = document.getElementById("text");

button.onclick = function () {
    text.innerHTML = "Салам!";
    
    setTimeout(function () {
    text.innerHTML = "";
    }, 5000);
};

