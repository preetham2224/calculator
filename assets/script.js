
let display = document.querySelector("#input");
function addElement(e) {
    if (display.value == "0") {
        display.value = "";
    }
    display.value += e;

}
function clearDisplay() {
    document.querySelector("#input").value = "0";
}
function result() {
    res = eval(display.value);
    clearDisplay();
    addElement(res)
}
function removeElement() {
    display.value = display.value.slice(0,-1);
    if(display.value == ""){
        display.value = "0";
    }
}

