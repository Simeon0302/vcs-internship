const ol = function(items) {
    let insideHTML = '';
    items.forEach((itemObj) => {
        insideHTML = insideHTML.concat(`<li>${itemObj.label}</li>`);
    });
    return `<ol>${insideHTML}</ol>`;
};

const ul = function(items) {
    let insideHTML = '';
    items.forEach((itemObj) => {
        insideHTML = insideHTML.concat(`<li>${itemObj.label}</li>`);
    });
    return `<ul>${insideHTML}</ul>`;
};

// Tests
const items = [{'label': 'Item 1'}, {'label': 'Item 2'}];
const htmlOl = ol(items);
console.log(htmlOl);

const items2 = [{'label': 'Item 1'}, {'label': 'Item 2'}];
const htmlUl = ul(items2);
console.log(htmlUl);
