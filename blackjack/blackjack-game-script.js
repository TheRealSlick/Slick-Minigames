// Arrays
var currentDeck = []
var playerDeck = []
var dealerDeck = []

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

var maxPlayerScore = 21
var maxDealerScore = 21
var dealerStandScore = 17
var cardValue = 0

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
    var button = document.getElementById('hit')
    button.addEventListener('click', () => {
        if (playerScore < 21) {
            dealCard()
            if (assignDeckPoints(playerDeck) == 11) {
                if (11 + playerScore  > 21) {
                    assignDeckPoints(playerDeck) == 1
                }
            }
            playerScore += assignDeckPoints(playerDeck)
            console.log(playerScore);
        }
    })
}

function assignDeckPoints(deckArray) {
    for (let i = 0; i < deckArray.length; i++) {
        const card = deckArray[i];
        var cardNumber = card.split('_')
        var cardVal = cardNumber[0]
    }

    if (isNaN(parseInt(cardVal))) {
        if (cardVal.includes('ace')) {
            return 11
        } else {
            return 10
        }
    }
    return parseInt(cardVal)
}


createDeck(currentDeck)
shuffleDeck(currentDeck)


function dealCard() {
    var card;
    if (playerTurn == true) {
        var playerCards = document.getElementById('your-cards')
        for (let i = 0; i < 1; i++) {
            var playerNewCard = document.createElement("img")
            var playerRandomCard = Math.floor(Math.random() * (currentDeck.length - 1))
            for (let j = 0; j < currentDeck.length; j++) {
                const element = currentDeck[j];
                if (j == playerRandomCard) {
                    card = element
                    playerDeck.push(card)
                    currentDeck.splice(j, 1)
                }
            }
            playerNewCard.src = 'blackjackassets/DeckOfCards/' + card + '.png'
            playerNewCard.alt = 'card'
            playerCards.appendChild(playerNewCard)
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
    playerHit()
})


