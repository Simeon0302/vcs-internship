const queue = {
    queueList: [],

    push(item) {
        this.queueList.push(item);
    },

    pop() {
        return this.queueList.pop();
    },

    isEmpty() {
        return this.queueList.length === 0;
    },
};

// Tests
const assert = require('assert');

try {
    queue.push('Name');
    assert.equal(queue.pop(), 'Name');
    console.log('First test passed');
} catch (e) {
    console.log('First test failed');
}

try {
    assert.equal(queue.isEmpty(), true);
    console.log('Second test passed');
} catch (e) {
    console.log('Second test failed');
}
