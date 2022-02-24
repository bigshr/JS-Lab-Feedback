//Exercise 1 (just javascript)
let Integer_choice=  prompt("Choose a number");//prompt
let Empty_array= Array.apply(null, Array(parseInt(Integer_choice)));//empty array of size prompt
for(let i=0;i<Empty_array.length;i++)//filling array with random number
  Empty_array[i]= Math.floor(Math.random() * 20) + 1;
//sorted array
let Sorted_array= Empty_array.sort(function(a, b){return a - b;});
window.alert(Sorted_array);
//Distinct elements from array
let Distinct_values= [... new Set(Sorted_array)];
window.alert(Distinct_values);

//Exercise 2
let Integer_choice_2=  prompt("Choose a number");//prompt
let Empty_array_2 = [];//empty array
const Colors_list = ["R", "B", "Y", "G"];
const Weights_list = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

for (let row=0; row<Integer_choice_2; row++) {
  var Current_row= [];// initialise empty row
  for (let col=0; col<Integer_choice_2; col++) {
    const X1 = Math.floor(Math.random() * Weights_list.length);
    var Y1= Weights_list[X1];
    const X2 = Math.floor(Math.random() * Colors_list.length);
    var Y2= Colors_list[X2];
    Current_row[col]= Y1 + Y2;}//fill current cell with combination of color and integer
  Empty_array_2[row]=Current_row;}//fill current row
console.log(Empty_array_2);
