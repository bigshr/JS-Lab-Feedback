function promptSort () {
    let n = prompt("Please enter an integer");
    var x = [];
    let count;
    //var x = new Array(n);
    for (let i = 0; i < n; i++){
        x.push(Math.floor(Math.random() * 20 + 1));
    }
    document.write("First Array: " + x);
    x = x.sort(function(a,b) { return a - b});
    document.write("<br>");
    document.write("Sorted Array: " + x);
    const distinct = x.filter((x, i, a) => a.indexOf(x) == i)

    document.write("<br>");
    document.write("Number of distinct values: " + distinct.length);
    document.write("<br>");
    document.write("Distinct value array: " + distinct);  
}

function twoDimArray () {
    let n = prompt("Please enter a second integer");
    var arr = new Array(n);
    let rand;
    let color;
    let crate;
    for (let i = 0; i < n; i++){
        arr[i] = new Array(n);
    }
    document.write(n + " by " + n + " matrix:");    
    for (let y = 0; y < n; y++){
        document.write("<br>");
        for (let x = 0; x < n; x++){
            rand = Math.floor(Math.random() * 9 + 1);
            color = Math.floor(Math.random() * 4 + 1);
            if (color == 1){
                color = 'R'
            }
            else if (color == 2){
                color = 'B'
            }
            else if (color == 3){
                color = 'Y'
            }
            else if (color == 4){
                color = 'G'
            }
            crate = rand +  color;
            arr[y][x] = crate;
            
            document.write(arr[y][x] + " ");
            
    }
}

}