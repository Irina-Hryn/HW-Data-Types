// II 1.Найти сумму четных чисел и их количество в диапазоне от 1 до 99
function countEven(number) {
    if (typeof number !== 'number' || !isFinite(number)) return
    let sum = 0;
    let count = 0;
    if (number > 99) number = 99;
    if (number < 1) return;
    for (let i = 1; i <= number; i++) {
        if (!(i % 2)) {
            sum += i;
            count++;
        }
    }  return [sum, count];
}
// 2. Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
function isSimple (num) {
    if (typeof num !== 'number' || !isFinite(num)) {
        return;
    }
     for (let i=2; i<num; i++) {
       if (num%i===0) {
           return false;
       }
   } return true;
}

// 3. Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)
function SqRootSeq(num) {
  if (typeof num !== 'number' || !isFinite(num) || num < 0 || num % 1 !== 0) {
    return;
  }
  if (num === 0) return 0;
   for (let i=1; ; i++ ) {
       let a = i * i;
       if (num == a) {
           return i;
       } if (num < a) {
           return i - 1;
       }
   }
}
// 4. Вычислить факториал числа n. n! = 1*2*…*n-1*n;
function inputNumber(inpNumber) {
    if (typeof inpNumber !== 'number' || !isFinite(inpNumber) || inpNumber < 0 || inpNumber % 1 !== 0) {
        return;
    }
    if (inpNumber === 0) return 1;
    let total = 1;
     for ( let i = 0; i<inpNumber; i++){
     total = total * (inpNumber - i);
     }
    return total;
}
//
// 5. Посчитать сумму цифр заданного числа
function digitSum(number) {
    if (typeof number !== 'number' || !isFinite(number)) return
    if (number < 0) {
        number = number * (-1);
    }
    let sum = 0, x = String(number);
       for (let i = 0; i < x.length; i++) {
        sum += Number(x[i]);
    }
    return(sum)
}


// 6. Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.
function mirrorNum(value) {
    if (typeof value !== 'number' || !isFinite(value)) return
    const reverseNumber = String(Math.abs(value)).split('');
    const length = reverseNumber.length;

    for (let i = 0; i < Math.floor(length / 2); i++) {
        [reverseNumber[i], reverseNumber[length - 1 - i]] = [reverseNumber[length - 1 - i], reverseNumber[i]];
    }
    return value < 0 ? Number(('-' + reverseNumber.join(''))) : Number(reverseNumber.join(''));
}

console.log(mirrorNum(-1000001));
