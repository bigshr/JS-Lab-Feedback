let n = 10;
let arr=[];
for(let i=0;i<n;i++){
    arr.push(parseInt(Math.random()*20));
}
let ar=arr.sort(function (a,b){return a-b});
distinctArray(ar)
function distinctArray(arr){
    console.log("Sorted Array",arr)
    let distinct = arr.filter((item,i,ar) => ar.indexOf(item)==i);
    console.log("Distinct Array",distinct)
    console.log("No of distince Numbers: ",distinct.length)
}
