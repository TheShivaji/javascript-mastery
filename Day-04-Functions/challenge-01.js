// Challenge Name: Discount Price Calculator

let discountPrice = 10;
const productPrice = function (price) {
  return price >= 100 && price <= 500 ? price * discountPrice / 100 : price * 20 / 100;
};

const prices = [80, 150, 600];
const discountProductPrice = [productPrice(prices[0]), productPrice(prices[1]), productPrice(prices[2])];

const finalPrice = [prices[0] - discountProductPrice[0],
prices[1] - discountProductPrice[1],
prices[2] - discountProductPrice[2]];

console.log(finalPrice);
