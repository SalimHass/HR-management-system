'use strict';

function Employee(id, fullName, department, level) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imagepath = `./imgs/${this.fullName}.png`
}
    




    const gaziS = new Employee(1000, 'Gazi Samer', 'Administration', 'Senior');
    const lanaA = new Employee(1001, 'Lana Ali', 'Finance', 'Senior');
    const tamaraA = new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior');
    const safiW = new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior');
    const omarZ = new Employee(1004, 'Omar Zaid', 'Development', 'Senior');
    const ranaS = new Employee(1005, 'Rana Saleh', 'Development', 'Junior');
    const hadiA = new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior');


    Employee.prototype.salary = function () {
        document.write(Employee)
    };
    Employee.netSalary(level) =function() {
        if (level == 'Senior') {
            this.netSalary = (Math.floor(Math.random() * (2000 - 1500)) + 1500) * .925;
        } else if (level == 'Mid-Senior') {
            this.netSalary = (Math.floor(Math.random() * (1500 - 1000)) + 1000) * .925;
        } else if (level == 'Junior') {
            this.netSalary = (Math.floor(Math.random() * (1000 - 500)) + 500) * .925;
        }
    }
