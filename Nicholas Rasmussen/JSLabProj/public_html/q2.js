(function(){
    
    
    var n = prompt("Enter an interger to determin the amount number in an array");
    let stack = new Array(0);
    
    
    let crate = {
        "number": 0,
        "color": 'R'
    };
    
       
    for (let i = 0; i< n; i++){
        let arr = new Array(0);
        for (let j = 0; j< n; j++){

            let newCrate = Object.create(crate);
            
            newCrate.number = parseInt(Math.random()*9 + 1);
            let num = parseInt(Math.random()*4 + 1);
            
            if (num === 1){
                newCrate.color = 'R';
            }
            if (num === 2){
                newCrate.color = 'B';
            }
            if (num === 3){
                newCrate.color = 'Y';
            }
            if (num === 4){
                newCrate.color = 'G';
            }
            
            arr.push(newCrate);
        }
        stack.push(arr);
    }
    
    for (let i = 0; i< n; i++){
        for (let j = 0; j< n; j++){
            
            document.write(stack[i][j].number);
            document.write(stack[i][j].color + " ");
            
        }
        document.writeln(" ");
    }
    
})();

