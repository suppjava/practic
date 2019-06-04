let money = +prompt("Ваш бюджет на месяц?", 20);
let time = prompt("Введите дату в формате YYYY-MM-DD", 2019-05-31);

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses:{},
  income:[],
  timeData: time,
  savings: false
};

//appData.expenses = {[v1] : v2};


/*for (let i = 0; i < 2; i++) {
  let a = prompt("Введите обязательную статью расходов в этом месяце, наименование", ''),
      b = prompt("Во сколько обойдется (сумма)?", '');
loop:  if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
  console.log("Ok, data");
  appData.expenses[a] = b;
} else {
  alert("Введены не все данные");
  --i;
  break loop;
}
};*/
/*let i = 0;
while (i < 2) {
  let a = prompt("Введите обязательную статью расходов в этом месяце, наименование", ''),
  b = prompt("Во сколько обойдется (сумма)?", '');
loop:  if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
  console.log("Ok, data");
  appData.expenses[a] = b;
} else {
  alert("Введены не все данные");
  --i;
  break loop;
}
i++;
};*/

let i = 0;
do {
  let a = prompt("Введите обязательную статью расходов в этом месяце, наименование", ''),
  b = prompt("Во сколько обойдется (сумма)?", '');
loop:  if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
  console.log("Ok, data");
  appData.expenses[a] = b;  
} else {
  alert("Введены не все данные");
  --i;
  break loop;
}
i++;
} while (i < 2);

appData.moneyPerDay = appData.budget/30;
alert("ваш бюджет на 1 день состовляет:" + appData.moneyPerDay);
console.log(appData);

if (appData.moneyPerDay < 100) {
  console.log("Ваш достаток минимален");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Ваш достаток средний");
} else if (appData.moneyPerDay > 2000) {
  console.log("Ваш достаток высок");
} else {
  console.log("Произошла ошибка");
}