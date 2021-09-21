class Cell {
    constructor(alive,x=0,y=0){
        this.alive = alive,
        this.x = x,
        this.y = y
    }
}

function createCell (_alive = false,_x = 0,_y=0) {
    const cell = new Cell(_alive,_x,_y)
    return cell
}

module.exports = createCell
 

