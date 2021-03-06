//1.dog breed big O: O(1)
//2. even or odd:

// function isEven(value) {
//     if (value % 2 === 0) {
//         return true;
//     }
//     else
//         return false;
//     }
// }

//O(1)

//3.Are you here?
// function areYouHere(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         const el1 = arr1[i];
//         for (let j = 0; j < arr2.length; j++) {
//             const el2 = arr2[j];
//             if (el1 === el2) return true;
//         }
//     }
//     return false;
// }

//O(n2)

//4.Doubler
// function doubleArrayValues(array) {
//     for (let i = 0; i < array.length; i++) {
//         array[i] *= 2;
//     }
//     return array;
// }

//O(n)

//5.Naive search
// function naiveSearch(array, item) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             return i;
//         }
//     }
// }
//O(n)

//6.Creating Pairs

// const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'a', 'b', 'c', 'd', 'e', 'f', 'a', 'b', 'c', 'd', 'e', 'f', 'a', 'b', 'c', 'd', 'e', 'f']
// function createPairs(arr) {
//     let counter = 0
//     for (let i = 0; i < arr.length; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             console.log(arr[i] + ", " +  arr[j] );
//             counter++
//         }
//     }
//     console.log(counter)
//     console.log(arr.length)
// }
// createPairs(arr)

//O(2n)

// 7. Compute the sequence

// function compute(num) {
//     let result = [];
//     for (let i = 1; i <= num; i++) {

//         if (i === 1) {
//             result.push(0);
//         }
//         else if (i === 2) {
//             result.push(1);
//         }
//         else {
//             result.push(result[i - 2] + result[i - 3]);
//         }
//     }
//     return result;
// }
// console.log(compute(25))
// what does this do? it writes the fibbonacci sequence up to the nth number.
//O(n)

//8. An efficient search

// function efficientSearch(array, item) {
//     let minIndex = 0;
//     let maxIndex = array.length - 1;
//     let currentIndex;
//     let currentElement;

//     while (minIndex <= maxIndex) {
//         currentIndex = Math.floor((minIndex + maxIndex) / 2);
//         currentElement = array[currentIndex];

//         if (currentElement < item) {
//             minIndex = currentIndex + 1;
//         }
//         else if (currentElement > item) {
//             maxIndex = currentIndex - 1;
//         }
//         else {
//             return currentIndex;
//         }
//     }
//     return -1;
// }

//O(log(n))

//9. Random element

// function findRandomElement(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }

// O(1) it's constant

// 10. What Am I?

// function isWhat(n) {
//     if (n < 2 || n % 1 !== 0) {
//         return false;

//     }
//     for (let i = 2; i < n; ++i) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }

//O(n)

// 11. Tower of Hanoi

// function hanoi(disc,a,b,c) {
//     if(disc > 0) {
//         hanoi(disc -1, a, c, b);
//         console.log('Move disc ' +disc+' from '+a+' to '+c);

//         hanoi(disc -1, b, a, c);
//     }
// }
// hanoi(3, 'a', 'b', 'c');

//question one sheep
// function sheep(num) {
//     for(let i = num; i > 0; i--) {
//        console.log(i + ': Another sheep jumps over the fence')
//     }
//     console.log('All sheep jumped overe the fence')
// }
// sheep(8)
//O(n)

//question 2 power calculator
// function powerCalculator(base, exp) {
//     if(exp === 0 ){
//         console.log(1)
//     }
//     let count = base
//     for(let i = 1; i < exp; i++) {
//         count = count * base;
//     }

//     console.log(count)
// }
// powerCalculator(10, 3)

//O(n)

//question 3 reverse string
// function reverseStr(str) {
//   if (str.length <= 1) {
//     console.log(str);
//   }
//   let newStr = "";
//   for (let i = str.length; i >= 0; i--) {
//     newStr = newStr + str.charAt(i);
//   }
//   console.log(newStr);
// }
// reverseStr("hello");
//O(n)

//question 4 triangles

// function triangles(n) {
//   let total = 0;
//   for (let i = n; i >= 0; i--) {
//     total += i;
//   }
//   console.log(total);
// }
// triangles(5);
//O(n)

//question 5 string split
// function stringSplit(str, sep) {
//   let newArr = [];
//   let index = -1;
//   for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) === sep) {
//       newArr.push(str.slice(index + 1, i));
//       index = i;
//     }
//   }
//   newArr.push(str.slice(index + 1, str.length));
//   console.log(newArr);
// }
// stringSplit("20/30/40", "/");
//O(n)

// 6.Fibbonacci
// function looping(n) {
//     var a = 0, b = 1, f = 0;
//     console.log(a)
//     console.log(b)
//     for(var i = 0; i <= n; i++) {
//         f = a + b;
//         a = b;
//         b = f;
//         console.log(f)
//     }
// };
// looping(15)

// O(n)

//7.Factoral
// function factoral(num) {
//   if (num === 1) {
//     return num;
//   }
//   let total = 1
//   for(let i = num; i>0; i--) {
//     total *= i;
//   }
//   console.log(total)
// }
// factoral(10)

