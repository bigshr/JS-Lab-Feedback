




(function () {
    //Problem 1
    /*let arr = [];
     let answer = prompt("Enter a num");
     let n = parseInt(answer);
     for (i = 0; i < n ; i++) {
     
     
     arr.push(Math.floor(Math.random() * 20));
     }
     
     alert("0-20  "+ arr);
     
     arr.sort((a,b) => a - b);
     alert("sorted   " + arr);
     
     var c = 0;
     var r = "";
     
     for (let k = 0; k < arr.length - 1; k++){
     if (arr[k] === arr[k+1]) {
     
     }else{
     
     r+=  arr[k] + c + "number of times\n";
     c++;
     
     
     
     }
     
     
     }
     alert("Distinct counter=" + (c + 1));
     
     */
    //Problem 2
    let color = ["R", "G", "B", "Y"];
    function C() {
        let contents = {};
        contents.color = color[parseInt(Math.random() * 4)];
        contents.value = Math.floor(Math.random() * 10);
        return contents;
    }


    let answer = prompt("Enter a num");
    let cols = parseInt(answer);
    let rows = parseInt(answer);



    var arr = [];
    for (var i = 0; i < cols; i++) {
        let a1 = [];
        for (var j = 0; j < rows; j++) {
            a1.push(C());
        }
        arr.push(a1);
    }

    console.log(arr);


    document.writeln("<pre>");


    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {

            document.write(arr[i][j].color + arr[i][j].value + " ");
        }
        document.writeln();

    }





    document.writeln("</pre>");





})();










   
   
  
   
    
    

