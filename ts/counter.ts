let num = 0;
let output = document.getElementById("output") as HTMLInputElement;

function loaded() {
    console.log("Loaded");
    display();
}

function minus() {
    num--;
    display();
}

function plus() {
    num++;
    display();
}

function changeDisplay() {
 
}

function display() {
    let ctrl = document.getElementById("num") as HTMLInputElement;
    ctrl.value = num.toString();
}