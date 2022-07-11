const find = (predicate, arr) => arr.find(item => predicate(item))

const predicate = item => item > 10;
console.log(find(predicate, [1, 2, 3, 90, 50]))
