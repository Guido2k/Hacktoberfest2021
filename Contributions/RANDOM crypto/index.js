var item;


function picker () {

let chosen = Math.floor(Math.random()*6+1);
console.log(chosen);

if (chosen == 1) {
    item = "BTC";
} else if (chosen == 2) {
    item = "ETH";
} else if (chosen == 3) {
    item = "DOT";
} else if (chosen == 4) {
    item = "SOL";
} else if (chosen == 5) {
    item = "ADA";
} else if (chosen == 6) {
    item = "DOGE"
} 
document.getElementById("divt").innerHTML = "Buy " + item + " today..... not financial advice"; 
}

picker();




