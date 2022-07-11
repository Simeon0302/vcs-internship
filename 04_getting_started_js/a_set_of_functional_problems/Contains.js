const contains = (element, arr) => arr.some(item => item === element);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(contains(1, arr));