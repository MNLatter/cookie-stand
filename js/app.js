'use strict';

//console.log('helo world');
let form = document.querySelector('form');


let section = document.getElementById('seattle');

let article = document.createElement('article');
section.appendChild(article);

let table = document.createElement('table');
article.appendChild(table);
let tfoot = document.createElement('tfoot');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let stores = [];

function Store(name, minCustPerHour, maxCustPerhour, avgCookiesPerSale) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerhour = maxCustPerhour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.cookiesSalesPerHour = [];
  this.dailyTotal = 0;
  stores.push(this);
  this.render();
}

Store.prototype.custPerHour = function () {
  return Math.floor(Math.random() * (this.maxCustPerhour - this.minCustPerHour + 1) + this.minCustPerHour);
};

Store.prototype.avgSalesPerHour = function () {
  return Math.ceil(this.avgCookiesPerSale * this.custPerHour());
};

Store.prototype.calcCookieSalesPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let cookies = this.avgSalesPerHour();
    this.cookiesSalesPerHour.push(cookies);
    this.dailyTotal += cookies;
  }
};

Store.prototype.render = function () {

  this.calcCookieSalesPerHour();

  let tr = document.createElement('tr');
  table.appendChild(tr);

  let th = document.createElement('th');
  // th.setAttribute('class', 'names');
  th.textContent = `${this.name}`;
  tr.appendChild(th);

  for (let i = 0; i < this.cookiesSalesPerHour.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesSalesPerHour[i];
    tr.appendChild(td);

  }
  let td = document.createElement('td');
  td.textContent = this.dailyTotal;
  tr.appendChild(td);
};

function renderHeader() {

  let thead = document.createElement('thead');
  table.appendChild(thead);

  let tr = document.createElement('tr');
  thead.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = '';
  tr.appendChild(th);

  for (let i = 0; i < hours.length; i++) {
    let th = document.createElement('th');
    th.textContent = `${hours[i]}`;
    tr.appendChild(th);
  }

  th = document.createElement('th');
  // th = setAttribute('class', 'dlt');
  th.textContent = 'Daily Store Total';
  tr.appendChild(th);
}

function renderFooter() {
  table.appendChild(tfoot);
  let tr = document.createElement('tr');
  tfoot.appendChild(tr);
  let td = document.createElement('td');
  td.textContent = 'Totals';
  tr.appendChild(td);

  td = document.createElement('td');

  let dailyTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    let hourlyTotals = 0;
    for (let x = 0; x < stores.length; x++) {
      hourlyTotals += stores[x].cookiesSalesPerHour[i];
    }
    // console.log(hourlyTotals);
    td.textContent = hourlyTotals;
    dailyTotal += hourlyTotals;
    tr.appendChild(td);
  }
  td = document.createElement('td');
  td.textContent = dailyTotal;
  tr.appendChild(td);
}

//step 3 define event handler
function handleSubmit(event){
  event.preventDefault();
  //insert code here



}

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

renderHeader();
renderFooter();

//event listener
form.addEventListener('submit', handleSubmit);

