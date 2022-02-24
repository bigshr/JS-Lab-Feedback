function code(){
    let colors = ["red","blue","yellow","green"];
    let syms = ["R","B","Y","G"]


    let n = prompt("enter a number n :");
    let body = document.body;
    let main = document.createElement("table");

    main.style.background="black";

    arr = [];
    for (let i = 0; i < n; i++) {
        let x = [];
        let row = document.createElement("tr");
        for (let j = 0; j < n; j++) {
            let o = [];
            let el = document.createElement("td");
            el.style.fontSize = "50px";

            o.weight = parseInt(Math.random()*9+1);
            el.innerHTML = o.weight;

            let t = parseInt(Math.random()*4+1);
            o.color=syms[t-1];
            el.style.color=colors[t-1];

            x.push(o);
            row.appendChild(el);
        }
        main.appendChild(row);
        arr.push(x);
    }
    console.log(arr);
    body.appendChild(main);
}


code();
