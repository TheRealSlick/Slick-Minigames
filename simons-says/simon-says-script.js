class SimonSays {
    constructor() {

        // States
        this.Started = false
        this.Paused = false
        this.Ended = false

        // Properties
        this.isTile = false
        this.currentLevel = 1
        this.maxLevel = 9
        this.tilesAmount = 2
        this.timer = 60
        this.currentBoard = { board: 2 }

        this.time = setInterval(() => {
            if (this.Started == true && this.timer != 0 && this.Paused == false) {
                let timerCounter = document.getElementById('timer')
                this.timer -= 1
                timerCounter.textContent = this.timer
            } 
        }, 1000);

        // Color Values
        this.easyColor = 100
        this.colorPickerWeight = 0
        this.levelPicker = 2
        this.levelPickerTwo = 2

        // DOM

        // Arrays
        this.tilesArray = []



    }



    // Game Methods
    startGame() {
        let startButton = document.getElementById('start')
        startButton.addEventListener('click', () => {
            this.Paused = false
            if (this.Paused == false) {
                this.Started = true
                this.initiateGame()
                this.time
            }
        })
    }

    pauseGame() {
        let pauseButton = document.getElementById('pause')
        pauseButton.addEventListener('click', () => {
            if (this.Started == true) {
                this.Started = false
                this.Paused = true
                clearInterval(this.time)
            }
        })
    }

    endGame() {

    }

    // Misc Functions
    randomNumberRange(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    returnMinimumColorRange(min, max, num) {
        return num >= min && num <= max
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
        return randomTile
    }

    assignTileColor() {
        this.colorPickerWeight = this.randomNumberRange(1, 8)

        if (this.colorPickerWeight == 1) {
            console.log('weight is one');
            this.dominantRedColor()
        } else if (this.colorPickerWeight == 2) {
            console.log('weight is two');
            this.dominantGreenColor()
        } else if (this.colorPickerWeight == 3) {
            console.log('weight is three');
            this.dominantBlueColor()
        } else if (this.colorPickerWeight == 4) {
            console.log('weight is four');
            this.dominantRGColor()
        } else if (this.colorPickerWeight == 5) {
            console.log('weight is 5');
            this.dominantRBColor()
        } else if (this.colorPickerWeight == 6) {
            console.log('weight is 6');
            this.dominantBGColor()
        } else if (this.colorPickerWeight == 7) {
            console.log('weight is 7');
            this.RBGColor()
        }
    }


    dominantRedColor() {
        var red = this.randomRGBValue(180, 255)
        var green = this.randomRGBValue(0, 120)
        var blue = this.randomRGBValue(0, 120)
        var mainColor = this.rgb(red, green, blue)

        for (let i = 0; i < this.tilesArray.length; i++) {
            const element = this.tilesArray[i]
            if (element.id == 'correct-tile') {
                var newColorRed = 255
                var newColorGreen = green + this.easyColor
                var newColorBlue = blue + this.easyColor

                element.style.backgroundColor = this.rgb(newColorRed, newColorGreen, newColorBlue)
                console.log(element.style.backgroundColor);

            }

        }

        for (let i = 0; i < this.tilesArray.length; i++) {
            let button = this.tilesArray[i]
            if ((button.className == 'colored-button') && button.id != 'correct-tile') {
                button.style.backgroundColor = mainColor
            }
        }

        return mainColor
    }


    dominantGreenColor() {
        var red = this.randomRGBValue(0, 120)
        var green = this.randomRGBValue(180, 245)
        var blue = this.randomRGBValue(0, 120)
        var mainColor = this.rgb(red, green, blue)

        for (let i = 0; i < this.tilesArray.length; i++) {
            const element = this.tilesArray[i]
            if (element.id == 'correct-tile') {
                var newColorRed = red + this.easyColor
                var newColorGreen = 255
                var newColorBlue = blue + this.easyColor

                element.style.backgroundColor = this.rgb(newColorRed, newColorGreen, newColorBlue)
                console.log(element.style.backgroundColor);

            }

        }

        for (let i = 0; i < this.tilesArray.length; i++) {
            let button = this.tilesArray[i]
            if ((button.className == 'colored-button') && button.id != 'correct-tile') {
                button.style.backgroundColor = mainColor
            }
        }


        return mainColor
    }

    dominantBlueColor() {
        var red = this.randomRGBValue(0, 120)
        var green = this.randomRGBValue(0, 120)
        var blue = this.randomRGBValue(180, 255)
        var mainColor = this.rgb(red, green, blue)

        for (let i = 0; i < this.tilesArray.length; i++) {
            const element = this.tilesArray[i]
            if (element.id == 'correct-tile') {
                var newColorRed = red + this.easyColor
                var newColorGreen = green + this.easyColor
                var newColorBlue = 255

                element.style.backgroundColor = this.rgb(newColorRed, newColorGreen, newColorBlue)
                console.log(element.style.backgroundColor);

            }

        }

        for (let i = 0; i < this.tilesArray.length; i++) {
            let button = this.tilesArray[i]
            if ((button.className == 'colored-button') && button.id != 'correct-tile') {
                button.style.backgroundColor = mainColor
            }
        }

        return mainColor
    }

    dominantRGColor() {
        var red = this.randomRGBValue(155, 255)
        var green = this.randomRGBValue(155, 245)
        var blue = this.randomRGBValue(0, 120)
        var mainColor = this.rgb(red, green, blue)

        for (let i = 0; i < this.tilesArray.length; i++) {
            const element = this.tilesArray[i]
            if (element.id == 'correct-tile') {
                var newColorRed = red + this.easyColor
                var newColorGreen = green + this.easyColor
                var newColorBlue = blue + this.easyColor

                element.style.backgroundColor = this.rgb(newColorRed, newColorGreen, newColorBlue)
                console.log(element.style.backgroundColor);

            }

        }

        for (let i = 0; i < this.tilesArray.length; i++) {
            let button = this.tilesArray[i]
            if ((button.className == 'colored-button') && button.id != 'correct-tile') {
                button.style.backgroundColor = mainColor
            }
        }

        return mainColor
    }

    dominantRBColor() {
        var red = this.randomRGBValue(155, 255)
        var green = this.randomRGBValue(0, 120)
        var blue = this.randomRGBValue(155, 245)
        var mainColor = this.rgb(red, green, blue)

        for (let i = 0; i < this.tilesArray.length; i++) {
            const element = this.tilesArray[i]
            if (element.id == 'correct-tile') {
                var newColorRed = red + this.easyColor
                var newColorGreen = green + this.easyColor
                var newColorBlue = blue + this.easyColor

                element.style.backgroundColor = this.rgb(newColorRed, newColorGreen, newColorBlue)
                console.log(element.style.backgroundColor);

            }

        }

        for (let i = 0; i < this.tilesArray.length; i++) {
            let button = this.tilesArray[i]
            if ((button.className == 'colored-button') && button.id != 'correct-tile') {
                button.style.backgroundColor = mainColor
            }
        }

        return mainColor
    }

    dominantBGColor() {
        var red = this.randomRGBValue(0, 120)
        var green = this.randomRGBValue(155, 245)
        var blue = this.randomRGBValue(155, 255)
        var mainColor = this.rgb(red, green, blue)

        for (let i = 0; i < this.tilesArray.length; i++) {
            const element = this.tilesArray[i]
            if (element.id == 'correct-tile') {
                var newColorRed = red + this.easyColor
                var newColorGreen = green + this.easyColor
                var newColorBlue = blue + this.easyColor

                element.style.backgroundColor = this.rgb(newColorRed, newColorGreen, newColorBlue)
                console.log(element.style.backgroundColor);

            }

        }

        for (let i = 0; i < this.tilesArray.length; i++) {
            let button = this.tilesArray[i]
            if ((button.className == 'colored-button') && button.id != 'correct-tile') {
                button.style.backgroundColor = mainColor
            }
        }

        return mainColor
    }

    RBGColor() {
        var red = this.randomRGBValue(155, 245)
        var green = this.randomRGBValue(155, 245)
        var blue = this.randomRGBValue(155, 245)
        var mainColor = this.rgb(red, green, blue)

        for (let i = 0; i < this.tilesArray.length; i++) {
            const element = this.tilesArray[i]
            if (element.id == 'correct-tile') {
                var newColorRed = red + this.easyColor
                var newColorGreen = green + this.easyColor
                var newColorBlue = blue + this.easyColor

                element.style.backgroundColor = this.rgb(newColorRed, newColorGreen, newColorBlue)
                console.log(element.style.backgroundColor);

            }

        }

        for (let i = 0; i < this.tilesArray.length; i++) {
            let button = this.tilesArray[i]
            if ((button.className == 'colored-button') && button.id != 'correct-tile') {
                button.style.backgroundColor = mainColor
            }
        }

        return mainColor
    }

    // Board Manipulation Methods
    initiateGame() {
        if (this.Started == true && this.Paused == false && this.Ended == false) {
            if (this.currentLevel == 1) {
                this.createBoard()
            }
        }
    }

    nextLevel() {
        if (this.isTile == true) {
            this.isTile = false
            this.currentBoard.board += 1
            this.currentLevel += 1
            this.tilesArray = []
            var e = document.getElementById('gametiles')
            e.replaceChildren()

            if (this.currentBoard.board == 3) {
                var newBoard = document.getElementById('gametiles')
                newBoard.style.width = '300px'
                newBoard.style.height = '300px'
                newBoard.style.setProperty('grid-template-columns', 'repeat(3,1fr)')
                this.easyColor -= 10
                console.log(this.easyColor);
                this.createBoard()
            }

            if (this.currentBoard.board == 4) {
                var newBoard = document.getElementById('gametiles')
                newBoard.style.width = '400px'
                newBoard.style.height = '400px'
                newBoard.style.setProperty('grid-template-columns', 'repeat(4,1fr)')
                this.easyColor -= 10
                console.log(this.easyColor);
                this.createBoard()
            }

            if (this.currentBoard.board == 5) {
                var newBoard = document.getElementById('gametiles')
                newBoard.style.width = '500px'
                newBoard.style.height = '500px'
                newBoard.style.setProperty('grid-template-columns', 'repeat(5,1fr)')

                console.log(this.easyColor);
                this.createBoard()
                if (this.levelPicker != 0) {
                    this.levelPicker -= 1
                    this.currentBoard.board -= 1
                    console.log(this.currentBoard.board);
                }


            }
            if (this.currentBoard.board == 6 && this.levelPicker == 0) {
                var newBoard = document.getElementById('gametiles')
                newBoard.style.width = '600px'
                newBoard.style.height = '600px'
                newBoard.style.setProperty('grid-template-columns', 'repeat(6,1fr)')
                this.easyColor -= 10
                console.log(this.easyColor);
                this.createBoard()
            }
            if (this.currentBoard.board == 7) {
                var newBoard = document.getElementById('gametiles')
                newBoard.style.width = '700px'
                newBoard.style.height = '700px'
                newBoard.style.setProperty('grid-template-columns', 'repeat(7,1fr)')
                this.easyColor -= 10
                console.log(this.easyColor);
                this.createBoard()
                if (this.levelPickerTwo != 0) {
                    this.levelPickerTwo -= 1
                    this.currentBoard.board -= 1
                    console.log(this.currentBoard.board);
                }
            }

            if (this.currentBoard.board == 8 && this.levelPickerTwo == 0) {
                var newBoard = document.getElementById('gametiles')
                newBoard.style.width = '700px'
                newBoard.style.height = '700px'
                newBoard.style.setProperty('grid-template-columns', 'repeat(8,1fr)')
                console.log(this.easyColor);
                this.createBoard()
            }

            if (this.currentBoard.board == 9) {
                console.log('nine');
                var newBoard = document.getElementById('gametiles')
                newBoard.style.width = '700px'
                newBoard.style.height = '700px'
                newBoard.style.setProperty('grid-template-columns', 'repeat(9,1fr)')
                if (this.easyColor != 10) {
                    this.easyColor -= 10
                } else {
                    console.log(true);
                }
                console.log(this.easyColor);
                this.createBoard()
                this.currentBoard.board = 8
            }
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
                    this.tilesArray.push(element)
                    container.appendChild(element)
                }
            }
            this.randomTileColor(this.tilesArray)
            this.assignTileColor()
            this.correctTile()
        }
    }

    correctTile() {
        if (this.Started == true && this.Paused == false && this.Ended == false) {
            for (let i = 0; i < this.tilesArray.length; i++) {
                var button = this.tilesArray[i]
                if (button.id == "correct-tile") {
                    button.addEventListener('click', () => {
                        console.log('clicked');
                        this.isTile = true
                        this.nextLevel()

                    })
                }

            }
        }

    }
}


document.addEventListener('DOMContentLoaded', () => {
    let game = new SimonSays()
    game.startGame()
    game.pauseGame()
    game.initiateGame()

})



