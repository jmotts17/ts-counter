"use strict";
var num = 0;
var output = document.getElementById("output");
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
    var ctrl = document.getElementById("num");
    ctrl.value = num.toString();
}
