1. Если а – четное посчитать а*б, иначе а+б
const a=3;
const b=2;
const c=a*b;
const d=a+b;
if (a%2==0) {
    console.log(c);
} else {
    console.log(d);
}

2. Определить какой четверти принадлежит точка с координатами (х,у)
const x=6;
const y=5;
switch (true) {
    case (x>0&&y>0):
        console.log('first Quarter');
        break;
    case (x<0&&y>0):
        console.log('second Quarter');
        break;
    case (x<0&&y<0):
        console.log('third Quarter');
        break;
    case (x>0&&y<0):
        console.log('fourth Quarter');
        break;
    default:
        break;
}

3. Найти суммы только положительных из трех чисел
const a=-1;
const b=2;
const c=10;
let sum=0;
switch (true) {
    case (a>0):
        sum+=a;
    case (b>0):
        sum+=b;
    case (c>0):
        sum+=c;
    default:
        break;
} console.log(sum);
4. Посчитать выражение (макс(а*б*с, а+б+с))+3
const a=1;
const b=5;
const c=2;
const d=a+b+c;
const e=a*b*c;
if (d>e) {
    console.log(d+3);
} else if (d<e) {
    console.log(e+3);
}

// 5.Определить какой четверти принадлежит точка с координатами (х,у)
const rating=100;
switch (true) {
    case (rating>0&&rating<20):
        console.log('grade F');
        break;
    case (rating>19&&rating<40):
        console.log('grade E');
        break;
    case (rating>39&&rating<60):
        console.log('grade D');
        break;
    case (rating>59&&rating<75):
        console.log('grade C');
        break;
    case (rating>74&&rating<90):
        console.log('grade B');
        break;
    case (rating>89&&rating<101):
        console.log('grade A');
        break;
    default:
        break;
}