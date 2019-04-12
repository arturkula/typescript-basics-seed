// run in console with: clear; "running tsc:"; tsc; ""; "running node:"; ""; node .\dist\app.js; "";

class Coupon {
    public static allowed = ['Pepperoni', 'Blazing Inferno'];

    public static create(percentage: number) {
        return `PIZZA_RESTAURANT_${percentage}`;
    }
}

console.debug(Coupon.create(25));
