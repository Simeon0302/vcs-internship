const charsHistogram = function(string) {
    string = string.toLowerCase().replace(/[^a-z]/g, '');
    const arr = [...string];
    const resultObj = {};

    arr.forEach((item) => {
        if (!resultObj.hasOwnProperty(item)) {
            resultObj[item] = 0;
        }
        resultObj[item] += 1;
    });

    return resultObj;
};

const str = 'Count the characters in this very profound sentence';
console.log(charsHistogram(str));

// Result must be

// { c: 4,
//   o: 3,
//   u: 2,
//   n: 5,
//   t: 5,
//   h: 3,
//   e: 6,
//   a: 2,
//   r: 4,
//   s: 3,
//   i: 2,
//   v: 1,
//   y: 1,
//   p: 1,
//   f: 1,
//   d: 1 }
