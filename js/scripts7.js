let n;
n = prompt('Ведите число от 0 до 59') 

    switch (true){
        case n >= 0 && n <= 15:
            alert('попадает в 1 четверть часа');
            break;
        case n >= 16 && n <= 30:
            alert('попадает в 2 четверть часа');
            break;
        case n >= 31 && n <= 45:
            alert('попадает в 3 четверть часа');
            break;
        case n >= 46 && n <= 59:
            alert('попадает в 4 четверть часа');
            break;
        case n < 0 || n >=60:
            alert('вы ввели неправильное число');
            break;
}