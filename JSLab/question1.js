(function(){
    var n = prompt("Enter an ineger");
    var ar = [n];
    for(var i = 0; i < n; i++){
        ar[i] = Math.ceil(Math.random() * 20);
    }
    var dist = [];
    for(var i = 0; i < n; i++){
        var num = true;
        for(var j = 0; j < dist.length; j++){
            if(ar[i] === dist[j]){
            num = false;
        }
    }
    if(num){
        dist.push(ar[i]);
    }
}
alert("Array in sorted order: " + (ar.sort((a,b)=>a-b)) + "\nAmount of distinct values: " + dist.length);
})();