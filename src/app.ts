// run in console with: clear; "running tsc:"; tsc; ""; "running node:"; ""; node .\dist\app.js; "";

class Pizza {
    private name: string;
    private toppings: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('pepperoni');

pizza.addTopping('pepperoni');

console.debug(pizza);
