let randomNumber1 = Math.floor (Math.random() *6) +1
let randomDiceImage = "images/"+ "dice" + randomNumber1 + ".png"

randomNumber2 = Math.floor(Math.random() *6 ) +1
let randomDiceImage2 = "images/"+ "dice" + randomNumber2 + ".png"



var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" ,randomDiceImage)


var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage2)



if (randomNumber1 < randomNumber2){
    let textEl = document.querySelectorAll("h1")[0];
    textEl.textContent = "Player 2 is the Winner 👑"
}
else if (randomNumber1 > randomNumber2){
    let textEl = document.querySelectorAll("h1")[0];
    textEl.textContent = "Player 1 is the Winner🤴"
}else {
    let textEl = document.querySelectorAll("h1")[0];
    textEl.textContent = "Oops 😟 , Its a draw Try Again"
}