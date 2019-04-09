// run in console with:
// clear; "running tsc:"; tsc; ""; "running node:"; ""; node .\dist\app.js; "";

let pizza: { name: string; price: number; getName(): string } = {
    name: 'Plain Old Pepperoni',
    price: 20,
    getName() {
        return pizza.name;
    },
};

console.debug(`pizza: ${pizza.getName()}`);
