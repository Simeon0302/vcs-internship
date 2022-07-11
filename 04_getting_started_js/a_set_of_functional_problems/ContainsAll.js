const containsAll = (elements, arr) => elements.every(element => arr.indexOf(element) >= 0)

console.log(containsAll([1, 5, 4], [1, 4, 2, 6, 5]));