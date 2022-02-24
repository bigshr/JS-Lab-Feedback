function question2() {
const userInput = prompt("Enter a number");
const n = parseInt(userInput)
const colors= ["R", "G" ,"B", "Y" ];

const crates =[];
for(let i=0; i<n; i++){
const rowCrates=[];
for(let j=0; j<n; j++){

const crate={};
const selectedIndex=Math.floor(Math.random() * colors.length);

crate.color= colors[selectedIndex];
crate.weight= Math.floor(Math.random() * 9) + 1;

rowCrates.push(crate);

}
 crates.push(rowCrates);
}

document.write("<pre>");
for(let i=0; i<n; i++){
for(let j=0; j<n; j++) {
    const crate= crates[i][j];
    document.write(crate.color + "/" + crate.weight + " " )
}
    document.write("\n");
}
  document.write("</pre>")

}

question2();