const products = [
    'I dont love laptop',
    'I need a laptop',
    'Do you wanna buy a laptop',
    'Whice type of laptop you like',
    'There are lots of laptop in my room',
];
const searching = 'laptop'

// indexOf
const output = [];

for (const product of products) {
    if (product.indexOf(searching) != -1) {
        output.push(product)
    }
}
console.log(output);