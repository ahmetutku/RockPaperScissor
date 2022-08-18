const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const message = document.querySelector('.message');

const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
let playerScore = 0;
let computerScore = 0;
const SELECTIONS = [
  {
    name: 'rock',
    emoji: '🪨',
    beats: 'scissors'
  },
  {
    name: 'paper',
    emoji: '📄',
    beats: 'rock'
  },
  {
    name: 'scissors',
    emoji: '✂️',
    beats: 'paper'
  }
]

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    makeSelection(selection)
  })
})

function makeSelection(selection) {
  const computerSelection = randomSelection()
  const yourWinner = isWinner(selection, computerSelection)
  const computerWinner = isWinner(computerSelection, selection)

  addSelectionResult(computerSelection, computerWinner)
  addSelectionResult(selection, yourWinner)

  if (yourWinner){
    incrementScore(yourScoreSpan)
    ++playerScore
  } 
  if (computerWinner){
    incrementScore(computerScoreSpan)
    ++computerScore
  } 

  if (playerScore >= 5 && computerScore < 5) {
    message.textContent = 'Game Over. You Win!';
    message.style.color = 'green';
    setTimeout(function(){
        window.location.reload();
     }, 5000);

  } else if (playerScore < 5 && computerScore >= 5) {
    message.textContent = 'Game Over. You Lose!';
    message.style.color = 'red';
    setTimeout(function(){
        window.location.reload();
     }, 5000);

  }
  
}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner) {
  const div = document.createElement('div')
  div.innerText = selection.emoji
  div.classList.add('result-selection')
  if (winner) div.classList.add('winner')
  finalColumn.after(div)
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomIndex]
}
