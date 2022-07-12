const ol = function(items){
    let insideHTML = "";
    items.forEach(itemObj => {
        insideHTML = insideHTML.concat(`<li>${itemObj.label}</li>`)
    })
    return `<ol>${insideHTML}</ol>`
}

const ul = function(items){
    let insideHTML = "";
    items.forEach(itemObj => {
        insideHTML = insideHTML.concat(`<li>${itemObj.label}</li>`)
    })
    return `<ul>${insideHTML}</ul>`
}

var items = [{ "label": "Item 1" }, { "label": "Item 2" }]
var htmlOl = ol(items);
console.log(htmlOl);