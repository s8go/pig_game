"use strict";
let playerOne = document.querySelector(".one");
let playerTwo = document.querySelector(".two");
// let twoCurrent = document.querySelector(".two").querySelector(".current-score");
// let twoTotal = document.querySelector(".two").querySelector(".tot-score");
let roll = document.querySelector(".roll");
let dice_img = document.querySelector(".dice-img");
let hold = document.querySelector(".hold");
let currentScore = document.querySelectorAll(".current-score");
let totScore =  document.querySelectorAll(".tot-score");
 

roll.addEventListener("click", ()=>{
    let diceNumbers = Math.floor(Math.random() * 6) + 1;
      
    let switchCurrent = document.querySelector(".switch").querySelector("h4");
    switchCurrent.innerText = Number(switchCurrent.innerText) + diceNumbers;
    
    if(diceNumbers === 6){
        dice_img.src = "20220213_174113.jpg";

    } else if(diceNumbers === 5){
        dice_img.src = "20220213_174054.jpg";

    } else if(diceNumbers === 4){
        dice_img.src = "20220213_174025.jpg";

    } else if(diceNumbers === 3){
        dice_img.src = "20220213_174008.jpg";


    } else if(diceNumbers === 2){
        dice_img.src = "20220213_173956.jpg";

    } else{
        dice_img.src = "20220213_173935.jpg";
        startOver(switchCurrent)
       
    };

});

hold.addEventListener("click", ()=>{
    let text = document.querySelector(".switch").querySelector("h4");
    switching(text);
})

function switching(x) {
    let switchTotal = document.querySelector(".switch").querySelector("h1");
    switchTotal.innerText = Number(switchTotal.innerText) + Number(x.innerText);
    x.innerText=0;

    if(playerOne.classList.contains("switch")){
        playerOne.classList.remove("switch");
        playerTwo.classList.add("switch");
    } else{
        playerOne.classList.add("switch");
        playerTwo.classList.remove("switch");
    }; 
    winner();
};


function winner() {
    if(totScore[0].innerText >= 100){
        alert(`Congratulations Player 1, You won with ${totScore[0].innerText} Points`);
        newGame()
    } else if(totScore[1].innerText >= 100){
        alert(`Congratulations Player 2, You won with ${totScore[1].innerText} Points`);
        newGame()
    }
};

function  startOver(y) {
    y.innerText = 0;

    if(playerOne.classList.contains("switch")){
        playerOne.classList.remove("switch");
        playerTwo.classList.add("switch");
    } else{
        playerOne.classList.add("switch");
        playerTwo.classList.remove("switch");
    }

};

let newgame = document.querySelector(".newgame");
newgame.addEventListener("click", newGame)

function  newGame() {
    document.querySelectorAll(".players").forEach((p)=>{
        p.querySelectorAll(".tot-score").forEach((pp)=>{
            pp.innerText = 0;
        })
        p.querySelectorAll(".current-score").forEach((ppp)=>{
            ppp.innerText = 0;
        })
    });
    playerOne.classList.add("switch");
}