function question1(){
const userInput = prompt("Enter a number");
const n = parseInt(userInput)


const array= [];
for(let i=0; i<n ; i++){
    array.push(Math.floor(Math.random() * 20) + 1 )
}

function compareNums(a,b) {
 return a-b;
}

array.sort(compareNums);

alert(array);

const set= new Set (array);
alert(set.size);

}


question1();