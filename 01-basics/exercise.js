// Practice file - my own products and prices

const productName = "Backpack";
const price = 320;
let quantity = 2;
quantity = 3;

console.log("Product:", productName);
console.log("Price:", price);
console.log("Quantity:", quantity);

// types
console.log("typeof productName:", typeof productName);
console.log("typeof price:", typeof price);
console.log("typeof isOpen:", typeof true);

// template literals
const label = `${productName} costs ${price} EGP`;
console.log("Label:", label);
console.log(`Total for ${quantity}: ${price * quantity} EGP`);

// comparisons
const expensive = price > 100;
console.log("expensive:", expensive);

// if / else
if (price > 100) {
  console.log("This product is expensive");
} else {
  console.log("This product is affordable");
}

// else if chain
const stockCount = 7;
if (stockCount === 0) {
  console.log("Out of stock");
} else if (stockCount < 10) {
  console.log("Low stock");
} else {
  console.log("In stock");
}

// ? : form
const verdict = price > 100 ? "Expensive" : "Affordable";
console.log("verdict:", verdict);

// return
function shipping(total) {
  if (total > 500) {
    return 0;
  }
  return 50;
}
console.log("Shipping on 700 EGP:", shipping(700));
console.log("Shipping on 120 EGP:", shipping(120));