(function(){
        let array = []; 
    let a = prompt("(Question 1) Enter how long you want the array to be!");
  let n = parseInt(a);
 
 for(let i = 0; i < n; i++){
     array.push(Math.floor(Math.random()*20))
 }
 alert("your array: " + array);
 array.sort((a,b) => a-b);
 alert("sorted array: " + array);
 var dis = "";
 var discount = 0;
 for(let j = 0; j < array.length-1; j++){
     if(array[j] === array[j+1]){
         
     }else{
         discount++;
     }
 }
 alert("distinct numbers in array: " + (discount+1));
})();
//document.writeln("<pre>"+" "+parseInt(20*Math.random())+" "+ Math.random()+"/pre>");