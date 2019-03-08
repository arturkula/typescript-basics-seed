const pizzaCost = 10;

const pizzaTopiings: number = 5;

function calculatePrice(cost: number, toppings: number): number {
    return cost + 1.5 * toppings;
}

const cost = calculatePrice(pizzaCost, pizzaTopiings);

console.log(`pizza cost: ${cost}`);
