// Iteration 8: Making scoreboard functional
var urlParams = new URLSearchParams(window.location.search)

var score = urlParams.get('score');

var scoreboard = document.getElementById('score-board');

var playAgainButton = document.getElementById('play-again-button')

scoreboard.innerHTML = score

playAgainButton.onclick = () => {
    location.href = './game.html'

}