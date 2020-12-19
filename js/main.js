document.querySelector("button").addEventListener("click" , diceRun);

function diceRun(){

var randomNumber1 = Math.floor(Math.random()*6)+1;  // 1-6

var randomDiceImage1 = "dice" + randomNumber1 + ".png" ; // dice1- dice6

var randomImageSourse1 = "./images/" + randomDiceImage1;  // img1- img6

 document.querySelectorAll(".img1")[0].setAttribute( 'src' , randomImageSourse1);

var randomNumber2 = Math.floor(Math.random()*6)+1;  // 1-6

var randomImageSourse2 = "./images/dice" + randomNumber2 + ".png";  // img1- img6

document.querySelectorAll(".img2")[0].setAttribute( 'src' , randomImageSourse2);


    if(randomNumber1 > randomNumber2){
        document.querySelector('h1').textContent = "🚩Player 1 wins";
    }
    else if(randomNumber1 < randomNumber2){
        document.querySelector('h1').textContent = "Player 2 wins🚩";
    }
    else if( randomNumber1 === randomNumber2) {
        document.querySelector('h1').textContent = "Draw!";
    }
}
console.log(diceRun());

