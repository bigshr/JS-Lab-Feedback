(function (){
    let Crate = function(weight, color){
        this.weight = weight;
        this.color = color;
    };
    let colors = ["R","B","Y","G"];
    
    let n = prompt("Enter an integer");
    let crates = new Array(n);
    
    for(let i = 0; i < n; i++){
        crates[i] = new Array(n);
        for(let j = 0; j < n; j++){
            let wt = Math.floor(Math.random()*9+1);
            let clr = colors[Math.floor(Math.random()*4)];
            
            crates[i][j] = new Crate(wt,clr);
        }
    }
    
    document.write("<pre>");
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            document.write(crates[i][j].weight + "," + crates[i][j].color + "   ")
        }
        document.writeln("");
    }
    document.writeln("</pre>");
})();