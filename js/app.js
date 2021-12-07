'use strict';

//console.log('hello world!');

let hours = ['6am', '7am', '8am', '9am', '10', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let ul =document.getElementById('seattle');

console.log(ul);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt();

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avg: 6.3,
  cookiesPerHr: [], //per hour
  customerPerHr: [], //per hour
  minMaxCust: function () {
    for (let i = 0; i < hours.length; i++) {
      let x = getRandomInt(this.minCust, this.maxCust);
      this.customerPerHr.push(x);
      console.log(this.customerPerHr);
    }
  }
},

  cookiesPerHr: function() {
    for (let i = 0; i < hours.length; i++) {
      let perhour = Math.ceil(this.customerPerHr[i] * this.avg);
      this.cookiesPerHr.push(perhour);
      console.log(perhour);

  }
};
seattle.minMaxCust();
seattle.cookiesPerHr();

