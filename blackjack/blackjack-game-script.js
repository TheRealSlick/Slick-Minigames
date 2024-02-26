// Arrays
var currentDeck = []

// Bools
var playerTurn = true
var dealerTurn = false
var Started = false
var Paused = false
var Ended = false
var Intiated = false
var HIT = false
var STAY = false

// Values
var playerScore = 0
var dealerScore = 0

var maxPlayerScore = 21
var maxDealerScore = 21
var dealerStandScore = 17

// Elements
var hitButton = document.getElementById('hit')
var stayButton = document.getElementById('stay')

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

function deckPoints() {
    for (let i = 0; i < currentDeck.length; i++) {
        var card = currentDeck[i]
        if (card.includes('')) {
            console.log(true);
        }
    }
}

createDeck(currentDeck)
shuffleDeck(currentDeck)


function dealCard() {
    var card;
    if (playerTurn == true) {
        var playerCards = document.getElementById('your-cards')
        for (let i = 0; i < 1; i++) {
            var playerNewCard = document.createElement("img")
            var playerRandomCard = Math.floor(Math.random() * currentDeck.length)
            for (let j = 0; j < currentDeck.length; j++) {
                const element = currentDeck[j];
                if (j == playerRandomCard) {
                    card = element
                }
            }
            playerNewCard.src = 'blackjackassets/DeckOfCards/' + card + '.png'
            playerNewCard.alt = 'card'
            playerCards.appendChild(playerNewCard)
            console.log(playerNewCard);
        }
    }

    if (!playerTurn && dealerTurn == true) {
        var dealerCards = document.getElementById('dealer-cards')
        for (let i = 0; i < 1; i++) {
            var dealerNewCards = document.createElement("img")
            var dealerRandomCard = Math.floor(Math.random() * currentDeck.length)
            for (let j = 0; j < currentDeck.length; j++) {
                const element = currentDeck[j];
                if (j == dealerRandomCard) {
                    card = element
                }
            }
            dealerNewCards.src = 'blackjackassets/DeckOfCards/' + card + '.png'
            dealerNewCards.alt = 'card'
            dealerCards.appendChild(dealerNewCards)
            console.log(dealerNewCards);
        }
    }
}



document.addEventListener('DOMContentLoaded', () => {
    dealCard()
    deckPoints()
})


