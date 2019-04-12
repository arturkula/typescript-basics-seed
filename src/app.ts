// run in console with: clear; "running tsc:"; tsc; ""; "running node:"; ""; node .\dist\app.js; "";

class Sizes {
    constructor(public sizes: string[]) {}

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    get availableSizes(): string[] {
        return this.sizes;
    }
}

const x = new Sizes(['small', 'medium']);

console.debug(x.availableSizes);

x.availableSizes = ['medium', 'large'];

console.debug(x.availableSizes);

class Pizza {
    constructor(public readonly name: string, private readonly toppings: string[] = []) {}

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni');

pizza.addTopping('pepperoni');

// console.debug(pizza.name);
