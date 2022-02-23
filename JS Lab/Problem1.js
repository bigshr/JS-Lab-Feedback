(function(){
    var n = prompt("Enter a single number: ");
    var array = [n];
    for(var i = 0; i < n; i++){
        array[i] =Math.ceil(Math.random() * 20);
    }
    var distinct = [];
    for(var i = 0; i < n; i++){
        var number = true;
        for(var j = 0; j < distinct.length; j++){
            if(array[i] === distinct[j]){
            number = false;
        }
    }
    if(number){
        distinct.push(array[i]);
    }
}
alert("Sorted array: " + (array.sort((a,b)=>a-b)) + "\n Number of distinct values: " + distinct.length);
})
();