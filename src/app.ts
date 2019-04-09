// run in console with:
// clear; "running tsc:"; tsc; ""; "running node:"; ""; node .\dist\app.js; "";

let sumOrder: (price: number, quantity: number) => number;

sumOrder = (x, y): number => x * y;

const sum = sumOrder(25, 2);

console.debug(`total sum: ${sum}`);
