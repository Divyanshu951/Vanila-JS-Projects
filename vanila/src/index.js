const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

let nextOrderId = 1;
let cashInRegister = 100;
const orderQueue = [];

function addNewPizza(pizzaObj) {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName) {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  cashInRegister += selectedPizza.price;
  const newOrder = { id: nextOrderId, pizza: selectedPizza, status: "ordered" };
  nextOrderId++;
  orderQueue.push(newOrder);
  return newOrder;
}

/**
 * Challenge: write another utility function, completeOrder, that takes an orderId as a parameter
 * finds the correct order in the orderQueue, and marks its status as "completed". For good measure,
 * return the found order from the function.
 *
 * Note: you'll need to ensure that we're adding IDs to our orders when we create new orders. You can use a global `nextOrderId` variable and increment it every time a new order is created to simulate real IDs being managed for us by a database.
 */

placeOrder("Margherita");
// console.log(orderQueue);

function completeOrder(orderId) {
  const selectedOrder = orderQueue.find((pizzaObj) => pizzaObj.id === orderId);
  selectedOrder.status = "completed";
  console.log(selectedOrder);
}

completeOrder(1);
