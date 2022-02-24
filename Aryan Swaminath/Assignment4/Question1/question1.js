function questionOne(){
	let n = window.prompt("Enter a number");
	let array = [];
	for (let i = 0; i < n; i++) {
		array.push((Math.floor(Math.random() * 20))+1);
	}
	alert("Array of Length " + n +": " + array);
	alert("Sorted Array: " + (array.sort(function(a,b){return a - b})));
	alert("Distinct Elements: " + new Set(array).size);
}

questionOne();
