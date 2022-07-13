const ol = function(items) {
    let insideHTML = '';

    items.forEach((itemObj) => {
        if (itemObj.hasOwnProperty('label')) {
            insideHTML += `<li>${itemObj.label}</li>`;
        }
        if (itemObj.hasOwnProperty('children')) {
            insideHTML += ol(itemObj['children']);
        }
    });

    return `<ol>${insideHTML}</ol>`;
};

const ul = function(items) {
    let insideHTML = '';

    items.forEach((itemObj) => {
        if (itemObj.hasOwnProperty('label')) {
            insideHTML += `<li>${itemObj.label}</li>`;
        }
        if (itemObj.hasOwnProperty('children')) {
            insideHTML += ol(itemObj['children']);
        }
    });

    return `<ul>${insideHTML}</ul>`;
};

// Tests

const items = [{'label': 'Item 1'},
    {
        'label': 'Item 2', 'children': [
            {
                'label': 'Level 2 of Item 2',
            },
            {
                'label': 'Another level 2',
            },
        ],
    }];

console.log(ol(items));

const items2 = [{'label': 'Item 1'},
    {
        'label': 'Item 2', 'children': [
            {
                'label': 'Level 2 of Item 2',
            },
            {
                'label': 'Another level 2',
            },
        ],
    }];

console.log(ul(items2));
