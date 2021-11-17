// 1.Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц.
//     Правила:
// -Яйца варить 5 минут
// -Вместительность емкости не более 5 яиц одновременно
//
function getCookingTime (eggsAmount) {
        if (typeof eggsAmount !== 'number' || !isFinite(eggsAmount) || !Number.isInteger(eggsAmount) || (eggsAmount < 0)) {
             return;
        }
        if  (eggsAmount === 0){
             return 0;
        }
        return (Math.ceil((eggsAmount/5))*5);
}

// 2.Получая массив чисел. Все они либо нечетные, либо четные, кроме одного. Тебе нужно его найти.

    function getNumberEven(array) {
      if (!Array.isArray(array)){
        return;
      }
      const result = array.find(number => number % 2 == 0);
        return result;
    }

function getNumberOdd(array) {
    if (!Array.isArray(array)){
        return;
    }
    const result = array.find(number => number % 2 !== 0);
    return result;
}

// 3. Принимая массив объектов и случайную строку. У объектов может быть ключ: «title» с разными значениями. Создайте алгоритм, который
// фильтрует массив, заданный как первый параметр, и возвращает массив объектов, которые содержат в своих заголовках заданную строку
// в качестве второго параметра (без учета регистра).

function findTitle(array,string) {
    if (Array.isArray(array) && typeof string === 'string') {
        string = string.toLowerCase();
        return array.filter(({title = ''}) => title.toLowerCase().includes(string));
    }
}
const arrayOfObjects = [{title: 'Some title'},
    {title: 'I like JS!'},
    {user: 'This obj doesnt have key title js'},
    {title: 'Js - is the best!'}];


// 4. Принимая строку, ваша функция должна вернуть обьект, в котором
// ключи – символы строки, значение – количество повторений символов в
// строке
function countCharacters(string) {
    if (typeof string !== 'string' && string.length === 0) {
        return;
    }
    string = string.split('');

    const result = string.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;

        return acc;
    }, {});

    return("result: ", result);
};


// 5. Принимая число, ваша функция должна найти следующий положительный палиндром большего размера.
//   Палиндром - это слово, фраза, число или другая последовательность символов, которая читается так же, как вперед и назад, например,
// «мадам».
function getNextPalindrome(number) {
    if (typeof number !== 'number' || !isFinite(number)) {
    return
    }
    let result = number+1;
    while (result.toString() !== result.toString().split('').reverse().join('') || result < 10) {
        result++;
    }
    return result;

}