// array 9 march

// function countString (arr){
//     let count = 0;
//     let tempArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (typeof(element)==="string") count++;
//         if (typeof(element)==="string") tempArr.push(element)
//     }
//     return tempArr;
// }

// const result = countString(["a", "b", "c", 1, 3, 5]);
// console.log(result);

let fruits = ['apple', 'banana', 'orange', 'kiwi']

fruits.pop();
console.log(fruits)
console.log(fruits.pop())
console.log(fruits)
console.log(fruits.push('strawberry'))
console.log(fruits.push('melon'))
console.log(fruits)

// output of this code
// Array(4)0: "apple"1: "banana"2: "strawberry"3: "melon"length: 4[[Prototype]]: Array(0)
// for.js:55 orange
// for.js:56 Array(4)
// for.js:57 3
// for.js:58 4
// for.js:59 Array(4)0: "apple"1: "banana"2: "strawberry"3: "melon"length: 4[[Prototype]]: Array(0)