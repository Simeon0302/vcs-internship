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

    set x(value) {
        this.#x = value;
    }

    set y(value) {
        this.#y = value;
    }

    equals(point) {
        return this.#x === point.x && this.#y === point.y;
    }

    toString() {
        return `Point @ ${this.#x}, ${this.#y}`;
    }
}

class Robot {
    #startPoint;
    #currentPosition;

    constructor(startPoint) {
        this.#startPoint = startPoint;
        this.#currentPosition = this.#startPoint;
    }

    moveLeft(amount) {
        this.#currentPosition.x -= amount;
    }

    moveRight(amount) {
        this.#currentPosition.x += amount;
    }

    moveUp(amount) {
        this.#currentPosition.y -= amount;
    }

    moveDown(amount) {
        this.#currentPosition.y += amount;
    }

    getPosition() {
        return this.#currentPosition;
    }
}

// Tests
const assert = require('assert');

try {
    const robot = new Robot(new Point(0, 0));

    robot.moveLeft(10);
    robot.moveDown(5);

    assert.equal(robot.getPosition().toString(), 'Point @ -10, 5');
    console.log('Test passed');
} catch (e) {
    console.log('Test failed');
}
