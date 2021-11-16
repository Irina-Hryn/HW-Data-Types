// III. 1 Найти минимальный элемент массива
function minimumElement(num) {
   let min = num.length >0 ? num[0] :  null;
    for ( let i = 1; i < num.length; i++) {
        if (min > num[i]) {
            min = num[i];
        }
    } return min;
}
// 2 Найти максимальный элемент массива
function maximumElement(num) {
  let max = num.length >0 ? num[0] :  null;
    for (let i = 1; i < num.length; i++) {
        if (max < num[i]) {
            max = num[i];
        }
    } return max;
}


// 3 Найти индекс минимального элемента массива
function indexMinElement(arr) {
   let min = arr.length > 0 ?arr[0] :0;
   let minIndex = arr.length > 0 ? 0 : null;
      for (let i = 1; i < arr.length; i++) {
           if (arr[i] < min) {
               minIndex = i;
               min = arr[i];
           }
      } return minIndex;
}
// 4 Найти индекс максимального  элемента массива
function indexMaxElement(arr) {
    let max = arr.length > 0 ? arr[0] : 0;
    let maxIndex = arr.length > 0 ? 0 : null;
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
      }  return maxIndex;
}

// 5. Посчитать сумму элементов массива с нечетными индексами

const sumEvens = (numStr) => {
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
        if (i % 2 !== 0){
            sum+=numStr[i];
        }
    }     return sum;
}

//
// 6. Сделать реверс массива (массив в обратном направлении)
function reverse(arr) {
    let anotherArray = [];
    for (let i = arr.length - 1; i >= 0; i--){
        anotherArray.push(arr[i]);
    }
    return anotherArray;
}

// 7. Посчитать количество нечетных элементов массива

const counEvens = (array) => {
    let counter=0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 1 || array[i] % 2 == -1) {
        counter+=1;
        }
    }     return counter;
}
// 8. Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2
    function changeSides(array) {
        if (Array.isArray(array)) {
            const firstPart = array.slice(0, array.length / 2);
            const secondPart = array.slice(array.length / 2, array.length);
            const arrayConcat = secondPart.concat(firstPart);
            return arrayConcat;
        } return;
  }



    //9.	Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))
    function bubbleSort(array) {
        let count = 0;
        for (let i = 0; i < array.length - 1; i++){
            for (let j = 0; j < (array.length - 1) - i; j++) {
                if (array[j] > array[j+1]) [array[j], array[j+1]] = [array[j+1], array[j]];
                count++;
            }
        }
        return array;
    }

function selectionSort(array){
    let count = 0;
    let minValueIndex = 0;
    for (let i = 0; i < array.length - 1; i++){
        minValueIndex = i;
        for (let j = i+1; j < array.length - 1; j++) {

            if (array[minValueIndex] > array[j]){
                minValueIndex = j;
            }
            count++;
        }
        if (minValueIndex !== i) [array[i], array[minValueIndex]] = [array[minValueIndex], array[i]];
    }
    return array;
}
function insertionSort(array){
    let count = 0;
    for (let i = 1; i < array.length; i++) {
        const current = array[i];
        let j = i;
        while (j > 0 && array[j - 1] > current) {
            array[j] = array[j - 1];
            j--;
            count++;
        }
        array[j] = current;
    }
    return array;
} co
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
// } console.log(insertionSort(arr));