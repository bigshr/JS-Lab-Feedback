(function(){
     let color = ["r","y","b","g"];
     function Crate(){
         let contentz = {};
         contentz.color = color[parseInt(Math.random()*4)];
         contentz.value = Math.floor(Math.random()*10);
         return contentz;
     }
     let n = prompt("(Question 2) enter a number: ");
     let c = parseInt(n);
     let r = parseInt(n);
     let array = [];
     for(var i = 0; i < c; i++){
         let x = [];
         
         for(var j = 0; j < r; j++){
             x.push(Crate());
         }
        array.push(x); 
     }
     console.log(array);
     document.writeln("<pre>");
     for(let i = 0; i < c; i++){
         for(let j = 0; j < r; j++){
            document.write(array[i][j].color + array[i][j].value + " ");
         }
         document.writeln();
     }
     document.writeln("</pre>");
})();


