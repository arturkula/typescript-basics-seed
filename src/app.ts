// run in console with:
// clear; "running tsc:"; tsc; ""; "running node:"; ""; node .\dist\app.js; "";

type Pizza = { name: string; toppings: number };

const pizza: Pizza = { name: 'Blazing inferno', toppings: 5 };

const serialized = JSON.stringify(pizza);

function getNameFromJSON(obj: string): string {
    return (JSON.parse(obj) as Pizza).name;
}

console.debug(getNameFromJSON(serialized));
