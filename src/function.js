// 4. 1.Получить строковое название дня недели по номеру дня.
function getWeekDay (data) {
    if (typeof data !== 'number' || !isFinite(data) || !(1 <= data && data <= 7)) {
        return;
    }
    switch (data) {
        case 1: return ('Monday'); break;
        case 2: return ('Tuesday'); break;
        case 3: return ('Wednesday'); break;
        case 4: return ('Thursday'); break;
        case 5: return ('Friday'); break;
        case 6: return ('Saturday'); break;
        case 7: return ('Sunday');break;
        default: break;
    }
}


// 2/ Найти расстояние между двумя точками в двухмерном декартовом пространстве.
function findDistance (x1,x2,y1,y2) {
     if  (typeof x1 === 'number' && typeof y1 === 'number' && typeof y2 === 'number' && typeof x2 === 'number') {
         let result = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
         return Math.round(result);
     } return;
}

// Вводим число(0-999), получаем строку с прописью числа.
function whitNum(num) {
    if (typeof num !== 'number' || !isFinite(num) || !(0 <= num && num <= 999) || num % 1 !== 0) {
        return;
    }
    if (num === 0) return 'null';
    let  hundreds=Math.trunc(num/100);
    let  dozens=(num%100/10);
    let  units=(num%10);
    let  strHundreds='';
    let  strDozens='';
    let  strUnits='';
        if (hundreds>0) {
        switch (hundreds) {
            case 1: strHundreds="Сто "; break;
            case 2: strHundreds="Двести "; break;
            case 3: strHundreds="Триста "; break;
            case 4: strHundreds="Четыреста "; break;
            case 5: strHundreds="Пятсот "; break;
            case 6: strHundreds="Шестьсот "; break;
            case 7: strHundreds="Семьсот "; break;
            case 8: strHundreds="Восемьсот "; break;
            case 9: strHundreds="Девятьсот "; break;
            default:  break;
        }
    } if (dozens>0) {
        if (dozens>=1&&dozens<2) {
            switch (dozens) {
                case 1: strDozens="десять"; break;
                case 1.1: strDozens="одинадцать"; break;
                case 1.2: strDozens="двенадцать"; break;
                case 1.3: strDozens="тринадцать"; break;
                case 1.4: strDozens="четырнадцать"; break;
                case 1.5: strDozens="пятнадцать"; break;
                case 1.6: strDozens="шестнадцать"; break;
                case 1.7: strDozens="семнадцать"; break;
                case 1.8: strDozens="восемнадцать"; break;
                case 1.9: strDozens="девятнадцать"; break;
                default:  break;
            }
        } if (dozens>=2) {
            dozens=Math.trunc(dozens);
            switch (dozens) {
                case 2: strDozens="двадцать "; break;
                case 3: strDozens="тридцать "; break;
                case 4: strDozens="сорок "; break;
                case 5: strDozens="пятдесят "; break;
                case 6: strDozens="шестьдесят "; break;
                case 7: strDozens="Семьдесят "; break;
                case 8: strDozens="Восемьдесят "; break;
                case 9: strDozens="Девяносто "; break;
                default:  break;
            }
        }
    } if (units>0) {
        switch (units) {
            case 1: strUnits="один"; break;
            case 2: strUnits="два"; break;
            case 3: strUnits="три"; break;
            case 4: strUnits="четыре"; break;
            case 5: strUnits="пять"; break;
            case 6: strUnits="шесть"; break;
            case 7: strUnits="семь"; break;
            case 8: strUnits="восемь"; break;
            case 9: strUnits="девять"; break;
            default:  break;
        }
    }   let result= strHundreds+''+strDozens+strUnits
        return result;
  }

//
// Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число

    function getNumberFromString(number) {

        if (typeof number !== 'string') return;
        const numberObject = {
            'one': 1,
            'two': 2,
            'three': 3,
            'four': 4,
            'five': 5,
            'six': 6,
            'seven': 7,
            'eight': 8,
            'nine': 9,
            'ten': 10,
            'eleven': 11,
            'twelve': 12,
            'thirteen': 13,
            'fourteen': 14,
            'fifteen': 15,
            'sixteen': 16,
            'seventeen': 17,
            'eighteen': 18,
            'nineteen': 19,
            'twenty': 20,
            'thirty': 30,
            'forty': 40,
            'fifty': 50,
            'sixty': 60,
            'seventy': 70,
            'eighty': 80,
            'ninety': 90
        }
        const array = [];
        const numWords = number.split(' ').map(i => i.trim());

        numWords.map((i, index) => {

            if (i === 'hundred') {
                array[index - 1] = array[index - 1] * 100;

            }
            if (numberObject.hasOwnProperty(i)) {
                array.push(numberObject[i]);
            }
            return array;
        });
        const result = array.reduce((acc, curr, index) => {
            return acc += curr;
        }, 0);
        return result;
    }
   console.log(getNumberFromString(0));