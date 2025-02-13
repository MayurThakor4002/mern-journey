// array reference 

let num1 = 123;
let num2 = 123;
let str1 = "hello";
let str2 = "hello";

console.log(num1 == num2);  // true
console.log(str1 == str2);  // true

let arr1 = [1];
let arr2 = [1];

console.log(arr1 == arr2);  // false (here in array, check addrress in memory and both have different address)

let str = ['a','b','c'];
let strCopy = str;

// now, here we assigned address of str array to strCopy array. now when we changes str or strCopy array apply change on both arrays

str.push('d');
console.log(str);   // [ 'a', 'b', 'c', 'd' ]
console.log(strCopy);   // [ 'a', 'b', 'c', 'd' ]

strCopy.splice(1,1);
console.log(str);  // [ 'a', 'c', 'd' ]
console.log(strCopy);   //[ 'a', 'c', 'd' ]

str.shift();
console.log(str);   // [ 'c', 'd' ]
console.log(strCopy);   // [ 'c', 'd' ]

strCopy.unshift(10);
console.log(str);   // [ 10, 'c', 'd' ]
console.log(strCopy);   // [ 10, 'c', 'd' ]

console.log(str == strCopy);    // true

//-----------------------------------------------

// here, we create two array with different addrerss in memory, So we can't see changes in both Array

let arr = [1,2,3];
let arrCopy = [1,2,3];

console.log(arr);   // [ 1, 2, 3 ]
console.log(arrCopy);   // [ 1, 2, 3 ]

arr.push(4);
console.log(arr);  // [ 1, 2, 3, 4]
console.log(arrCopy);   // [ 1, 2, 3 ]

arrCopy.splice(0,1);
console.log(arrCopy);   // [ 2, 3 ]
console.log(arr);       // [ 1, 2, 3, 4 ]


console.log(arr == arrCopy);    // false


// constant Array

const array = [1,2,3,4,5,6];

console.log(array.push(7)); // 7
console.log(array); // [ 1, 2, 3, 4, 5, 6, 7]
console.log(array.splice(2,5,9,8,7));   // [ 3, 4, 5, 6, 7 ]
console.log(array);     // [ 1, 2, 9, 8, 7 ]

// after declarre const we can't do below 1 and 2(error show)
// array = [4,6,7,8,3]; // 1
// console.log(array);
// array = arr; // 2
// console.log(array);


// Nested Arrays

let nums = [ [1,2,3], [3,4], [5,6]];

console.log(nums);          //[ [ 1, 2, 3 ], [ 3, 4 ], [ 5, 6 ] ]
console.log(nums.length);   // 3
console.log(nums[0]);       //[ 1, 2, 3 ]
console.log(nums[0][2]);    // 3
console.log(nums[2][4]);    //undefiend

// PrQ. 

let game = [['x',null,0], [null,'x',null], [0,null,'x']];

console.log(game);

game[0][1] = 0;
game[1][1] = null; 

console.log(game);