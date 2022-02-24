
function randCrate(){
    let color = ["R", "B", "Y", "G"];
    let crateCol = color[parseInt(Math.floor(Math.random()*4))];
    let crateWt = Math.ceil(Math.random()*9);
    if(crateWt === 0) crateWt ++;
    let crate = {
        weight: crateWt,
        color: crateCol
    };
    return crate;
}

function arrayCreate(){
    let n = parseInt(prompt("Please enter the size of the 2-D array:"));
    let arr = [];
    for(let i=0; i<n; i++){
        let currRow = [];
        for(let r=0; r<n; r++){
            currRow[r] = randCrate();
        }
        arr[i] = currRow;
    }
    for(let i=0; i<n; i++){
        let ln = "";
        for(let r=0; r<n; r++) ln += arr[i][r].weight+arr[i][r].color+" | ";
        document.writeln("<pre>"+" "+ln);
        
    }
}
arrayCreate();
