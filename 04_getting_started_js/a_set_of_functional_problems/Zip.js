/* eslint-disable prefer-rest-params */
const zip = function() {
    const resultList = [];

    for (let i = 0; i < arguments.length; i++) {
        resultList[i] = [];
        for (let j = 0; j < arguments.length; j++) {
            resultList[i].push(arguments[i][j]);
        }
    }
    return resultList;
};

console.log(zip([1, 2, 3], [4, 5, 6]));
// [ [1, 4], [2, 4], [3, 6] ]

console.log(zip([1, 2, 3], [4, 5, 6], [7, 8, 9]));
// [ [1, 4, 7], [2, 4, 8], [3, 6, 9] ]
