// Challenge Name: Delivery Charge Calculator

let deliveryCharge;
const calcDeliveryCharge = (order) => {
  return order >= 200 && order <= 800 ?
    (deliveryCharge = order * 5 / 100) : (deliveryCharge = order * 12 / 100);
};

const orders = [150, 400, 950];
const delCharge = [calcDeliveryCharge(orders[0]), calcDeliveryCharge(orders[1]), calcDeliveryCharge(orders[2])];

const finalPayment = [orders[0] + delCharge[0], orders[1] + delCharge[1], orders[2] + delCharge[2]];

console.log(finalPayment);
