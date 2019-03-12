// run in console with:
// clear; "running tsc:"; tsc; ""; "running node:"; ""; node .\dist\app.js; "";

let selectedTopping: string = 'pepperoni';

function selectTopping(topping: string): void {
    selectedTopping = topping;
}

selectTopping('bacon');

console.debug(selectedTopping);
