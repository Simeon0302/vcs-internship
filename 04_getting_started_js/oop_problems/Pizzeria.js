class Pizza {
    #name;
    #cost;
    #timeToMake;

    constructor(name, cost, timeToMake) {
        this.#name = name;
        this.#cost = cost;
        this.#timeToMake = timeToMake;
    }

    get name() {
        return this.#name;
    }

    get cost() {
        return this.#cost;
    }

    get timeToMake() {
        return this.#timeToMake;
    }
}

class PizzaOrder {
    #id;
    #pizza;
    #whenPizzaReadyFunc;

    constructor(pizza) {
        this.#id = this.generateId();
        this.#pizza = pizza;
    }

    generateId() {
        return Date.now().toString(36);
    }

    getId() {
        return this.#id;
    }

    async start() {
        await this.timer(this.#pizza.timeToMake);
        this.#whenPizzaReadyFunc(this.#pizza, this);
    }

    timer(time) {
        return new Promise((res) => {
            setTimeout(() => {
                res();
            }, time);
        });
    }

    ready(callback) {
        this.#whenPizzaReadyFunc = callback;
    }
}

const pizza = new Pizza('Peperoni', 100, 5000);

const order = new PizzaOrder(pizza);
order.ready(function(p, o) {
    console.log(`Order ${o.getId()} is ready`);
});

order.start();
