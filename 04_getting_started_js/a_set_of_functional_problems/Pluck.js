const pluck = function(property, arr){
    const resultList = arr.map(itemObj => {
        return itemObj[property];
    })
    console.log(resultList);
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

pluck("name", students)