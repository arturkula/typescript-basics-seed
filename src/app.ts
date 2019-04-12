// run in console with: clear; "running tsc:"; tsc; ""; "running node:"; ""; node .\dist\app.js; "";

class Pizza {
    constructor(private name: string, private toppings: string[] = []) {}

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni');

pizza.addTopping('pepperoni');

console.debug(pizza);
