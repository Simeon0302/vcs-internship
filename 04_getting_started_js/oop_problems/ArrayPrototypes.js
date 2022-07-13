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
console.log([1, 2, 3, 4].first());
console.log([].range(1, 10));
console.log([1, 2, 3, 4, 5].sum());
console.log([1, 2, 3, 4, 5].average());
