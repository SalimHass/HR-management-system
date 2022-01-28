'use strict';
function Employee(id, fullName, department, level, imgUrl, salary) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imagepath = imgUrl;
    this.salary = salary;


}
Employee.allEmp = [];
function loadEmployees() {
    let employees = localStorage.getItem('employees');
    let parsEmp = JSON.parse(employees);
    if (parsEmp !== null) {
        parsEmp.forEach(element => {
            let emp = new Employee(
                element.id,
                element.fullName,
                element.department,
                element.level,
                element.imagepath,
                element.salary);
            Employee.allEmp.push(emp);
        });
    }
}
let adminCount = 0;
let marketingCount = 0;
let devCount = 0;
let financeCount = 0;
let sumAdminSalary = 0;
let sumMarketingSalary = 0;
let sumDevSalary = 0;
let sumFinanceSalary = 0;

const gaziS = new Employee(1000, 'Gazi Samer', 'Administration', 'Senior', './imgs/Ghazi.jpg', 1754);
const lanaA = new Employee(1001, 'Lana Ali', 'Finance', 'Senior', './imgs/Lana.jpg', 1000);
const tamaraA = new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior', './imgs/Tamara.jpg', 1657);
const safiW = new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior', './imgs/Safi.jpg', 1344);
const omarZ = new Employee(1004, 'Omar Zaid', 'Development', 'Senior', './imgs/Omar.jpg', 1882);
const ranaS = new Employee(1005, 'Rana Saleh', 'Development', 'Junior', './imgs/Rana.jpg', 973);
const hadiA = new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', './imgs/Hadi.jpg', 1156);
Employee.allEmp.push(gaziS, lanaA, tamaraA, safiW, omarZ, ranaS, hadiA);
loadEmployees();

for (let i = 0; i < Employee.allEmp.length; i++) {
    if (Employee.allEmp[i].department == 'Administration') {
        adminCount++;
        sumAdminSalary += Employee.allEmp[i].salary;

    }
    if (Employee.allEmp[i].department == 'Marketing') {
        marketingCount++;
        sumMarketingSalary += Employee.allEmp[i].salary;
    }
    if (Employee.allEmp[i].department == 'Development') {
        devCount++;
        sumDevSalary += Employee.allEmp[i].salary;
    }
    if (Employee.allEmp[i].department == 'Finance') {
        financeCount++;
        sumFinanceSalary += Employee.allEmp[i].salary;
    }

}

let sumAllEmp = adminCount + marketingCount + devCount + financeCount;
let sumAllSalary = sumAdminSalary + sumMarketingSalary + sumDevSalary + sumFinanceSalary;



let tableSec = document.getElementById('tableSec');
let tableEl = document.createElement('table');
tableSec.appendChild(tableEl);
let trEl = document.createElement('tr');
tableEl.appendChild(trEl);
let thEl1 = document.createElement('th')
trEl.appendChild(thEl1);
thEl1.textContent = 'Department';
let thEl2 = document.createElement('th')
trEl.appendChild(thEl2);
thEl2.textContent = '# of employees';

let thEl3 = document.createElement('th')
trEl.appendChild(thEl3);
thEl3.textContent = 'Total Salary';

let thEl4 = document.createElement('th')
trEl.appendChild(thEl4);
thEl4.textContent = 'Average';

let trEl1 = document.createElement('tr');
tableEl.appendChild(trEl1);
let tdEl11 = document.createElement('td');
trEl1.appendChild(tdEl11);
tdEl11.textContent = 'Administration';
let tdEl12 = document.createElement('td');
trEl1.appendChild(tdEl12);
tdEl12.textContent = adminCount;
let tdEl13 = document.createElement('td');
trEl1.appendChild(tdEl13);
tdEl13.textContent = sumAdminSalary;
let tdEl14 = document.createElement('td');
trEl1.appendChild(tdEl14);
tdEl14.textContent = sumAdminSalary / adminCount;

let trEl2 = document.createElement('tr');
tableEl.appendChild(trEl2);
let tdEl21 = document.createElement('td');
trEl2.appendChild(tdEl21);
tdEl21.textContent = 'Marketing'
let tdEl22 = document.createElement('td');
trEl2.appendChild(tdEl22);
tdEl22.textContent = marketingCount;
let tdEl23 = document.createElement('td');
trEl2.appendChild(tdEl23);
tdEl23.textContent = sumMarketingSalary;
let tdEl24 = document.createElement('td');
trEl2.appendChild(tdEl24);
tdEl24.textContent = sumMarketingSalary / marketingCount;




let trEl3 = document.createElement('tr');
tableEl.appendChild(trEl3);
let tdEl31 = document.createElement('td');
trEl3.appendChild(tdEl31);
tdEl31.textContent = 'Development'
let tdEl32 = document.createElement('td');
trEl3.appendChild(tdEl32);
tdEl32.textContent = devCount;
let tdEl33 = document.createElement('td');
trEl3.appendChild(tdEl33);
tdEl33.textContent = sumDevSalary;
let tdEl34 = document.createElement('td');
trEl3.appendChild(tdEl34);
tdEl34.textContent = sumDevSalary / devCount;

let trEl4 = document.createElement('tr');
tableEl.appendChild(trEl4);
let tdEl41 = document.createElement('td');
trEl4.appendChild(tdEl41);
tdEl41.textContent = 'Finance'
let tdEl42 = document.createElement('td');
trEl4.appendChild(tdEl42);
tdEl42.textContent = financeCount;
let tdEl43 = document.createElement('td');
trEl4.appendChild(tdEl43);
tdEl43.textContent = sumFinanceSalary;
let tdEl44 = document.createElement('td');
trEl4.appendChild(tdEl44);
tdEl44.textContent = sumFinanceSalary / financeCount;

let trEl5 = document.createElement('tr');
tableEl.appendChild(trEl5);
let tdEl51 = document.createElement('td');
trEl5.appendChild(tdEl51);
tdEl51.textContent = 'Total'
let tdEl52 = document.createElement('td');
trEl5.appendChild(tdEl52);
tdEl52.textContent = sumAllEmp;
let tdEl53 = document.createElement('td');
trEl5.appendChild(tdEl53);
tdEl53.textContent = sumAllSalary;
let tdEl54 = document.createElement('td');
trEl5.appendChild(tdEl54);
tdEl54.textContent = Math.round(sumAllSalary / sumAllEmp);
