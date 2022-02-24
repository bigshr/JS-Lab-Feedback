(() => {
    const problem1 = () => {
        const n = parseInt(prompt("enter a number"));

        let x = [];
        for (let i = 0; i < n; i++) {
            x.push(Math.floor(Math.random() * 20) + 1);
        }

        x.sort((a, b) => a - b);

        alert(`array: ${x}`);

        let unique = new Set(x);
        alert(`unique elements: ${unique.size}`);
    };

    const problem2 = () => {
        const n = parseInt(prompt("enter a number"));

        let t = [];
        for (let i = 0; i < n; i++) {
            t.push([]);
            for (let j = 0; j < n; j++) {
                t[i].push({
                    weight: Math.floor(Math.random() * 9) + 1,
                    color: ["red", "green", "blue", "yellow"][Math.floor(Math.random() * 4)]
                });
            }
        }

        document.getElementById("problem2Result").innerHTML = `<div class="grid" style="grid-template-columns:repeat(${n},minmax(0, 1fr));grid-template-rows:repeat(${n},minmax(0,1fr));">
        ${t.map(row => row.map(cell => `<div style="background:${cell.color}">weight: ${cell.weight}</div>`).join("")).join("")}
        </div>`;
    };

    document.getElementById("problem1").addEventListener("click", problem1);
    document.getElementById("problem2").addEventListener("click", problem2);
})();