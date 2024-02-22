class SimonSays {
    constructor() {
        // Properties
        this.Started = true
        this.Paused = false
        this.Ended = false
        this.differentColoredTile = false
        // this.currentBoard = '2x2'
        this.Level = 1
        this.maxLevel = 9
        this.tilesAmount = 2
        this.currentBoard = { board: 2 }

        // Color Values
        this.easyColor = 100
        this.mediumColor = 35
        this.hardColor = 15
        this.extremeColor = 13




    }

    startGame() {

    }

    pauseGame() {

    }

    endGame() {

    }

    randomRGBValue(min, max) {
        var minRGB = Math.floor(min)
        var maxRBG = Math.floor(max)

        return Math.ceil(Math.random() * (max - min) + min)
    }

    rgb(r, g, b) {
        return "rgb(" + r + "," + g + "," + b + ")";
    }

    createBoard() {
        if (this.Started == true && this.Paused == false && this.Ended == false) {
            for (const [key, value] of Object.entries(this.currentBoard)) {
                for (let index = 0; index < value ** 2; index++) {
                    const container = document.getElementById('gametiles')
                    const element = document.createElement('button')
                    element.style.borderRadius = '10px'
                    element.style.backgroundColor = this.rgb(this.randomRGBValue(2, 255), 0, 0)
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

})



// const object = { a: 1, b: 2, c: 3 };
// for (const [key, value] of Object.entries(object)) {
//     console.log(` ${key}, ${value}`);
//     console.log(value);

// }