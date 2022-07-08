let day,
    n;
day = prompt('Введите любое положительное число');
// n = day / 31;

if (day < 365) {
    n = day / 31; 
} else {
    n = (day % 365) / 31;
}
switch(true) {
    case n >= 0 && n <= 1: 
        document.write('Январь <br>');
    case n >= 0 && n <= 2:
        document.write('Зима');
        break;
    case n > 1 && n <=2:
        document.write('Февраль <br>');
    case n > 0 && n <= 2:
        document.write('Зима');
        break;
    case n > 3 && n <= 3:
        document.write('Март <br>');
    case n >= 3 && n <= 5:
        document.write('Весна');
        break;
    case n > 3 && n <= 4:
        document.write('Апрель <br>');
    case n >= 3 && n <= 5:
        document.write('Весна');
        break;
    case n > 4 && n <= 5:
        document.write('Май <br>');
    case n >= 3 && n <= 5:
        document.write('Весна');
        break;
    case n > 5 && n <= 6:
        document.write('Июнь <br>');
    case n >= 6 && n <= 8:
        document.write('Лето');
        break;
    case n > 6 && n <= 7:
        document.write('Июль <br>');
    case n >= 6 && n <= 8:
        document.write('Лето');
        break;
    case n > 7 && n < 8:
        document.write('Август <br>');
    case n >= 6 && n <= 8:
        document.write('Лето');
        break;
    case n > 8 && n <= 9:
        document.write('Сентябрь <br>');
    case n >= 9 && n <= 11:
        document.write('Осень');
        break;
    case n > 9 && n <= 10:
        document.write('Октябрь <br>');
    case n >= 9 && n <= 11:
        document.write('Осень');
        break;
    case n > 10 && n <= 11:
        document.write('Ноябрь <br>');
    case n >= 9 && n <= 11:
        document.write('Осень');
        break;
    case n > 11  && n <= 12:
        document.write('Декабрь <br>');
    case n > 11 && n <= 12:
        document.write('Зима');
        break;
}