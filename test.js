function Main(input) {
    // write your code here!
}

function debug(){
    var input = document.getElementById("input").value;
    Main(input);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));