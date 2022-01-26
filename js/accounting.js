'use strict';

let tableSec = document.getElementById('tableSec');

let tableEl = document.createElement('table');
tableSec.appendChild(tableEl);
let trEl = document.createElement('tr');
tableEl.appendChild(trEl);
let thEl1 = Document.createElement('th')
trEl.appendChild(thEl1);
thEl1.textcontent = 'Department';
let thEl2 = Document.createElement('th')
trEl.appendChild(thEl2);
thEl2.textcontent = '# of employees';

let thEl3 = Document.createElement('th')
trEl.appendChild(thEl3);
thEl3.textcontent = 'Total Salary';

let thEl4 = Document.createElement('th')
trEl.appendChild(thEl4);
thEl4.textcontent = 'Average';

let trEl1 = document.createElement('tr');
tableEl.appendChild(trEl1);
let tdEl11 = document.createElement('td');
trEl1.appendChild(tdEl11);
tdEl11.textContent='Administration'
let tdEl12 = document.createElement('td');
trEl1.appendChild(tdEl11);
let tdEl13 = document.createElement('td');
trEl1.appendChild(tdEl11);
let tdEl14 = document.createElement('td');
trEl1.appendChild(tdEl11);

let trEl2 = document.createElement('tr');
tableEl.appendChild(trEl2);
let tdEl21 = document.createElement('td');
trEl2.appendChild(tdEl21);
tdEl21.textContent='Administration'
let tdEl22 = document.createElement('td');
trEl2.appendChild(tdEl22);
let tdEl23 = document.createElement('td');
trEl2.appendChild(tdEl23);
let tdEl24 = document.createElement('td');
trEl2.appendChild(tdEl24);
