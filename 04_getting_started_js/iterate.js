function double(x) {
    return x * 2;
}

const compose = (...functions) => x => functions.reduceRight((y, f) => f(y), x);

function* iterator(func) {
    let i = iterator(func)
    yield x => x;
    while (true) {
        yield compose(func, i.next().value);
    }
}

let i = iterator(double);
let f = i.next().value;
console.log(f(3));

f = i.next().value;
console.log(f(3))

f = i.next().value;
console.log(f(3))

f = i.next().value;
console.log(f(3))

f = i.next().value;
console.log(f(3))