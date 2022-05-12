// console.log("text");

let inputFeld = document.getElementById("inputFeld");
let outputFeld = document.getElementById("outputFeld");
let warnung = document.getElementById("warnung")
function nachricht() {
    // console.log("works")
    if (inputFeld.value) {
        outputFeld.innerHTML = inputFeld.value;
    } else {
        warnung.innerHTML = "Warnung! 404 Error! Nachricht eingeben"
    }
}
