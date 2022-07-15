/* eslint-disable no-extend-native */
String.prototype.capitalize = function() {
    return this.toUpperCase();
};

String.prototype.dasharize = function() {
    return this.replace(/[_]/g, '-');
};

String.prototype.times = function(amount) {
    let resultString = '';

    while (amount > 0) {
        resultString += this + ' ';
        amount--;
    }

    return resultString.trimEnd();
};

String.prototype.blank = function() {
    return this.trim().length === 0;
};

// Tests
const assert = require('assert');

try {
    assert.equal('javascript'.capitalize(), 'JAVASCRIPT');
    console.log('First test passed');
} catch (e) {
    console.log('First test failed');
}

try {
    assert.equal('border_bottom_width'.dasharize(), 'border-bottom-width');
    console.log('Second test passed');
} catch (e) {
    console.log('Second test failed');
}

try {
    assert.equal('  '.blank(), true);
    console.log('Third test passed');
} catch (e) {
    console.log('Third test failed');
}

try {
    assert.equal(' a'.blank(), false);
    console.log('Fourth test passed');
} catch (e) {
    console.log('Fourth test failed');
}
