// 1. Новый фильм &quot;Как натренировать своего дракона” только
// выпустили! В кассах кинотеатра много людей, стоящих в
// огромную очередь. У каждого из них есть банкнота в 100, 50 или
// 25 долларов. Билет на «Бэтмен против Супермена: На заре
// справедливости» стоит 25 долларов. Вася в настоящее время
// работает клерком. Он хочет продать билет каждому человеку в
// этой очереди. Может ли Вася продать каждому билет и отдать
// сдачу, если у него изначально нет денег и он продает билеты
// строго в том порядке, в котором люди следуют в очереди?
//     Верните YES, если Вася может продать каждому билет и отдать
// сдачу. В противном случае верните NO. Может ли Вася продать
// каждому билет и отдать сдачу?
//     Условия:
// * принимает массив из очереди людей
// * возвращает строку
function tikets(person) {
    if (!Array.isArray(person)) return 'No';
    if (person.length === 0) return 'No';

    let cashbox = {'25': 0, '50': 0, '100': 0};
    for (let i=0; i<person.length; i++) {
        if (person[i] === 25) {
            cashbox['25'] += 1;
        }
        if (person[i] === 50) {
            if (cashbox['25'] >= 1) {
                cashbox['25'] -=1;
                cashbox['50'] += 1;
            } else {
                return "No";
            }
        }
        if (person[i] === 100) {
            if (cashbox['25'] >= 1 && cashbox['50'] >= 1) {
                cashbox['25'] -= 1;
                cashbox['50'] -= 1;
                cashbox['100'] += 1;
            } else if (cashbox['25'] >= 3) {
                cashbox['25'] -= 3;
            } else {
                return "No";
            }
        }   return "Yes";
    }
 }
 //
// 2.Напишите функцию, которая получает два бесконечных числа в
// виде строк. Вы должны вернуть результат суммы этих двух чисел
// в виде строки. Математическая работа с этими двумя числами
// недоступна. Не используйте BigInt.
// getSum(‘123’, ‘324’) => ‘447’
// getSum(‘111111111111111111111111111111111111111111111111111’,
// ’23333333333333333333333333333333333333333333333333’)
// -&gt; ‘3444444.......4444444’
function getSum(arg1,arg2) {
    if (typeof arg1 !== 'string' || typeof arg2 !== 'string') {
        return;
    }
    let length;
    arg1 = arg1.split('').reverse().map(Number);
    arg2 = arg2.split('').reverse().map(Number);
    let result = [];
    if (arg1.length > arg2.length) {
        length = arg1.length - arg2.length;
        for (let j = 0; j < length; j++) {
            arg2.push(0);
        }
    }
    if (arg2.length > arg1.length) {
        length = arg2.length- arg1.length;
        for (let k=0; k < length; k++) {
             arg1.push(0);
        }
    }
         for (let i = 0; i < arg1.length; i++) {
             let sumtwonum = 0;
             sumtwonum = (arg1[i]) + (arg2[i]);
             if (sumtwonum < 10) {
                 result.push(sumtwonum);
             } else if (sumtwonum > 9) {
                 sumtwonum = (arg1[i]) + (arg2[i]) - 10;
                 result.push(sumtwonum);
                 arg1[i+1] += 1;
             }
         }
        return result.reverse().join('');
}
//3. Создайте функцию, которая получает два аргумента: первый -
// это массив объектов, второй - строка (имя автора). Ваша
// функция должна возвращать количество сообщений с автором
// из аргумента функции и комментариев с тем же автором. Пример
// массива:
        const listOfPosts2 = [{id: 1,
                       post: 'some post1',
                         title: 'title 1',
                         author: 'Ivanov',
                         comments: [{id: 1.1,
                                     comment: 'some comment1',
                                     title: 'title 1',
                                     author: 'Rimus'},
                                    {id: 1.2,
                                     comment: 'comment2',
                                     title: 'title 2',
                                     author: 'Uncle'}]
                         },
                         {id: 2,
                          post: 'some post2',
                          title: 'title 2',
                          author: 'Ivanov',
                          comments: [{id: 1.1,
                                      comment: 'some comment1',
                                      title: 'title 1',
                                      author: 'Rimus'},
                                     {id: 1.2,
                                      comment: 'some comment2',
                                      title: 'title 2',
                                      author: 'Uncle'},
                                     {id: 1.3,
                                      comment: 'some comment3',
                                      title: 'title 3',
                                      author: 'Rimus'}]
                          },
                          {id: 3,
                           post: 'some post3',
                           title: 'title 3',
                           author: 'Rimus'},
                          {id: 4,
                           post: 'some post4',
                           title: 'title 4',
                           author: 'Uncle'}]
function getSumAuthorAndPosts(array, name) {
    if (Array.isArray(array) && typeof name === 'string') {
      let result = {post:0, comment:0};
        array.forEach(element => {
            if (element.author === name && element.post) {
                result.post += 1;
            }

            if (element.comments) {
                element.comments.forEach(item => {
                    if (item.author === name && item.comment) {
                        result.comment += 1;
                    }
                });
            }

        })
    return result;
    }
}
 // console.log(getSumAuthorAndPosts(listOfPosts2, 'Uncle'))
// // console.log(getSumAuthorAndPosts(listOfPosts2, 1))
// // 4.Напишите функцию кеш
const concatFunc = (arg1, arg2) => {
    return arg1 + arg2;
};
function cache(concatFunc) {
    if (typeof concatFunc !== 'function') {
        return;
    }
    const getCache = {};
    return function (arg1, arg2) {
        if (getCache[arg1] && getCache[arg1][arg2]) {
           return getCache[arg1][arg2];
        }
        if (!(arg1 in getCache)) {
            getCache[arg1] = {
                [arg2]: concatFunc(arg1, arg2)
            }
        } else {
            getCache[arg1][arg2] = concatFunc(arg1, arg2);
        }
        return getCache[arg1][arg2];
    };
 }
const cachedFunc = cache(concatFunc);
console.log(concatFunc([],[]))
// // console.log(cachedFunc(concatFunc('foo', 'bar')));
