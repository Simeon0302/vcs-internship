const identity = x => x;

const compose = function (a, b) {
    return arg => b(a(arg))
}

function* iterate(func) {
    let currentFunc = identity;
    while (true) {
        yield currentFunc;
        currentFunc = compose(currentFunc, func)
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