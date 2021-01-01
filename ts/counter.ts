let num = 0;

function onLoad() {
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

function display() {
    let ctrl = document.getElementById("num") as HTMLInputElement;

    ctrl.className = "";
    if(num%2==0) {
        ctrl.classList.add("red");
    }
    if(num%3==0) {
        ctrl.classList.add("bold");
    }
    if(num%5==0) {
        ctrl.classList.add("italic");
    }
    
    ctrl.value = num.toString();
}