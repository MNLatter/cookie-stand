'use strict';

//console.log('helo world');

let section = document.getElementById('seattle');
console.log(section);

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let stores = [];

function Location(name, minCustPerHour, maxCustPerhour, avgCookiesPerSale, cookiesSalesPerHour, dailyTotal) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerhour = maxCustPerhour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.cookiesSalesPerHour = cookiesSalesPerHour;
  this.dailyTotal = dailyTotal;
  stores.push(this);
}
Location.prototype.custPerHour = function () {
  return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
},
  Location.prototype.avgSalesPerHour = function () {
    return Math.ceil(this.avgCookiesPerSale * this.custPerHour());
  },
  Location.prototype.calcCookieSalesPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
      let cookies = this.avgSalesPerHour();
      this.cookiesSalesPerHour.push(cookies);
      this.dailyTotal += cookies;
    }
  };

let seattle = new Location('Seattle', 23, 65, 6.3, [], 0);
let tokyo = new Location('Tokyo', 3, 24, 1.2, [], 0);
let dubai = new Location('Dubai', 11, 38, 3.7, [], 0);
let paris = new Location('Paris', 20, 38, 2.3, [], 0);
let lima = new Location('Lima', 2, 16, 4.6, [], 0);

console.log(seattle);
console.log(seattle.avgSalesPerHour());
console.log(seattle.custPerHour());
console.log(seattle.cookiesSalesPerHour());

let article = document.createElement('article');
section.appendChild(article);

let table = document.createElement('table');
article.appendChild(table);

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
th = setAttribute('class', 'dlt');
th.textContent = 'Daily Location Total';
tr.appendChild(th);

Location.prototype.render = function () {

  this.calcCookieSalesPerHour();

  tr = document.createElement('tr');
  table.appendChild(tr);

  th = document.createElement('th');
  th.setAttribute('class', 'names');
  th.textContent = `${this.name}`;
  tr.appendChild(th);

  for (let i = 0; i < globalThis.cookiesSalesPerHour.length; i++) {
    let td = document.createElement('td');
    td.textContent = `${this.cookiesSalesPerHour}`;

  }
  let td = document.createElement('td');
  td.textContent = `${this.dailyTotal}`;
  tr.appendChild(td);
};
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

tr = document.createElement('tr');
table.appendChild(tr);
let td = document.createElement('td');
tr.appendChild(td);

td = document.createElement('td');
function dailyTotal() {
  let dailyTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    let hourlyTotals = 0;
    for (let x = 0; x < stores[x].cookiesSalesPerHour[i]) {
    }
    dailyTotal += hourlyTotals;
    td.textContent = `${hourlyTotals}`;
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = `{dailyTotal}`;
  tr.appendChild(td);
}
dailyTotal();
