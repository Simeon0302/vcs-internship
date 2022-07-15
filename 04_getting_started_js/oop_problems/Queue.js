/* eslint-disable no-extend-native */
Object.prototype.push = function(item) {
    if (Object.keys(this).length === 0) {
        this[0] = item;
    } else {
        this[Object.keys(this).length - 1] = item;
    }
};

Object.prototype.pop = function() {
    return this[Object.keys(this).length - 1];
};

Object.prototype.isEmpty = function() {
    return Object.keys(this).length === 0;
};

// Tests
const assert = require('assert');

try {
    const q = {};
    q.push('Name');
    assert.equal(q.pop(), 'Name');
    console.log('First test passed');
} catch (e) {
    console.log('First test failed');
}

try {
    const q = {};
    assert.equal(q.isEmpty(), true);
    console.log('Second test passed');
} catch (e) {
    console.log('Second test failed');
}
