class SimonSays {
    constructor() {
        // States
        this.Started = true
        this.Paused = false
        this.Ended = false

        // Properties
        this.differentColoredTile = false
        this.Level = 1
        this.maxLevel = 9
        this.tilesAmount = 2
        this.currentBoard = { board: 2 }


        // Color Values
        this.colorSubtract = 0
        this.colorAddition = 0
        this.easyColor = 100
        this.mediumColor = 35
        this.hardColor = 15
        this.extremeColor = 13
        this.testcolorred
        this.testweight = 0
        this.testcolorblue
        this.testcolorgreen

        // Arrays
        this.tilesArray = []



    }

    // Game Methods
    startGame() {

    }

    pauseGame() {

    }

    endGame() {

    }

    // Misc Functions
    randomNumberRange(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    // Color Change Methods
    rgb(r, g, b) {
        return "rgb(" + r + "," + g + "," + b + ")";
    }

    randomRGBValue(min, max) {
        var minRGB = Math.floor(min)
        var maxRBG = Math.floor(max)

        return Math.floor(Math.ceil(Math.random() * (maxRBG - minRGB) + min))
    }

    randomTileColor(array) {
        let randomTile = array[Math.floor(Math.random() * array.length)]
        randomTile.id = "correct-tile"
        console.log(randomTile);
        return randomTile
    }

    assignTileColor() {
        this.testweight = this.randomNumberRange(1, 4)
        this.testcolorred = this.dominantRedColor()
        this.testcolorblue = this.dominantBlueColor()
        this.testcolorgreen = this.dominantGreenColor()



        for (let i = 0; i < this.tilesArray.length; i++) {
            let button = this.tilesArray[i]
            if (button.className == 'colored-button') {
                if (this.testweight == 1) {
                    button.style.backgroundColor = this.testcolorred
                    console.log(this.test);
                }
                if (this.testweight == 2) {
                    button.style.backgroundColor = this.testcolorblue
                }
                if (this.testweight == 3) {
                    button.style.backgroundColor = this.testcolorgreen
                }
            }
        }

    }

    
    dominantRedColor(button) {
        var red = this.randomRGBValue(120, 255)
        var green = this.randomRGBValue(0, 120)
        var blue = this.randomRGBValue(0, 120)
        var mainColor = this.rgb(red, green, blue)
        var oddColor = this.rgb(red, green, blue)

        // if (button.className == 'correct-tile') {
        //     button.style.backgroundColor = mainColor
        // }

        return mainColor
    }

    dominantGreenColor() {
        var red = this.randomRGBValue(0, 120)
        var green = this.randomRGBValue(120, 255)
        var blue = this.randomRGBValue(0, 120)

        return this.rgb(red, green, blue)
    }

    dominantBlueColor() {
        var red = this.randomRGBValue(0, 120)
        var green = this.randomRGBValue(0, 120)
        var blue = this.randomRGBValue(120, 255)

        return this.rgb(red, green, blue)
    }

    // Board Manipulation Methods
    extendBoard() {
        if (this.Started == true && this.Paused == false && this.Ended == false) {

        }
    }

    createBoard() {
        if (this.Started == true && this.Paused == false && this.Ended == false) {
            for (const [key, value] of Object.entries(this.currentBoard)) {
                for (let index = 0; index < value ** 2; index++) {
                    const container = document.getElementById('gametiles')
                    const element = document.createElement('button')
                    element.className = 'colored-button'
                    element.style.borderRadius = '15px'
                    // element.style.backgroundColor = this.dominantRedColor()
                    this.tilesArray.push(element)
                    console.log(this.tilesArray);
                    container.appendChild(element)
                }
            }
        }
    }

    correctTile() {

    }


}


document.addEventListener('DOMContentLoaded', () => {
    let game = new SimonSays()

    game.createBoard()
    game.dominantRedColor()
    game.assignTileColor()
    game.randomTileColor(game.tilesArray)

})



// const object = { a: 1, b: 2, c: 3 };
// for (const [key, value] of Object.entries(object)) {
//     console.log(` ${key}, ${value}`);
//     console.log(value);

// }