let money, time, appData, dayBudg, v1, v2;
money = prompt("Ваш бюджет на месяц?", 20);
time = prompt("Введите дату в формате YYYY-MM-DD", 2019-05-31);
appData = {
  budget: money,
  timeData: time,
  expenses: {
  },
  optionalExpenses:1,
  income:1,
  savings: false
};
v1 = prompt("Введите обязательную статью расходов в этом месяце, наименование", 0);
v2 = prompt("Во сколько обойдется (сумма)?", 0);
appData.expenses = {[v1] : v2};
dayBudg = (money - appData.expenses[v1])/30;
alert("ваш бюджет на 1 день состовляет:" + dayBudg);
console.log(appData);
