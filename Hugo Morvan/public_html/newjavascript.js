const num = prompt('Q1: Enter a number');
x = [];
for (var i = 0; i < num; i++) {
    x.push(Math.random(1,20));
}
x.sort();

for (var i = 0; i < num; i++) {
  alert(x[i]+' ');  
}

