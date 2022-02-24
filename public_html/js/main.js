

function randomInput(min, max) {
    const range = max - min + 1;
    const num = Math.random();
    return Math.floor(num * range + min);
}
function randomColor() {
    const color = ['R', 'B', 'Y', 'G'];
    const colorChoice = randomInput(0, color.length-1);
    return color[colorChoice];
}
    
function getCrate() {
    const crate = {};
    crate.color = randomColor();
    crate.weight = randomInput(1, 9);
    return crate;
}

function displayCrate(crates) {    
    let crateString = "";
    for(const rowCrate of crates) {
        for(const colCrate of rowCrate) {
            crateString += colCrate.weight + "/" + colCrate.color + " ";
        }
        crateString += "\n";
    }
    
    const domElement = document.getElementById("question2");
    domElement.innerHTML = "<pre>" + crateString + "</pre>";
}

function question2() {
     const Input = prompt('Enter a number');
     const n = parseInt(Input);
    const crates = [];
    for(let row = 0; row < n; row++) {
        const crateRow = [];
        for(let col = 0; col < n; col++) {
            const crate = getCrate();
            crateRow.push(crate);
        }
        crates.push(crateRow);
    }
    displayCrate(crates);
}

question2();