/*let nachRasch, blockValue, inExp, butUtv, butRasch, fieldNeob, otherField;

nachRasch = document.querySelectorAll('#start');
blockValue = document.querySelector(".app .result .result-table").getElementsByTagName('div');
inExp = document.querySelectorAll(".expenses-item");
butUtv = document.getElementsByClassName("optionalexpenses-btn");
butRasch = document.getElementsByClassName("count-budget-btn");
fieldNeob = document.querySelectorAll(".optionalexpenses-item");
otherField = document.querySelector(".day");
*/

let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yaerSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

expensesBtn.disabled=true;
optionalExpensesBtn.disabled=true;
countBtn.disabled=true;

startBtn.addEventListener('click', function() {
  expensesBtn.disabled=false;
  optionalExpensesBtn.disabled=false;
  countBtn.disabled=false;
  time = prompt("Введите дату в формате YYYY-MM-DD", 2019-05-31);  
  money = +prompt("Ваш бюджет на месяц?", 20);
  
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", 20);
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function() {
  let sum = 0;
  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
        b = expensesItem[++i].value;            
  loop:  if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
    console.log("Ok, data");
    appData.expenses[a] = b;
    sum += +b;
    appData.sum = sum;
  } else {
    alert("Введены не все данные");
    --i;
    break loop;
  }
  }
  expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function() {
  for (let i = 0; i < optionalExpensesItem.length; i++ ) {
    let opt = optionalExpensesItem[i].value;
    appData.optionalExpenses[i] = opt;
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
  }
});

countBtn.addEventListener('click', function() {
  if (appData.budget != undefined) {
    appData.moneyPerDay = ((appData.budget - appData.sum) / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 100) {
      levelValue.textContent = "Ваш достаток минимален";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = "Ваш достаток средний";
        } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = "Ваш достаток высок";
        } else {
      levelValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
  }  
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
 if (appData.savings == true) {
   appData.savings = false;
 } else {
     appData.savings = true;
 }
});


sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
        percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(2) + ' руб.';
        yaerSavingsValue.textContent = appData.yearIncome.toFixed(2) + ' руб.';
    } 
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
        percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(2) + ' руб.';
        yaerSavingsValue.textContent = appData.yearIncome.toFixed(2) + ' руб.';
    } 
});

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses:{},
  income:[],
  timeData: time,
  savings: false,
};
/*console.log("Наша программа включает следующие данные: \n");
for (var key in appData) {
  console.log(key);
}

appData.expenses = {[v1] : v2};*/
