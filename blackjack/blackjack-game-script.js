var currentDeck = []

function createDeck(deck) {
    var deckValues = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'king', 'queen', 'jack']
    var deckSuitType = ['of_spades', 'of_hearts', 'of_diamonds', 'of_clubs']

    for (let i = 0; i < deckValues.length; i++) {
        for (let j = 0; j < deckSuitType.length; j++) {
            deck.push(deckValues[i] + '_' + deckSuitType[j])
        }
    }
    console.log(deck);
}

function shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
        // Randomize the indexes in the array, the Durstenfeld Shuffle
        const shuffle = Math.floor(Math.random() * deck.length)
        var card = deck[i]
        deck[i] = deck[shuffle]
        deck[shuffle] = card
    }
    console.log(deck);
}

createDeck(currentDeck)
shuffleDeck(currentDeck)
var r = currentDeck
console.log(Math.floor(Math.random() * r.length));


function getCard() {
    var array = document.getElementById('dealer-cards')
    // var a = array.getElementsByTagName('img')
    // var b = array.getElementsByTagName('test')
    // console.log(array);
    // for (let i = 0; i < a.length; i++) {
    //     const element = a[i]
    //     if (element.id == 'test') {
    //         console.log(element);
    //     }
    // }

    for (let i = 0; i < 1; i++) {
        var newcard = document.createElement("img")
        var randomCard = Math.floor(Math.random() * currentDeck.length)
        var card;
        for (let j = 0; j < currentDeck.length; j++) {
            const element = currentDeck[j];
            if (j == randomCard) {
                card = element
            }
            
        }
        newcard.src = 'blackjackassets/DeckOfCards/' + card + '.png'
        newcard.alt = 'card'
        array.appendChild(newcard)
        console.log(newcard);


    }
}


document.addEventListener('DOMContentLoaded', () => {
    getCard()
})
