// Arrays

const fruits = ['apple', 'banana', 'cherry'];
// fruits.push("Kiwi"); // Adds element at the end
// fruits.unshift("Mango"); // Adds element at the beginning

// fruits.pop(); // Removes last element
// fruits.shift(); // Removes first element

// delete fruits[1]; // Deletes element at index 1, leaves undefined hole, dont use


// console.log(fruits[0]); // Console log given index

// console.log(fruits.length); // Gives the number of elements in the array

for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i]);
}

// console.log(fruits.toString()); // Converts array to string

// console.log(fruits.join(' - ')); // Joins array elements into a string with a specified separator

// fruits.splice(0, 2); // Removes elements starting from index 0, removes 2 elements

// console.log(fruits);

const part = fruits.slice(0, 1); // Creates a new array from index 0 to 1 (not including 1)

console.log(part);

const a = [1, 2, 3];
const b = [4, 5, 6];

const merged = [...a, ...b]; // Merges two arrays using spread operator

const c = a.concat(b); // Merges two arrays

const indexOfApple = fruits.indexOf('apple'); // Finds index of 'apple' in the array

const includesCherry = fruits.includes('cherry'); // Checks if 'cherry' is in the array, returns true or false

const reversed = c.reverse(); // Reverses the array

// toReversed() creates copy, reverse() changes original array

console.log(c);

const sortAlphabetically = fruits.sort(); // Sorts the array alphabetically

// toSorted() creates copy, sort() changes original array


const w = [40, 100, 1, 5, 25, 10];

w.forEach(function (value, index, array) {
    console.log(value, index);
}); // Executes a provided function once for each array element

const doubled = w.map(value => value * 2); // Map returns new array, forEach does not

console.log(doubled)

const oddNumbers = w.filter(value => value % 2 !== 0); // Filters array based on condition

const isAllOdd = w.every(value => value % 2 !== 0); // Checks if all elements meet the condition

console.log(isAllOdd)


