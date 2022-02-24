//given n numbers generate an array of length n and put random numbers in the array
(function () {
    let arr = [];
    let answer = prompt("Enter a number");
    let n = parseInt(answer);
    for (let i = 0; i < n; i++) {
        //gives random integers between 1-20 inclusive
        arr.push(Math.floor(Math.random() * 20));
    }

    alert("arr=" + arr);

    //makes them sorted in numerical rather than alphabetical
    arr.sort((a, b) => a - b);

    alert("arr=" + arr);

    //distinct number counter
    var results = "";
    var count = 0;
    for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] === arr[j + 1]) {

        } else {
            results += arr[j] + " --> " + count + " times\n";
            count++;
        }
    }

    alert("Distinct Count=" + (count + 1));

})();


