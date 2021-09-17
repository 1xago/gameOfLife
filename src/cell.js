class Cell {
    constructor(alive){
        this.alive = alive
    }
}

function createCell (_alive = false) {
    let cell = new Cell(_alive)
    return cell
}

module.exports = createCell
 

