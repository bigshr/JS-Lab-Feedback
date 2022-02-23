(function(){
    function Crate(w, c){
       this.weight = w;
       this.color = c;
    }
    var n = prompt("Enter an ineger");
    var ar = [n];
    for(var i = 0; i < n; i++){
        ar[i] = [n];
    }
    var w;
    var c;
    for(var i = 0; i < n; i++){
        for(var j = 0; j < n; j++){
            w = Math.ceil(Math.random() * 9);
            c = Math.ceil(Math.random() * 4);
            ar[i][j] = new Crate(w, c);
        }
    }
    var dict = {1: "Red", 2: "Blue", 3: "Yellow", 4: "Green"};
    document.write("<pre>");
    for(var i = 0; i < n; i++){
        for(var j = 0; j < n; j++){
            document.write("Weight: " + ar[i][j].weight + " Color: " + dict[ar[i][j].color] + "\t\t");
        }
        document.write("\n");
        document.write("\n");
        document.write("\n");
    }
    document.write("</pre>");
})();