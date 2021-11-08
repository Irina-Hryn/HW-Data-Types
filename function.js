4. 1.Получить строковое название дня недели по номеру дня.
function getWeekDay (data) {
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
console.log(getWeekDay(2))

2/ Найти расстояние между двумя точками в двухмерном декартовом пространстве.
function findDistance (x1,x2,y1,y2) {
        let result=Math.sqrt((x1-x2)**2+(y1-y2)**2);
    return Math.round(result);
}
console.log(findDistance(4,2,7,9))

Вводим число(0-999), получаем строку с прописью числа.
function whitNum(num) {
    let hundreds=Math.trunc(num/100);
    let dozens=(num%100/10);
    let units=(num%10);
    let strHundreds='';
    let strDozens='';
    let strUnits='';
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
console.log(whitNum(548))

Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число

function receiveNum(a) {
   let b=a.split(' ');
   b.reverse();
   let c=[];
   let d=[];
   let e=[];
   if (!['один','два','три','четыре','пять','шесть','семь','восемь','девять'].includes(b[0])) {
      b[2] = b[1];
   switch (b[0]) {
      case 'один': c.push(1); break;
      case 'два':  c.push(2); break;
      case 'три': c.push(3); break;
      case 'четыре': c.push(4); break;
      case 'пять': c.push(5); break;
      case 'шесть': c.push(6); break;
      case 'семь': c.push(7); break;
      case 'восемь': c.push(8); break;
      case 'девять': c.push(9); break;
      default:  break;
      }
   // } if (['десять','одинадцать','двенадцать','тринадцать','четырнадцать','пятнадцать','шестнадцать','семнадцать','восемнадцать','девятнадцать'].includes(b[0])) {
   switch (b[0]) {
      case 'десять': c.push(10); break;
      case 'одинадцать': c.push(11); break;
      case 'двенадцать': c.push(12); break;
      case 'тринадцать': c.push(13); break;
      case 'четырнадцать': c.push(14); break;
      case 'пятнадцать': c.push(15); break;
      case 'шестнадцать': c.push(16); break;
      case 'семнадцать': c.push(17); break;
      case 'восемнадцать': c.push(18); break;
      case 'девятнадцать': c.push(19); break;
      default:  break;
      }
   // }
   switch (b[1]) {
      case 'двадцать': d.push(2); break;
      case 'тридцать': d.push(3); break;
      case 'сорок': d.push(4); break;
      case 'пятдесят': d.push(5); break;
      case 'шестьдесят': d.push(6); break;
      case 'семьдесят': d.push(7); break;
      case 'восемьдесят': d.push(8); break;
      case 'девяносто': d.push(9); break;
      default:  break;
   }
   switch (b[2]) {
      case 'сто': e.push(1); break;
      case 'двести': e.push(2); break;
      case 'триста': e.push(3); break;
      case 'четыреста': e.push(4); break;
      case 'пятсот': e.push(5); break;
      case 'шестьсот': e.push(6); break;
      case 'семьсот': e.push(7); break;
      case 'восемьсот': e.push(8); break;
      case 'девятьсот': e.push(9); break;
      default:  break;
   } const result=+(e+d+c);
    return result;
    }
}
   console.log(receiveNum('сто девятнадцать'));