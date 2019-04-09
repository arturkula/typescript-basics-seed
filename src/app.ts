// run in console with:
// clear; "running tsc:"; tsc; ""; "running node:"; ""; node .\dist\app.js; "";

let sumOrder: (price: number, quantity?: number) => number;

sumOrder = (x, y = 1): number => x * y;

const sum = sumOrder(25, 5);

console.debug(`total sum: ${sum}`);
