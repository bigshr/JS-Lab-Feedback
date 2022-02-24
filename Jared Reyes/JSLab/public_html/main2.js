console.log('hello world, coming from main2!');

// 2)Write a javascript program that prompts for an integer n and
// makes a two dimensional array with n rows and n cols of crates.
// each crate is given a random weight and a random color (1..9,  R/B/Y/G).
// Show the array, printing its rows and columns with each location showing both
//  the weight and color of the crate in that cell.  
//  Try to make it appear in the document formatted nicely. 
//  (I did it using <pre> tags and then formatting it myself.)

var n = window.prompt("Input n.");
var ugh = parseInt(n);

var x = new Array(ugh);

for (var i = 0; i < x.length; i++) {
  x[i] = new Array(ugh);
}


for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x.length; j++) {
        
        x[i][j] = randompick();
    
    }
}

console.log(x);


function randompick() {
    var randomcolor = ["R", "B", "Y", "G"];
    var randomnumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    
    var test = randomnumber[Math.floor(Math.random()*randomnumber.length)];
    var test2 = randomcolor[Math.floor(Math.random()*randomcolor.length)];
    
    var result = (test2 + test);
    return result;
}


