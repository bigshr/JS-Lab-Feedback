
let n = prompt("Enter the number");
let arr=[];
for(let i=0; i<n; i++){
    arr.push(parseInt(Math.random()*20))
}
let ar=arr.sort(function (a,b){return a-b});
printDistinct(ar)

function printDistinct(arr) {
    let distinct = arr.filter((item, i, ar) => ar.indexOf(item) === i);
    alert(`Sorted Number=${arr}\nDistinct Numbers = ${distinct}\nDistinct Count: ${distinct.length}`)
}