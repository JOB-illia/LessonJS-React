let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в данном формате YYYY-MM-DD', '');



let appData = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

// let iOne = 0;
// while(iOne < 2){
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');
//     if((typeof(a))  === 'string' && (typeof (a)) != null && (typeof (b)) != null
//         && a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//     }else {
//         continue;
//     }
//     iOne++;
// }
// let iOne = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');
//     if((typeof(a))  === 'string' && (typeof (a)) != null && (typeof (b)) != null
//         && a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//     }else {
//         continue;
//     }
//     iOne++;
// }while(iOne < 2);

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    if((typeof(a))  === 'string' && (typeof (a)) != null && (typeof (b)) != null
    && a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
    }else {
        continue;
    }
}


appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет:' + appData.moneyPerDay);

if(appData.moneyPerDay < 100 ){
    console.log('Минимальный уровень достатка');
}else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log('Средний уровень достатка');
}else if (appData.moneyPerDay > 2000){
    console.log('Высокий уровень достатка');
}else {
    console.log('Ошибка - передан не тот тип данных!!!')
}


// 1. Сколько типов данных существует в JS: number / bigint / string / boolean / null / undefined / symbol  = 7
// 2. Как вывести информацию в консоль?: console.log()
// 3. Какая функция операторов || и &&?: ИЛИ и И
