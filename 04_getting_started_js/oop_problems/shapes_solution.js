function Shape(type) {
    this.type = type;

    this.getType = function() {
        return this.type;
    };
}

Shape.prototype.area = function() {
    throw new Error('Cannot call area of Shape. Use subclasses!');
};

class Rectangle extends Shape {
    type = 'rectangle';

    constructor(side1, side2) {
        super();
        this.side1 = side1;
        this.side2 = side2;
    }

    area() {
        return this.side1 * this.side2;
    }
}

class Triangle extends Shape {
    type = 'triangle';

    constructor(side1, side2, side3) {
        super();
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    area() {
        const p = (this.side1 + this.side2 + this.side3) / 2;
        return Math.sqrt(
            p *
            (p - this.side1) *
            (p - this.side2) *
            (p - this.side3));
    }
}

class Circle extends Shape {
    type = 'circle';

    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}
