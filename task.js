// CUSTOMER DATA
const orders = [
  { id: 1, customer: "Alice", items: ["laptop", "mouse"], total: 1200, status: "pending" },
  { id: 2, customer: "Bob", items: ["phone"], total: 800, status: "completed" },
  { id: 3, customer: "Charlie", items: ["keyboard", "mouse"], total: 150, status: "pending" },
  { id: 4, customer: "David", items: ["monitor"], total: 300, status: "completed" },
  { id: 5, customer: "Eve", items: ["tablet"], total: 400, status: "pending" },
];

// TASKS

// BASIC OPERATIONS
// 1. Add a new order:
// const newOrder={
//   id:6,
//   customer:"Gulcin",
//   items:["phone"],
//   total:2500,
//   status:"completed"}
// orders.push(newOrder);
// console.log(orders[5]);

// 2. The order with ID 3 got canceled.
// Use splice() or filter() to remove it from the list.

// orders.splice(2,1);
// console.log(orders)

// const Neworders = orders.filter(orders=>orders.id!= 3);
// console.log(Neworders)


// 3. Display the total number of orders.
// console.log(orders.length);

// SEARCHING AND FILTERING
// 1. Find the first completed order.

const Neworders = orders.filter(orders=>orders.status= "completed");
console.log(Neworders[0])
// 2. Create a new array "pendingOrders" that contains only orders with status "pending".

const pendingOrders=orders.filter(orders=>orders.status= "pending");
console.log(pendingOrders)
// 3. Create a list of customers who bought a "mouse".
// → Use filter() + includes() on items.
const newArray=orders.filter(orders=>orders.items.includes("mouse"));
  console.log(newArray);


// CALCULATIONS
// 1. Get the total sales amount (sum of all totals).
let sum=0;
for(let i=0;i<orders.length;i++){
  sum+=orders[i].total
  
}
console.log(sum);

// 2. Check if all orders are completed.
const isCompleted=orders.every(orders=>orders.status=="completed");
if(isCompleted==true){}

// TRANSFORMING AND REPORTING
// 1. Create a new array "orderSummaries" that looks like:
// ["Alice ordered 2 items ($1200)", "Bob ordered 1 item ($800)", ...]
// → Use map()
const orderSummaries=orders.map(value=>value.customer +"ordered"+value.items.length +" items"+"( $"+value.total+")");
console.log(orderSummaries);

// 2. Sort all orders by total amount (highest to lowest).

// 3. Create a string of all customer names separated by commas.
for(let i=0;i<orders.length;i++){
  console.log(orders[i].customer+", ")
}

// REAL LIFE USE
// 1. You received a refund for all orders under $200.
// Use filter() to find them and forEach() to log:
// "Refund issued for <customer>".

const refusingArray= orders.filter(value=>value.total<=200);
refusingArray.forEach(function(value,index,array){
  console.log("Refund issued for "+value.customer);
})
