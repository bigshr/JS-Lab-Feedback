(function(){
    function Crate(weight, color){
       this.weight = weight;
       this.color = color;
    }
    var n = prompt("Enter an integer:");
    var array = [n];
    for(var i = 0; i < n; i++){
        array[i] = [n];
    }
    var weight;
    var color;
    for(var i = 0; i < n; i++){
        for(var j = 0; j < n; j++){
            weight = Math.ceil(Math.random() * 9);
            color = Math.ceil(Math.random() * 4);
            array[i][j] = new Crate(weight, color);
        }
    }
    var colorLeg = {1: "Red", 2: "Blue", 3: "Yellow", 4: "Green"};
    document.write("<pre>");
    for(var i = 0; i < n; i++){
        for(var j = 0; j < n; j++){
            document.write("Weight: " + array[i][j].weight + " Color: " + colorLeg[array[i][j].color] + "\t\t");
        }
        document.write("\n");
        document.write("\n");
        document.write("\n");
    }
    document.write("</pre>");
})();