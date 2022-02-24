
function questionTwo(){
	var n = window.prompt("Enter a number");
	let array = makeArray(n,n);
	for(var i in array){
		for(var j in array[i]){
			document.writeln("<pre>" + array[i][j] + "&emsp;" +"</pre>")
		}
		
		document.writeln("<br/>");
	}
	
}

colorArray = ["Red","Blue","Yellow","Green"];

var crate = {
	weight : weightRandom(),
	color :colorRandom(),
}

function colorRandom(){
		return colorArray[Math.floor(Math.random() * 4)];
	}

function weightRandom(){
	return (Math.floor(Math.random()*10) +1)
}

function makeArray(n, n) {
    var arr = [];
    for(let i = 0; i < n; i++) {
        arr[i] = [];
        for(let j = 0; j < n; j++) {
            arr[i][j] = colorRandom() + " " + weightRandom();
        }
    }
    return arr;
}

questionTwo();

