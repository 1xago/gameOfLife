
const createCell = require("./cell")

class Board{
    constructor(size){
        let board = new Array(size).fill(new Array (size))
        for(let row=0;row<size;row++)
        {
            for(let column = 0; column<size;column++)
            {
                board[row][column] = createCell(false,row,column)
            }
        }
        return board
    }
}
function createBoard (lenth) {
    return new Board(lenth)
}
    
module.exports = createBoard

