// Scrapped because no time, was trying to use modules and make a points system, it's simple, but I am tired and no time!!
import { Points } from "../index.js";

const e = new Points()
e.awardPoints()


// Arrays
let currentDeck = []
let playerDeck = []
let dealerDeck = []

// Bools
let playerTurn = true
let dealerTurn = false

let STAY = false
let LOST = false
let HIT = false

let dealerCanHit = false
let playerCanHit = false

let dealerWins = false
let playerWins = false
let restartGame = false
let autoDealing = false
let tie = false

// Values
let playerScore = 0
let dealerScore = 0

let card = null
let cards = null
let interval = null
let randomCard = null

let maxPlayerScore = 21
let maxDealerScore = 21
let dealerStandScore = 17

// Functions
function createDeck(deck) {
    var deckValues = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'king', 'queen', 'jack']
    var deckSuitType = ['of_spades', 'of_hearts', 'of_diamonds', 'of_clubs']

    for (let i = 0; i < deckValues.length; i++) {
        for (let j = 0; j < deckSuitType.length; j++) {
            deck.push(deckValues[i] + '_' + deckSuitType[j])
        }
    }
}

function shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
        // Randomize the indexes in the array, the Durstenfeld Shuffle
        const shuffle = Math.floor(Math.random() * deck.length)
        var card = deck[i]
        deck[i] = deck[shuffle]
        deck[shuffle] = card
    }
}

function assignDeckPoints(deckArray, userScore) {
    for (let i = 0; i < deckArray.length; i++) {
        const card = deckArray[i];
        let cardNumber = card.split('_')
        var cardVal = cardNumber[0]
    }

    if (isNaN(parseInt(cardVal))) {
        if (cardVal.includes('ace')) {
            cardVal = 11
            if (cardVal + userScore > 21) {
                return 1
            } else {
                return 11
            }
        } else {
            return 10
        }
    }

    return parseInt(cardVal)
}

function dealCard(times, userDeck, userCards) {
    let c = document.getElementById(userCards)
    for (let i = 0; i < times; i++) {
        cards = document.createElement("img")
        randomCard = Math.floor(Math.random() * (currentDeck.length - 1))
        for (let j = 0; j < currentDeck.length; j++) {
            const element = currentDeck[j];
            if (j == randomCard) {
                card = element
                userDeck.push(card)
                currentDeck.splice(j, 1)
            }
        }
        cards.src = 'blackjackassets/DeckOfCards/' + card + '.png'
        cards.alt = 'card'
        c.appendChild(cards)
        if (userCards == 'your-cards') {
            playerScore += assignDeckPoints(playerDeck, playerScore)
            console.log(playerScore, 'player');
        } else if (userCards == 'dealer-cards') {
            dealerScore += assignDeckPoints(dealerDeck, dealerScore)
            console.log(dealerScore, 'dealer');
        }
    }
    compareScores(playerScore, dealerScore)
}

function compareScores(plrScore, dlrScore) {
    if (plrScore == 21) {
        playerWins = true
        clearInterval(interval)
        checkWinner()
    } else if (dlrScore == 21) {
        dealerWins = true
        clearInterval(interval)
        checkWinner()
    } else if ((plrScore == 21) && (dlrScore == 21)) {
        tie = true
        clearInterval(interval)
        checkWinner()
    } else if (dealerScore == dealerStandScore) {
        console.log('STAND');
        dealerTurn = false
        dealerCanHit = false
        if (dealerScore > playerScore && autoDealing == false && HIT == false) {
            dealerWins = true
        } else if (dealerScore < playerScore){
            dealerWins = false
            playerWins = true
        }
        clearInterval(interval)
        checkWinner()
    }
}

function autoDeal() {
    if (e.gameStart == true || restartGame == true) {
        autoDealing = true
        dealCard(1, playerDeck, 'your-cards')
        dealCard(1, dealerDeck, 'dealer-cards')
        dealCard(1, playerDeck, 'your-cards')
        dealCard(1, dealerDeck, 'dealer-cards')
        if (dealerScore == dealerStandScore || maxDealerScore) {
            dealerCanHit = false
        } else {
            dealerCanHit = true
        }
        if (playerScore == maxPlayerScore || dealerScore == maxDealerScore) {
            playerCanHit = false
        } else {
            playerCanHit = true
            playerTurn = true
        }
        autoDealing = false
    }
}

function dealerHit() {
    if (dealerTurn == true && playerTurn == false && dealerCanHit == true) {
        if (dealerScore < maxDealerScore && dealerScore <= playerScore) {
            console.log(playerScore);
            dealCard(1, dealerDeck, 'dealer-cards')
        }
        if (dealerScore > playerScore && dealerScore < maxDealerScore) {
            dealerWins = true
            playerWins = false
            clearInterval(interval)
            checkWinner()
        }
        if (dealerScore > maxDealerScore && dealerScore > playerScore) {
            dealerWins = false
            playerWins = true
            clearInterval(interval)
            checkWinner()
        }
        if (dealerScore == maxDealerScore) {
            console.log('BLACKJACK');
            dealerWins = true
            playerWins = false
            clearInterval(interval)
            checkWinner()
        }
        if (dealerScore > maxDealerScore) {
            console.log('BUST');
            dealerWins = false
            playerWins = true
            clearInterval(interval)
            checkWinner()
        }
        if (dealerScore == dealerStandScore) {
            console.log('STAND');
            dealerTurn = false
            dealerCanHit = false
            if (dealerScore > playerScore) {
                dealerWins = true
            } else {
                dealerWins = false
                playerWins = true
            }
            clearInterval(interval)
            checkWinner()
        }

    }
}

function playerHit() {
    let button = document.getElementById('hit')
    button.addEventListener('click', () => {
        if (playerScore < 21 && STAY == false && playerCanHit == true) {
            HIT = true
            dealCard(1, playerDeck, 'your-cards')
            console.log(playerScore);
        }
        if (playerScore == 21) {
            console.log('BLACKJACK!!');
            playerCanHit = false
            playerWins = true
            STAY = true
            HIT = false
            clearInterval(interval)
            checkWinner()
        }
        if (playerScore > 21) {
            LOST = true
            playerCanHit = false
            STAY = true
            HIT = false
            dealerWins = true
            clearInterval(interval)
            checkWinner()
            console.log('BUST!!');
        }
    })
}

function playerStay() {
    let button = document.getElementById('stay')
    button.addEventListener('click', () => {
        if (!STAY) {
            STAY = true
            dealerTurn = true
            playerTurn = false
            checkWinner()
            console.log(STAY);
            if (playerScore < dealerScore) {
                dealerWins = true
                checkWinner()
            } else {
                dealerCanHit = true
                interval = setInterval(dealerHit, 2000)
            }
        }
    })
}

function checkWinner() {
    if (dealerWins == true) {
        let gameText = document.getElementById('Win-Or-Lose-Text')
        gameText.textContent = "You Lose!"
        restartGame = true
    } else if (playerWins == true) {
        let gameText = document.getElementById('Win-Or-Lose-Text')
        gameText.textContent = "You Win!"
        restartGame = true
    } else if (tie == true) {
        let gameText = document.getElementById('Win-Or-Lose-Text')
        gameText.textContent = "Tie!"
        restartGame = true
    }
}

function gameRestart() {
    let button = document.getElementById('restart')
    let pC = document.getElementById('your-cards')
    let dC = document.getElementById('dealer-cards')
    let gameText = document.getElementById('Win-Or-Lose-Text')


    button.addEventListener('click', () => {
        gameText.textContent = ""
        while (pC.hasChildNodes()) {
            pC.removeChild(pC.firstChild)
        }
        while (dC.hasChildNodes()) {
            dC.removeChild(dC.firstChild)
        }

        currentDeck = []
        playerDeck = []
        dealerDeck = []
        playerTurn = true
        dealerTurn = false
        STAY = false
        LOST = false
        HIT = false
        dealerCanHit = false
        playerCanHit = false
        dealerWins = false
        playerWins = false
        restartGame = false
        tie = false
        playerScore = 0
        dealerScore = 0
        card = null
        cards = null
        interval = null
        randomCard = null

        const t1 = setTimeout(createDeck(currentDeck), 5000)
        const t2 = setTimeout(shuffleDeck(currentDeck), 5000)
        const t3 = setTimeout(autoDeal, 4000)


    })
}

createDeck(currentDeck)
shuffleDeck(currentDeck)

document.addEventListener('DOMContentLoaded', () => {
    autoDeal()
    playerHit()
    playerStay()
    gameRestart()
})