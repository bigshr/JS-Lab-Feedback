/* global coloselected, arr2d */

// 1)
// create a random array
var inputNum = prompt("please enter an interger:");

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var arr = [];

for (var i = 0; i <= inputNum - 1; i++) {
    arr.push(getRandom(1, 20));
}

alert("the random arr is: " + arr);

// sort the array using bubble sort

function bubbleSort(arr) {

    for (var i = 1; i < arr.length; i++) {
        for (var j = 0; j <= arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

bubbleSort(arr);

alert("sorted array is:" + arr);

// output distinct values in the arry

function unique(arr) {

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
}

unique(arr);

alert("distinct array is:" + arr);

// 2)

var inputNum1 = prompt("please enter an interger:");

let colors = ["R", "B", "Y", "G"];

var colorselected = [];

for (var j = 0; j <= inputNum1 - 1; j++) {

    var color = colors[Math.floor(Math.random() * colors.length)];

    colorselected.push(color);
}

alert(colorselected);


var nums = [];

for (var i = 0; i <= inputNum1 - 1; i++) {

    nums.push(1 + Math.floor(Math.random() * 9));

}

alert(nums);

const arr2D = colorselected.map(function (item, k) {
    return [item, [nums[k]]];
});

document.write("<pre>");
for (let i = 0; i < arr2D.length; i++) {
	for(let j = 0; j < arr2D[i].length; j++) {
  	document.write(arr2D[i][j]);
    document.write(" ");
  }
  document.write("\n");
}
document.write("</pre>");















