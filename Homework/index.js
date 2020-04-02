let money_money = prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в данном формате YYYY-MM-DD', '');



let appData = {
    budget: money_money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a2 = prompt("Во сколько обойдется?", ''),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a4 = prompt("Во сколько обойдется?", '');


appData.expenses[a1] = a2;
appData.expenses[a3] = a4;


alert(appData.budget / 30);

// 1. Сколько типов данных существует в JS: number / bigint / string / boolean / null / undefined / symbol / object = 8
// 2. Как вывести информацию в консоль?: console.log()
// 3. Какая функция операторов || и &&?: ||
