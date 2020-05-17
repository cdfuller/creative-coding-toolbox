let width = 100;
let height = 100;

class Cell {
    constructor(x, y) {
        return {
            "x": x,
            "y": y,
            "state": Math.random() > 0.5 ? 0 : 1,
        };
    }
    
    draw() {
    }
}


let grid = new Grid(10, 10, true, Cell);