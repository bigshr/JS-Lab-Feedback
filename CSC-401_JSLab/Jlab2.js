function dimension (n) {
  let arr = [];
  for (let i = 0; i < n; i ++){
    arr.push([])
    for(let j = 0; j < n; j++){
      arr[i].push({
        weight: Math.floor(Math.random() * 9) + 1,
        color: ["red", "green", "blue", "yellow"][Math.floor(Math.random() * 3) + 1]
      });
    }
  }
  var result = arr.map(crate => crate.map( row =>({weight: row.weight,color: row.color})));
  var result2 = arr.map(row => row.map(crate => {document.write(crate.weight,crate.color, " ")}))
  document.write(result2);







  //document.getElementById("result").innerHTML = arr.map(row = > row.map(cell =>{cell.color} weight:{cell.weight}));


  }
  let answer = prompt("Give me a length");
  dimension(answer);
