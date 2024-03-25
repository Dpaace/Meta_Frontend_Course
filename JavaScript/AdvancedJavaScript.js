// Some built-in methods

// Object.keys()
// Object.values()
// Object.entries()
// All these 3 build in methods return an array

// const car1 = {
//         speed: 200,
//         color: "red"
// }

// console.log(Object.keys(car1));
// console.log(Object.values(car1));
// console.log(Object.entries(car1));


// var clothingItem  = {
//     price : 50,
//     color : "Aqua",
//     material : "cotton", 
//     season : "autumn"
// }

// for ( const key of Object.keys(clothingItem)) {
//     console.log(key, ":", clothingItem[key]);
// }
 
// Advanced methods that can be used on arrays 

// forEach() method
const fruits = ["kiwi", "mango", "pear", "apple", "orange"];

function appendIndex(fruit, index) {
    console.log(`${index}.${fruit}`);
}

fruits.forEach(appendIndex);



// filter() method
const nums = [10, 20, 30, 40, 50, 60];

var val = nums.filter(function (num) {
    return num > 30;
})

console.log(val);

// map() method

var div = nums.map( function(num) {
    return num/10;
})

console.log(div);