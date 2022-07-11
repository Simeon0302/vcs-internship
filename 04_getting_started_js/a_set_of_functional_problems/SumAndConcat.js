const sum = (a, b) => {
    if(typeof a === 'number' && typeof b === 'number') return a + b;
    else{
        throw new TypeError("Something is wrong with the types.");   
    }
}

const concat = (a, b) => {
    if (typeof a === 'string' && typeof b === 'string') return a + b;
    else {
        throw new TypeError("Something is wrong with the types.");
    }
}

console.log(sum(1, 2))
console.log(concat("Hello ", "World"))