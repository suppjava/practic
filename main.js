let money, time;

function start () {
  money = +prompt("Ваш бюджет на месяц?", 20);
  time = prompt("Введите дату в формате YYYY-MM-DD", 2019-05-31);  

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", 20);
  }
}

start();

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses:{},
  income:[],
  timeData: time,
  savings: true
};
let optionalExpenses = {};

//appData.expenses = {[v1] : v2};
function chooseExpenses () {
  for (let i = 0; i < 2; i++) {
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
  }
}

chooseExpenses();

function detectDayBudget(){
  appData.moneyPerDay = (appData.budget / 30).toFixed();
  alert("ваш бюджет на 1 день состовляет:" + appData.moneyPerDay);
}

detectDayBudget();

console.log(appData);

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("Ваш достаток минимален");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Ваш достаток средний");
  } else if (appData.moneyPerDay > 2000) {
    console.log("Ваш достаток высок");
  } else {
    console.log("Произошла ошибка");
  }
}

detectLevel();

function checkSavings(){
  if (appData.savings == true) {
    let save = +prompt("Какова сумма Ваших накоплений?"),
        percent = +prompt("Под какой процент?");
    appData.monthIncome = save/100/12*percent;
    alert("Ваш доход в месяц с депозита составляет: " + appData.monthIncome);
  }
}
checkSavings();

function chooseOptExpenses(){
  for (let i = 0; i < 3; i++ ) {
    let m;
    optionalExpenses[(i+1)] = prompt("Статья необязательных расходов?");
    console.log("Data save");
  }
}
chooseOptExpenses();
console.log(optionalExpenses);