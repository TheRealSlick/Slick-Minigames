import { Points } from "../root/index.js";

const e = new Points()
e.awardPoints()


// Arrays
const currentDeck = []
const playerDeck = []
const dealerDeck = []

// Bools
var playerTurn = true
var dealerTurn = false
var Started = false
var Paused = false
var Ended = false
var Initiated = false
var HIT = false
var STAY = false

// Values
var playerScore = 0
var dealerScore = 0

let card;
let cards;
let randomCard;

var maxPlayerScore = 21
var maxDealerScore = 21
var dealerStandScore = 17
var cardValue = 0

// Functions
function createDeck(deck) {
    var deckValues = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', 'king', 'queen', 'jack']
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

// function assignDeckPoints(deckArray) {
//     for (let i = 0; i < deckArray.length; i++) {
//         const card = deckArray[i];
//         let cardNumber = card.split('_')
//         var cardVal = cardNumber[0]
//     }

//     if (isNaN(parseInt(cardVal))) {
//         if (cardVal.includes('ace')) {
//             let val = 11
//             return 11
//         } else {
//             return 10
//         }
//     }
//     return parseInt(cardVal)
// }

function assignDeckPoints(deckArray) {
    for (let i = 0; i < deckArray.length; i++) {
        const card = deckArray[i];
        let cardNumber = card.split('_')
        var cardVal = cardNumber[0]
        var holderval = cardVal
    }

    if (isNaN(parseInt(cardVal))) {
        if (cardVal.includes('ace')) {
            cardVal = 11
            if (cardVal + playerScore > 21) {
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
// function deckPoints() {
//     for (let i = 0; i < currentDeck.length; i++) {
//         var card = currentDeck[i]
//         if (card.includes('2')) {
//             cardValue = 2
//             console.log(card);
//             console.log(true);
//         }
//     }
// }

function playerHit() {
    let button = document.getElementById('hit')
    button.addEventListener('click', () => {
        if (playerScore < 21) {
            dealCard()
            if (assignDeckPoints(playerDeck) == 11) {
                let aceHolder = assignDeckPoints(playerDeck)
                console.log(assignDeckPoints(playerDeck));
                console.log(aceHolder);
                console.log(playerScore);
                if (aceHolder + playerScore > 1) {
                    assignDeckPoints(playerDeck) == 1
                    console.log(assignDeckPoints(playerDeck));
                }
            }
            playerScore += assignDeckPoints(playerDeck)
            console.log(playerScore);
        }
        if (playerScore == 21) {
            console.log('BLACKJACK!!');
        }
    })

}

function playerStay() {
    let button = document.getElementById('stay')
    button.addEventListener('click', () => {

    })
}

createDeck(currentDeck)
shuffleDeck(currentDeck)


function dealCard() {
    if (playerTurn == true && !dealerTurn) {
        var playerCards = document.getElementById('your-cards')
        for (let i = 0; i < 1; i++) {
            cards = document.createElement("img")
            randomCard = Math.floor(Math.random() * (currentDeck.length - 1))
            for (let j = 0; j < currentDeck.length; j++) {
                const element = currentDeck[j];
                if (j == randomCard) {
                    card = element
                    playerDeck.push(card)
                    currentDeck.splice(j, 1)
                }
            }
            cards.src = 'blackjackassets/DeckOfCards/' + card + '.png'
            cards.alt = 'card'
            playerCards.appendChild(cards)
        }

    }

    if (!playerTurn && dealerTurn == true) {
        var dealerCards = document.getElementById('dealer-cards')
        for (let i = 0; i < 1; i++) {
            cards = document.createElement("img")
            randomCard = Math.floor(Math.random() * currentDeck.length)
            for (let j = 0; j < currentDeck.length; j++) {
                const element = currentDeck[j];
                if (j == randomCard) {
                    card = element
                }
            }
            cards.src = 'blackjackassets/DeckOfCards/' + card + '.png'
            cards.alt = 'card'
            dealerCards.appendChild(cards)
        }
    }

}



document.addEventListener('DOMContentLoaded', () => {
    playerHit()
})


