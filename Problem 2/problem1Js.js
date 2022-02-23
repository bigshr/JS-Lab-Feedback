(function (){
    let integer = prompt("Enter an integer");
    let array = [];
    for(let i = 0; i < integer; i++){
        array.push(Math.floor(Math.random() * 20 + 1));
    }
    array.sort(function(a, b){return a - b});
    alert(array);
    
    let distnums = [];
    for(let n of array){
        if(!distnums.includes(n)){
            distnums.push(n);
        }
    }
    alert(distnums);
    alert("Distinct numbers: "+distnums.length);
})();