// run in console with: clear; "running tsc:"; tsc; ""; "running node:"; ""; node .\dist\app.js; "";

abstract class Sizes {
    constructor(protected sizes: string[]) {}

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

    constructor(public readonly name: string, sizes: string[] = []) {
        super(sizes);
    }

    public updateSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni', ['small', 'medium']);

console.debug(pizza.availableSizes);

pizza.updateSizes(['large']);

console.debug(pizza.availableSizes);
