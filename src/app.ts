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

// tslint:disable-next-line:max-classes-per-file
class Pizza extends Sizes {
    private readonly toppings: string[] = [];

    constructor(public readonly name: string, public readonly sizes: string[] = []) {
        super(sizes);
    }

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni', ['small', 'medium']);

pizza.addTopping('pepperoni');

console.debug(pizza.name);
