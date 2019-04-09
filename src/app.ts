// run in console with:
// clear; "running tsc:"; tsc; ""; "running node:"; ""; node .\dist\app.js; "";

let sumOrder: (price: number, quantity?: number) => number;

sumOrder = (x, y): number => {
    if (y) {
        return x * y;
    }
    return x;
};

const sum = sumOrder(25);

console.debug(`total sum: ${sum}`);
