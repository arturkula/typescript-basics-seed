// run in console with:
// clear; "running tsc:"; tsc; ""; "running node:"; ""; node .\dist\app.js; "";

interface IPizza {
    name: string;
    sizes: string[];
    getAvailableSizes(): string[];
}

let pizza: IPizza;

function createPizza(name: string, sizes: string[]): IPizza {
    return {
        name,
        sizes,
        getAvailableSizes() {
            return this.sizes;
        },
    };
}

pizza = createPizza('Pepperoni', ['small', 'medium']);

console.debug(pizza);
