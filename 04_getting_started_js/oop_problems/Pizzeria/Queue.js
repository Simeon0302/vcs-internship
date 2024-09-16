export class Queue {
    #list;
    #processQueueDelay = 2000;

    constructor() {
        this.#list = [];
    }

    addToQueue(item) {
        this.#list.push(item);
    }

    removeFromQueue() {
        return this.#list.shift();
    }

    async processQueue() {
        let currentItem;
        while (true) {
            currentItem = this.removeFromQueue();
            if (currentItem !== undefined) {
                currentItem.ready((pizza, order) => {
                    console.log(`Order ${order.getId()} is ready.`);
                });
                currentItem.start();
                console.log('Pizza order is processing');
            }
            console.log('Waiting for start of next queue process iteration');
            await new Promise((res) => {
                setTimeout(() => {
                    res();
                }, this.#processQueueDelay);
            });
        }
    }
}
