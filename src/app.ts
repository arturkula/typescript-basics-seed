const coupon: string = 'pizza25';

function normalizeCoupon(code: string): string {
    return code.toUpperCase();
}

const couponMessage = `Final coupon is ${normalizeCoupon(coupon)}`;

console.log(couponMessage);
