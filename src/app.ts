// run in console with:
// clear; "running tsc:"; tsc; ""; "running node:"; ""; node .\dist\app.js; "";

type Size = 'small' | 'medium' | 'large';
type Callback = (size: Size) => void;

let pizzaSize: Size = 'small';

const selectSize: Callback = x => {
    pizzaSize = x;
};

selectSize('medium');

console.debug(pizzaSize);
