// III. 1, 2 Найти минимальный, максимальный элемент массива
const num = [20, 34, 2, -15, -485];
let min;
min = num[0];
for ( let i = 1; i < num.length; i++) {
    if (min > num[i]) {
        min = num[i];
    }
}
console.log(min);
//
// const num = [20, 34, 2, -15, -485];
// let max;
// max = num[0];
// for ( let i = 1; i < matrix.length; i++) {
//     if (max < num[i]) {
//         max = num[i];
//     }
// }
// console.log(max)
//
// 3, 4 Найти индекс минимального, максимальный элемента массива
// const arr=[4,-10,24,3,2,-2,19];
// let max = arr[0];
// let maxIndex = 0;
// let min = arr[0];
// let minIndex = 0;
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         maxIndex = i;
//         max = arr[i];
//     }
// }
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         minIndex = i;
//         min = arr[i];
//     }
// }
// console.log(maxIndex);
// console.log(minIndex);
//
//
// 5. Посчитать сумму элементов массива с нечетными индексами
// const numStr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
// const sumEvens = (numStr) => {
//     let sum = 0;
//     for (let i = 0; i < numStr.length; i++) {
//         if (i % 2 !== 0){
//             sum+=numStr[i];
//         }
//     }     return sum;
// }
// console.log(sumEvens(numStr));
//
// 6. Сделать реверс массива (массив в обратном направлении)
// const myArray = ["apple", "pear", "plum"];
// myArray.reverse();
// console.log(myArray)
//
// 7. Посчитать количество нечетных элементов массива
// let dp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// const counEvens = (dp) => {
//     let counter=0;
//     for (let i = 0; i < dp.length; i++) {
//         if (i % 2 == 0){
//         counter++;
//         }
//     }     return counter;
// }
// console.log(counEvens(dp))
//
// 7. Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2
// const arr = [1,456,-33,0,58,-9];
// arr.splice(0,6,0,58,-9,1,456,-33);
// console.log(arr);
//
// const arr = [1,456,-33,0,58,-9];
// [arr[2], arr[5]]  = [arr[5], arr[2]];
// [arr[1], arr[4]]  = [arr[4], arr[1]];
// [arr[0], arr[3]]  = [arr[3], arr[0]];
// console.log(arr)
//
// // 8. Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))
// const arr = [1,456,-33,0,58,-9];
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         let b = false;
//         for (let j = 0; j <arr.length - 1-i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let c = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = c;
//                 b = true;
//             }
//         }
//         if (!b) break;
//     }
//     return arr;
// } console.log(bubbleSort(arr))
//
// const arr = [1,456,-33,0,58,-9];
// const selectionSort = arr => {
//     for (let i = 0; i <arr.length - 1-i; i++) {
//         let indexMin = i;
//         for (let j = i + 1; j < l; j++) {
//             if (arr[indexMin] > arr[j]) {
//                 indexMin = j;
//             }
//         }
//         if (indexMin !== i) {
//             [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
//         }
//     }
//     return arr;
// }; console.log (selectionSort(arr));
// const arr = [1,456,-33,0,58,-9];
// const insertionSort = arr => {
//     for (let i = 1; i<arr.length; i++) {
//         const dn = arr[i];
//         let j = i;
//         while (j > 0 && arr[j - 1] > dn) {
//             arr[j] = arr[j - 1];
//             j--;
//         }
//         arr[j] = dn;
//     }
//     return arr;
// }; console.log(insertionSort(arr));