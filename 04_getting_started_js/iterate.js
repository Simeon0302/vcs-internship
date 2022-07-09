const identity = x => x;

const compose = (func, times) => times == 0 ? identity : n => func(compose(func, times - 1)(n));

function* iterate(func) {
    let counter = 0;
    while (true) {
        yield compose(func, counter);
        counter++;
    }
}

const double = x => x * 2;

const i = iterate(double);

let f = i.next().value;
console.log(f(3));

f = i.next().value;
console.log(f(3));

f = i.next().value;
console.log(f(3));

f = i.next().value;
console.log(f(3));