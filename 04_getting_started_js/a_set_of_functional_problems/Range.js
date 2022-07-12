const range = function(from, to){
    return [from].concat(from === to ? [] : range(from + 1, to));
}

console.log(range(1, 10))