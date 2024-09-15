const ol = function(items) {
    let insideHTML = '';

    items.forEach((itemObj) => {
        if (itemObj.hasOwnProperty('label')) {
            if (itemObj.hasOwnProperty('children')) {
                insideHTML +=
                    `<li>${itemObj.label}${ol(itemObj['children'])}</li>`;
            } else {
                insideHTML += `<li>${itemObj.label}</li>`;
            }
        }
    });

    return `<ol>${insideHTML}</ol>`;
};

const ul = function(items) {
    let insideHTML = '';

    items.forEach((itemObj) => {
        if (itemObj.hasOwnProperty('label')) {
            if (itemObj.hasOwnProperty('children')) {
                insideHTML +=
                    `<li>${itemObj.label}${ul(itemObj['children'])}</li>`;
            } else {
                insideHTML += `<li>${itemObj.label}</li>`;
            }
        }
    });

    return `<ul>${insideHTML}</ul>`;
};

// Tests
const assert = require('assert');
const expectedResultOl = '<ol><li>Item 1</li><li>Item 2<ol><li>Level 2 of Item 2</li><li>Another level 2</li></ol></li></ol>';
const expectedResultUl = '<ul><li>Item 1</li><li>Item 2<ul><li>Level 2 of Item 2</li><li>Another level 2</li></ul></li></ul>';


const testItemsOl = [{'label': 'Item 1'},
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


try {
    assert.strictEqual(ol(testItemsOl), expectedResultOl);
    console.log('Ol function test passed');
} catch {
    console.log('Ol function test failed');
}


const testItemsUl = [{'label': 'Item 1'},
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


try {
    assert.strictEqual(ul(testItemsUl), expectedResultUl);
    console.log('Ul function test passed');
} catch {
    console.log('Ul function test failed');
}
