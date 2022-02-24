let n = prompt("Enter a number (n*n grid)");
var c = ["R","B","Y","G"]; //create an array of colors

function createMap(n, n) {
    let map = [];
    for(let x = 0; x < n; x++){
        map[x] = [];
        for(let y = 0; y < n; y++){
            map[x][y] = {
                color: c[Math.floor(Math.random() * c.length)], //randomly selects color from array c
                val: Math.floor(Math.random() * 9) //randomly selects a value between 1-9 inclusive
            
            };
            
        }
    }
    return  map;
}
const map = createMap(n,n); //creates the grid





document.write("<pre>"); //pre tabs make it so chrome doesn't mess with formatting 
for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        document.write(map[i][j].val + map[i][j].color + " "); //puts a value and color in each crate n times
        
    }
    document.writeln();
}
document.write("</pre>");








