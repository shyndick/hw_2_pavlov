let a = 10,
    b = 2,
    sum = a + b,
    dif = a - b,
    comp = a * b,
    priv = a / b;

document.write (`Число a = ${a} Число b = ${b}.<br> Сумма ${sum}. Разность ${dif}. Произведение ${comp}. Частное ${priv}<br>`)

if (sum > 1) {
    document.write('Сумма в квадрате: ' + sum * sum + '<br>');
} else{
    document.write('Сумма < 1 <br>');
}
