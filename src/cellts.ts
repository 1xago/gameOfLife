export interface Cell {
alive : Boolean
}

export function createCell (_alive: Boolean = false):Cell {
    let cell:Cell
    cell.alive = _alive
    return cell
}

 

