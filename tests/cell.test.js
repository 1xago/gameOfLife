// const createCell = require("../src/cell/createCell")
// import createCell from '../src/cell'

const createCell = require("../src/cell")

describe('cell',()=>{
    test('properly creates a dead cell',() => {
        const cell = createCell(false)
    
        console.log(cell.alive,"I am alive")
        expect(cell.alive).toBe(false)
    
    })
})
