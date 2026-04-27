"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products = [
    {
        name: "fanny pack",
        price: "30",
        preOrder: "true",
    },
    {
        name: "beanie",
        price: "15",
        preOrder: "false",
    },
    {
        name: "tote bag",
        price: "20",
        preOrder: "false",
    },
    {
        name: "shirt",
        price: "20",
        preOrder: "true",
    },
    {
        name: "hoodie",
        price: "43",
        preOrder: "true",
    },
];
const productName = "fanny pack";
const product = products.find((product) => product.name === productName);
if (product && product.preOrder === "true")
    console.log("we’ll send you a message when it’s on the way");
let shipping;
let taxPercent;
let taxTotal;
let total;
let shippingAddress = "New York";
if (product && Number(product.price) >= 25) {
    console.log("we provide free shipping for this product.");
    shipping = 0;
}
else {
    shipping = Number(product.price);
}
if (shippingAddress.match("New York")) {
    taxPercent = 0.1;
}
else
    taxPercent = 0.05;
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;
console.log(productName);
console.log(shippingAddress);
console.log(Number(product.price));
console.log(taxTotal);
console.log(shipping);
console.log(total);
//# sourceMappingURL=app.js.map