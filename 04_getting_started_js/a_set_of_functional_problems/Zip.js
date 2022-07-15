const zip = function(...args) {
    const resultList = [];

    for (let index = 0; index < args[0].length; index++) {
        resultList[index] = [];
        args.forEach((arr) => {
            resultList[index].push(arr[index]);
        });
    }

    return resultList;
};

// Tests
const assert = require('assert');

try {
    assert.equal(
        zip([1, 2, 3], [4, 5, 6]).toString(),
        [[1, 4], [2, 5], [3, 6]].toString());

    console.log('First test passed');
} catch (e) {
    console.log('First test failed');
}

try {
    assert.equal(
        zip([1, 2, 3], [4, 5, 6], [7, 8, 9]).toString(),
        [[1, 4, 7], [2, 5, 8], [3, 6, 9]].toString());

    console.log('Second test passed');
} catch (e) {
    console.log('Second test failed');
}
