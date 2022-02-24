
function arrayCreate(){
    let n = parseInt(prompt("Please enter the size of the array:"));
    let arr = [];
    for(let i=0; i<n; i++){
        arr[i] = parseInt(Math.floor(Math.random()*20));
    }
    let output = "Array: "+arr+"\nSorted: "+arr.sort((a,b) => a-b);
    let ct = 0, prev = -1;
    for(let i=0; i<n; i++){
        if( arr[i] !== prev ) ct++;
        prev = arr[i];
    }
    output += "\nNumber of Distinct Values: "+ct;
    alert(output);
}
arrayCreate();