(function(){
    //document.writeln("now is the time")
    let arr = [];
    var n = prompt("Enter an interger to determin the amount number in an array");
    
    for (let i = 0; i< n; i++){
        arr.push(parseInt(Math.random()*20 + 1));
    }
    
    arr.sort((a,b) => a-b);
    
    alert("The random array with N intergers is: " + [...new Set(arr)]);
    
})();
