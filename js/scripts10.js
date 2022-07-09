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
        document.write('Январь <br> Зима');
        break;

    case n > 1 && n <=2:
        document.write('Февраль <br> Зима');
        break;

    case n > 2 && n <= 3:
        document.write('Март <br> Весна');
        break;

    case n > 3 && n <= 4:
        document.write('Апрель <br> Весна');
        break;

    case n > 4 && n <= 5:
        document.write('Май <br> Весна');
        break;

    case n > 5 && n <= 6:
        document.write('Июнь <br> Лето');
        break;

    case n > 6 && n <= 7:
        document.write('Июль <br> Лето');
        break;

    case n > 7 && n < 8:
        document.write('Август <br> Лето');
        break;

    case n > 8 && n <= 9:
        document.write('Сентябрь <br> Осень');
        break;

    case n > 9 && n <= 10:
        document.write('Октябрь <br> Осень')
        break;

    case n > 10 && n <= 11:
        document.write('Ноябрь <br> Осень');
        break;

    case n > 11  && n <= 12:
        document.write('Декабрь <br> Зима');
        break;
}