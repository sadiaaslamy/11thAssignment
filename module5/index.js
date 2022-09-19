
let countPlayer1 = 0
let countPlayer2 = 0


let player1Score = 0
let player2Score = 0
let player1Turn = true


const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const Round1 = document.getElementById("round1")
const Round2 = document.getElementById("round2")

function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}
function CongratulationsMessage(){
    congratulationsMessage.style.display = "none"
    congratulationsMessage.style.display = "block"

}


 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1
        
    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")

             countPlayer1 += 1

        Round1.textContent = countPlayer1
        message.textContent = "Player 2 Turn"
        
       
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        
             countPlayer2 += 1

        Round2.textContent = countPlayer2
        message.textContent = "Player 1 Turn"
    }
    if(countPlayer1 === 6 && countPlayer2 === 6 ){
        if (player1Score > player2Score) {
        message.textContent = "Player 1 Won 🥳"
        CongratulationsMessage()
        showResetButton()
    }  else if (player2Score > player1Score) {
        message.textContent = "Player 2 Won 🎉"
        CongratulationsMessage()
        showResetButton()
    }
    }
    
    player1Turn = !player1Turn
})
 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    countPlayer1 = 0
    countPlayer2 = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    Round1.textContent = 0
    Round2.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    congratulationsMessage.style.display = "none"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}
