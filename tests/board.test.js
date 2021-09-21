const createBoard = require("../src/board")


describe('board', () => {
    let size = 2
    test('creates a borad of the correct size', () => {
        const myBoard = createBoard(size)
        expect(myBoard[0].length).toBe(size)

    })
    size = 9
    test('creates a board of the big size', () => {
        const myBoard = createBoard(size)
        expect(myBoard[0].length).toBe(size)

    })
})