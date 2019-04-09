// run in console with:
// clear; "running tsc:"; tsc; ""; "running node:"; ""; node .\dist\app.js; "";

let pizzaSize: number = 1;

function selectSize(size: 1 | 2 | 3): void {
    pizzaSize = size;
}

selectSize(3);

console.debug(`pizza size: ${pizzaSize}`);
