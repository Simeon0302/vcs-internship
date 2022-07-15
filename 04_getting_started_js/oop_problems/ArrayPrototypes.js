/* eslint-disable no-extend-native */
Array.prototype.first = function() {
    if (this.length < 0) {
        throw new Error('Array is empty');
    }
    return this[0];
};

Array.prototype.range = function(from, to) {
    const resultList = [];
    for (let i = from; i <= to; i++) {
        resultList.push(i);
    }

    return resultList;
};

Array.prototype.sum = function() {
    return this.reduce((a, b) => a + b);
};

Array.prototype.average = function() {
    return this.sum() / this.length;
};

// Tests
const assert = require('assert');

try {
    assert.equal([1, 2, 3, 4].first(), 1);
    console.log('First test passed');
} catch (e) {
    console.log('First test failed');
}

try {
    assert.equal([].range(1, 5).toString(), '[1, 2, 3, 4, 5]');
    console.log('Second test passed');
} catch (e) {
    console.log('Second test failed');
}

try {
    assert.equal([1, 2, 3, 4, 5].sum(), 15);
    console.log('Third test passed');
} catch (e) {
    console.log('Third test failed');
}

try {
    assert.equal([1, 2, 3, 4, 5].average(), 3);
    console.log('Fourth test passed');
} catch (e) {
    console.log('Fourth test failed');
}
