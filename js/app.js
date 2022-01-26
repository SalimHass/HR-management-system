'use strict';

function Employee(id, fullName, department, level, imgUrl) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imagepath = imgUrl;
    this.salary = 0;

}

Employee.prototype.rndSalary = function () {
    if (this.level == 'Senior') {
        this.salary = (Math.floor(Math.random() * (2000 - 1500)) + 1500);
    } else if (this.level == 'Mid-Senior') {
        this.salary = (Math.floor(Math.random() * (1500 - 1000)) + 1000);
    } else if (this.level == 'Junior') {
        this.salary = (Math.floor(Math.random() * (1000 - 500)) + 500);
    }
}

Employee.prototype.netSalary = function () {
    this.rndSalary()
    return Math.floor(this.salary * .925)

}
Employee.prototype.render = function () {
    let div = document.createElement('div');
    div.setAttribute('class','card');
    let image = document.createElement('img');
    image.setAttribute('class','employeeImage');
    div.appendChild(image);
    image.setAttribute('src',this.imagepath)
    let namePar = document.createElement('p');
    namePar.setAttribute('class','eText');
    div.appendChild(namePar);
    let deptPar = document.createElement('p');
    deptPar.setAttribute('class','eText');
    div.appendChild(deptPar);
    let salaryPar = document.createElement('p');
    salaryPar.setAttribute('class','eText');
    div.appendChild(salaryPar)
    namePar.textContent = `Name: ${this.fullName}- id: ${this.id}`;
    deptPar.textContent = `Department: ${this.department} -  level: ${this.level}`;
    salaryPar.textContent = `${this.netSalary()}`;
    document.getElementById("empImg").appendChild(div);
}



const gaziS = new Employee(1000, 'Gazi Samer', 'Administration', 'Senior', './imgs/Ghazi.jpg');
const lanaA = new Employee(1001, 'Lana Ali', 'Finance', 'Senior', './imgs/Lana.jpg');
const tamaraA = new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior', './imgs/Tamara.jpg');
const safiW = new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior', './imgs/Safi.jpg');
const omarZ = new Employee(1004, 'Omar Zaid', 'Development', 'Senior', './imgs/Omar.jpg');
const ranaS = new Employee(1005, 'Rana Saleh', 'Development', 'Junior', './imgs/Rana.jpg');
const hadiA = new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', './imgs/Hadi.jpg');
var emArr = [gaziS, lanaA, tamaraA, safiW, omarZ, ranaS, hadiA]

function showEmployees() {
    for (let i = 0; i < emArr.length; i++) {
        emArr[i].render();
    }

}

function init() {
    showEmployees();
    let newEm = document.getElementById("newEm");
    newEm.addEventListener("submit", addNewEm);
}



function addNewEm(event) {
    event.preventDefault();
    let fullName = event.target.eName.value;
    let department = event.target.eDepSel.value;
    let level = event.target.eLvlSel.value;
    let imagepath = event.target.eImg.value;
    let id = Math.floor(1000 + Math.random() * 9000);
    let employee = new Employee(id, fullName, department, level, imagepath)
    employee.render();
}

init();