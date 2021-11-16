// // 1. Если а – четное посчитать а*б, иначе а+б
function sumNum(a,b) {
    if (a % 2 === 0) {
        return a*b;
    } else {
        return a+b;
    }
}

// // 2. Определить какой четверти принадлежит точка с координатами (х,у)
function guarterNum(x,y) {
    switch (true) {
        case (x > 0 && y > 0):
            return ('first Quarter');
            break;
        case (x < 0 && y > 0):
            return ('second Quarter');
            break;
        case (x < 0 && y < 0):
            return ('third Quarter');
            break;
        case (x > 0 && y < 0):
            return ('fourth Quarter');
            break;
        default:
            break;
    }
}
// // 3. Найти суммы только положительных из трех чисел
function sumPositive(a,b,c) {
    let sum=0;
    switch (true) {
        case ( a>0 && b>0 && c>0):
            sum = a+b+c;
            break;
        case ( a<=0 && b>0 && c>0):
            sum = b+c;
            break;
        case ( a>0 && b<=0 && c>0):
            sum = a+c;
            break;
        case ( a>0 && b>0 && c<=0):
            sum = a+b;
            break;
        case ( a>0 && b<=0 && c<=0):
            sum = a;
            break;
        case ( a<=0 && b<=0 && c>0):
            sum = c;
            break;
        case ( a<=0 && b>0 && c<=0):
            sum = b;
            break;
        default:
            break;
    }
    return sum;
}
// 4. Посчитать выражение (макс(а*б*с, а+б+с))+3
function maxValue(a,b,c) {
    const sumNum=a+b+c;
    const multiplicationNum=a*b*c;
    if (multiplicationNum>sumNum) {
        return multiplicationNum+3;
    } else if (multiplicationNum<sumNum) {
        return sumNum + 3;
    }
}
// console.log(maxValue (-3,-2, 3));
//
// // 5.Написать программу определения оценки студента по его рейтингу, на основе следующих правил
function gradingStud(rating) {
    let result = '';
    switch (true) {
        case (rating > 0 && rating < 20):
            result = 'grade F';
            break;
        case (rating > 19 && rating < 40):
            result = 'grade E';
            break;
        case (rating > 39 && rating < 60):
            result = 'grade D';
            break;
        case (rating > 59 && rating < 75):
            result = 'grade C';
            break;
        case (rating > 74 && rating < 90):
            result = 'grade B';
            break;
        case (rating > 89 && rating < 101):
            result = 'grade A';
        default:
            break;
    } return  result;
};
//
//     console.log(gradingStud(80));