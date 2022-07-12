const countBy = function(countingFunction, arr){
    const resultObj = {};
    arr.forEach(itemObj => {
        const countingKey = countingFunction(itemObj);
        if(!(countingKey in resultObj)) {
            resultObj[countingKey] = 0;
        }
        resultObj[countingKey]++;
    })
    return resultObj;
}

var students = [{
    "name": "Daniel Taskoff",
    "course": "Frontend JavaScript"
}, {
    "name": "Elena Jeleva",
    "course": "Programming 101"
}, {
    "name": "Luboslava Dimitrova",
    "course": "Frontend JavaScript"
}, {
    "name": "Anton Antonov",
    "course": "Core Java"
}, {
    "name": "Nikola Dichev",
    "course": "Core Java"
}];

console.log(countBy(function (student) {
    return student.course;
}, students));
