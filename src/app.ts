// run in console with:
// clear; "running tsc:"; tsc; ""; "running node:"; ""; node .\dist\app.js; "";

interface ISizes {
    sizes: string[];
}

interface IPizza extends ISizes {
    name: string;
    toppings?: number;
    getAvailableSizes(): string[];
    [key: number]: string;
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
pizza[1] = 'xyz';
pizza.toppings = 1;

console.debug(pizza);
