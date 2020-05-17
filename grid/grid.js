// Currently expects the global variables 'width' and 'height'

class Grid {
    constructor(horizontalCellCount, veriticalCellCount, offset, cellInitFunc) {
        this.horizontalCellCount = horizontalCellCount;
        this.veriticalCellCount = veriticalCellCount;
        this.offset = offset;
        this.data = [];
        this.cellWidth = width / this.horizontalCellCount;
        this.cellHeight = height / this.veriticalCellCount;
        for (let i = 0; i < this.veriticalCellCount; i++) {
            this.data[i] = [];
            let y = i * this.cellHeight;
            for (let j = 0; j < this.horizontalCellCount; j++) {
                let x = this.offset && i % 2 ? (j * this.cellWidth) + this.cellWidth / 2 : j * this.cellWidth;
                this.data[i][j] = cellInitFunc(x, y);
            }
        }
    }

    draw() {
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].length; j++) {
                this.data[i][j].draw();
            }
        }
    }

    update() {
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].length; j++) {
                this.data[i][j].update();
            }
        }
    }

    log() {
        console.table(this.data);
    }
}

