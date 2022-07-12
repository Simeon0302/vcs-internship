const without = function(exclude, arr){
    return arr.filter(item => {
        return !exclude.includes(item);
    })
}

console.log(without([5, 6], [1, 2, 3, 4, 5, 6])); // [1,2,3,4]