class Point {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;

        this.xInc = function() {
            this.#x++;
        };
        this.xDec = function() {
            this.#x--;
        };
        this.yInc = function() {
            this.#y++;
        };
        this.yDec = function() {
            this.#y--;
        };
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }

    equals(point) {
        return this.#x === point.x && this.#y === point.y;
    }

    toString() {
        return `Point @ ${this.#x}, ${this.#y}`;
    }
}

// Tests
const point = new Point(0, 0);
console.log(point.toString());

point.xInc();
point.yDec();

console.log(point.toString());
