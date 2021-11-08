II 1.Найти сумму четных чисел и их количество в диапазоне от 1 до 99
let sum=0;
let counter=0;
for (let i=1; i<99; i+=2) {
    sum+=i;
    counter++;
}
console.log(sum);
console.log(counter);

2. Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
function isSimple (num) {
for (let i=2; i<num; i++) {
       if (num%i===0) {
           return false;
       }
   } return num>1;
}
console.log("109", isSimple(109));

3. Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)
function SqRootSeq(num) {
   for (let i=1; ; i++ ) {
       let a = i * i;
       if (num == a) {
           return i;
       } if (num < a) {
           return i - 1;
       }
   }
}
console.log(SqRootSeq(225))

function SqRootSeq(a) {
   let min = 1;
   let max = a;
   let prev = 0;
   for (;;)     {
       let mid = (min+max)/2;
       if (prev==mid) {
           return Math.round(mid);
       }
       let q=mid*mid;
       if (a==q) {
           return Math.round(mid);
       }
       if (a<q) {
           max=mid;
       } else
           min = mid;
       prev = mid;
   }
}
console.log(SqRootSeq(532))

// 4. Вычислить факториал числа n. n! = 1*2*…*n-1*n;
function inputNumber(inpNumber) {
   let total = 1;
   for ( let i = 0; i<inpNumber; i++){
    total = total * (inpNumber - i);
   }
    return total;
}
console.log(inputNumber(5))


5. Посчитать сумму цифр заданного числа
function digitSum(y) {
    let sum = 0, x = String(y);
    for (let i = 0; i < x.length; i++) {
        sum += Number(x[i]);
    }
    return(sum)
} console.log(digitSum(245))


6. Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.
function mirrorNum(value) {
  let b, sum=0;
  while(value > 0) {
    b=value%10;
    sum=sum*10+b;
    value = parseInt(value/10);
  }
  return sum;
}
console.log(mirrorNum(52));
