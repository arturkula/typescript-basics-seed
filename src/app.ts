const pizzas = [{ name: 'Pepperoni', toppings: ['pepperoni'] }];

const mappedPizzas = pizzas.map(x => x.name.toUpperCase());

console.log(mappedPizzas);

const pizza = {
    name: 'Blazing Inferno',
    getName() {
        console.log(this.name);
    },
};

console.log(pizza.getName());
