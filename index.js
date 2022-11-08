var randNumber1 = Math.floor(Math.random() * 6) + 1;
var randNumber2 = Math.floor(Math.random() * 6) + 1;

if (randNumber1 > randNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
    document.querySelectorAll('img')[0].setAttribute("src", "images/dice" + randNumber1 + ".png");
    document.querySelectorAll('img')[1].setAttribute("src", "images/dice" + randNumber2 + ".png");

} else if (randNumber1 < randNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
    document.querySelectorAll('img')[0].setAttribute("src", "images/dice" + randNumber1 + ".png");
    document.querySelectorAll('img')[1].setAttribute("src", "images/dice" + randNumber2 + ".png");


} else if (randNumber1 === randNumber2) {
    document.querySelector("h1").textContent = "Draw!";
    document.querySelectorAll('img')[0].setAttribute("src", "images/dice" + randNumber1 + ".png");
    document.querySelectorAll('img')[1].setAttribute("src", "images/dice" + randNumber1 + ".png");

}
