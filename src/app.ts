// run in console with:
// clear; "running tsc:"; tsc; ""; "running node:"; ""; node .\dist\app.js; "";

interface Pizza {
    name: string;
    sizes: string[];
}

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
    return {
        name,
        sizes,
    };
}

pizza = createPizza('Pepperoni', ['small', 'medium']);

console.debug(pizza);
