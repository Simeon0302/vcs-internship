const groupBy = (groupingFunction, arr) => {
    const resultObj = {};
    arr.forEach(itemObj => {
        const groupingKeyValue = groupingFunction(itemObj);
        if(!(groupingKeyValue in resultObj)) {
            resultObj[groupingKeyValue] = [];
        }
        resultObj[groupingKeyValue].push(itemObj);
    })
    return resultObj;
};

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

console.log(groupBy(function (student) {
    return student.course;
}, students));

// Result must be:

// {
//     'Frontend JavaScript':
//     [{ name: 'Daniel Taskoff', course: 'Frontend JavaScript' },
//     { name: 'Luboslava Dimitrova', course: 'Frontend JavaScript' }],
//         'Programming 101': [{ name: 'Elena Jeleva', course: 'Programming 101' }],
//             'Core Java':
//     [{ name: 'Anton Antonov', course: 'Core Java' },
//     { name: 'Nikola Dichev', course: 'Core Java' }]
// }