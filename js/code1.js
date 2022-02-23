function code(){
    let n = prompt("enter a number n :");
    arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(parseInt(Math.random()*20));
    }
    arr.sort(function(a, b) {
    return a - b;
    });
    alert(arr);
    console.log(arr);
    let set = [...new Set(arr)]
    alert(set);
    console.log(set);
}


code();