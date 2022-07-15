class Pair {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }

    equals(pair) {
        return this.left === pair.left && this.right === pair.right;
    }

    toString() {
        return `(${this.left}, ${this.right})`;
    }

    toList() {
        return [this.left, this.right];
    }

    combine(func) {
        return func(this.left, this.right);
    }
}


// Test
const assert = require('assert');

try {
    const p1 = new Pair(4, 6);
    const p2 = new Pair(4, 6);

    assert.equal(p1.equals(p2), true);
    console.log('First test passed');
} catch (e) {
    console.log('First test failed');
}

try {
    const p = new Pair(4, 6);

    assert(p.toString(), '(4, 6)');
    console.log('Second test passed');
} catch (e) {
    console.log('Second test failed');
}

try {
    const p = new Pair(4, 6);

    assert.equal(p.toList().toString(), [4, 6]);
    console.log('Third test passed');
} catch (e) {
    console.log('Third test failed');
}

try {
    const p = new Pair(4, 6);
    const combineFunction = (left, right) => left + right;
    assert.equal(p.combine(combineFunction), 10);
    console.log('Forth test passed');
} catch (e) {
    console.log('Forth test failed');
}
