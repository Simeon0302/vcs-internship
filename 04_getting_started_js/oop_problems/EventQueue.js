const eventQueue = {
    queue: {},
    on(eventName, callback) {
        if (this.queue.hasOwnProperty(eventName)) {
            this.queue[eventName].push(callback);
        } else {
            this.queue[eventName] = [callback];
        }
    },

    remove(eventName) {
        delete this.queue[eventName];
    },

    trigger(eventName) {
        this.queue[eventName].forEach((callback) => {
            callback();
        });
    },
};

// Tests

eventQueue.on('PANIC_EVENT', function() {
    console.log('PANIC_EVENT HAPPENED!');
});

eventQueue.on('PANIC_EVENT', function() {
    console.log('PANIC_EVENT HAPPENED AGAIN!');
});

eventQueue.trigger('PANIC_EVENT');
