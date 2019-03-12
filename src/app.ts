// run in console with:
// clear; "running tsc:"; tsc; ""; "running node:"; ""; node .\dist\app.js; "";

let coupon: string | null = 'pizza25';

function removeCoupon() {
    coupon = null;
}

console.debug(coupon);

removeCoupon();

console.debug(coupon);
