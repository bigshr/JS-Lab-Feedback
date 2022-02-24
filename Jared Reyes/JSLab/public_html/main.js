console.log('hello world, coming from main1!');

var n = window.prompt("Input n.");

let array = [];

for (var i = 0; i < n; i++) {
    var random = Math.floor(Math.random()* 21);
    array.push(random);
}


// for (var i = 0; i < n; i++) {
//     console.log(array[i]);
// }

let sortedarray = [...array];
for(let i = 0; i < sortedarray.length; i++) {
    for(let j = 0; j < sortedarray.length - i - 1; j++) {
        if(sortedarray[j + 1] < sortedarray[j]) {
            [sortedarray[j + 1],sortedarray[j]] = [sortedarray[j],sortedarray[j + 1]];
        }
    }
}

console.log("Sorted array: ");
for (var i = 0; i < n; i++) {
    console.log(sortedarray[i]);
}

console.log("Distinct values: ");
const thisset = new Set();
for (var i = 0; i < n; i++) {
thisset.add(array[i]);
}
console.log(thisset.size);
















