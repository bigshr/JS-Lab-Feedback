(function(){
    let n=prompt("Please enter an integer: ");
    let ar=[];
    for (let i=0;i<n; i++){
        let temp=Math.floor(Math.random()*21);
        ar.push(temp);
    }
    let sortedAr=ar.sort((a,b)=>a-b);
    alert("Sorted Array: "+sortedAr);
    
    //sum of distinct ar
    let sum=0;
    for (let i=0; i<n; i++){
        if (ar[i] !== ar[i+1]){
            sum = sum + 1;
        }
    } 
    alert("Total number of distinct values are: "+sum);
})();

