import {Pizza, PizzaOrder} from './Pizzeria.js';
import {Queue} from './Queue.js';

const startButton = document.getElementById('startButton');
const ordersList = document.getElementById('orders');
const sumCostText = document.getElementById('sumCost');
const queue = new Queue();
let totalCost = 0;

startButton.addEventListener('click', () => {
    startSimulation();
    startButton.disabled = true;
});

function displayPizzaOrder(id, pizzaName) {
    const li = document.createElement('li');
    li.innerText = `Order(${id}) ${pizzaName}`;
    ordersList.appendChild(li);
}

function updateAccumulatedCost(num) {
    sumCostText.innerText = num;
}

function startSimulation() {
    runSimulation();
    queue.processQueue();
}

async function runSimulation() {
    let time;
    while (true) {
        time = getRandomTime();
        await new Promise((res) =>{
            const order = new PizzaOrder(new Pizza('Peperroni', 100, 1000));
            totalCost += order.pizza.cost;
            updateAccumulatedCost(totalCost);

            queue.addToQueue(order);
            console.log('PizzaOrder added to queue');

            displayPizzaOrder(order.getId(), order.pizza.name);

            console.log('Waiting for new Pizza orders');
            setTimeout(() => {
                res();
            }, time);
        });
    }
}

const getRandomTime = () => (Math.floor(Math.random() * 6) + 1) * 1000;
