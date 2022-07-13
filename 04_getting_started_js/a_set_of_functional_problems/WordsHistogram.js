const wordsHistogram = function(string) {
    const arr = string.toLowerCase().replace(/[^a-z\s]/g, '').split(' ');
    const resultObj = {};

    arr.forEach(function(item) {
        if (!resultObj.hasOwnProperty(item)) {
            resultObj[item] = 0;
        }
        resultObj[item] += 1;
    });
    console.log(resultObj);
};

const str = 'A function is a function with a very functional function!';
wordsHistogram(str);

// Result must be:

// {
//     "a" : 3,
//     "function" : 3,
//     "is" : 1,
//     "with" : 1,
//     "very" : 1,
//     "functional" : 1
// }
