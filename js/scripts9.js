let year,
    day,
    month,
    week,
    hour,
    minute,
    second,
    n;

second = 60;
minute = 60 * second,
hour = 60 * minute,
day = 24 * hour,
week = 7,
month = 31,
year = 365;

n = prompt('Введите любое положительное число')


switch(true) {
    case n > 365:
        document.write(`${n} дней это:<br> ${n / year} лет.<br> ${n / month} месяцев.<br> ${n / week} недель.<br> ${(n * day) / hour} часов.<br> ${(n * day) / minute} минут.<br> ${(n * day)} секунд.`);
        break;
    case n == 365:
        document.write('1 год это:<br> 12 месяцев.<br> 52 недели.<br> 8760 часов.<br> 525600 минут.<br> 31536000 секунд.');
        break;
    case n > 31 && n < 365: 
        document.write(`Меньше года. До 1 года не хватает ${365 - n} дней <br>`);
        document.write(`${n} дней это:<br> ${n / month} месяцев.<br> ${n / week} недель.<br> ${(n * day) / hour} часов.<br> ${(n * day) / minute} минут.<br> ${(n * day)} секунд.`);
        break;
    case n > 7 && n < 31: 
        document.write(`Меньше месяца. До 1 месяца не хватает ${31 - n} дней <br>`);
        document.write(`${n} дней это:<br> ${n / week} недель.<br> ${(n * day) / hour} часов.<br> ${(n * day) / minute} минут.<br> ${(n * day)} секунд.`);
        break;
    case n > 0 && n < 7: 
        document.write(`Меньше недели. До 1 недели не хватает ${7 - n} дней <br>`);
        document.write(`${n} дней это:<br> ${(n * day) / hour} часов.<br> ${(n * day) / minute} минут.<br> ${(n * day)} секунд.`);
        break;
} 


