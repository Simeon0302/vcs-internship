const only = (type, arr) => arr.every(item => typeof item === type)

console.log(only("string", [1, 2, 3, 4])); // false
console.log(only("number", [1, 2, 3, 4])); // true