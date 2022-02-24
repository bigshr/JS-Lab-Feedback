//Problem 1
function random (n) {
  let arr = []

  for(let i = 0; i < n; i++){
    arr[i] = Math.floor((Math.random() * 20) + 1);
  }
  return arr.sort((a,b) => a-b);
}

let answer = prompt("Give me a number");
alert(random(answer));
