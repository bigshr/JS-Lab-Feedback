"use strict";

function UserInput() {
    const userInput = prompt('Enter a number');
    const n = parseInt(userInput);
    return n;
}
function RandomInt(min, max) {
    const range = max - min + 1;
    const randomFactor = Math.random();
    return Math.floor(randomFactor * range + min);
}
 
function getCrate() {
    const crate = {};
    crate.color = RandomColor();
    crate.weight = RandomInt(1, 9);
    return crate;
}
function RandomColor() {
    const colorsAvailable = ['R', 'B', 'Y', 'G'];
    const colorChoice = RandomInt(0, colorsAvailable.length-1);
    return colorsAvailable[colorChoice];
}
   

function CrateMatrix(size) {
    const crates = [];
    for(let row = 0; row < size; row++) {
        const crateRow = [];
        for(let col = 0; col < size; col++) {
            const crate = getCrate();
            crateRow.push(crate);
        }
        crates.push(crateRow);
    }
    return crates;
}

function displayCrate(crates) {    
    let crateString = "";
    for(const rowCrate of crates) {
        for(const colCrate of rowCrate) {
            crateString += colCrate.weight + "/" + colCrate.color + " ";
        }
        crateString += "\n";
    }
    
    const domElement = document.getElementById("Que2");
    domElement.innerHTML = "<pre>" + crateString + "</pre>";
}

function Number2() {
    const n = UserInput();
    const crates = CrateMatrix(n);
    displayCrate(crates);
}

Number2();