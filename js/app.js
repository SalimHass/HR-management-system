'use strict';

function Employee(id, fullName, department, level) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imagepath = `./imgs/${this.fullName}.png`;
    this.salary = 0;
    
}
    




    const gaziS = new Employee(1000, 'Gazi Samer', 'Administration', 'Senior');
    const lanaA = new Employee(1001, 'Lana Ali', 'Finance', 'Senior');
    const tamaraA = new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior');
    const safiW = new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior');
    const omarZ = new Employee(1004, 'Omar Zaid', 'Development', 'Senior');
    const ranaS = new Employee(1005, 'Rana Saleh', 'Development', 'Junior');
    const hadiA = new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior');


   Employee.prototype.rndSalary= function(){
    if (this.level == 'Senior') {
        this.salary = (Math.floor(Math.random() * (2000 - 1500)) + 1500);
    } else if (this.level == 'Mid-Senior') {
        this.salary= (Math.floor(Math.random() * (1500 - 1000)) + 1000) ;
    } else if (this.level == 'Junior') {
        this.salary = (Math.floor(Math.random() * (1000 - 500)) + 500) ;
    }
   }
   
   Employee.prototype.netSalary =function() {
    this.rndSalary()
    return Math.floor(this.salary*.925)

}
Employee.prototype.render = function(){
    document.write( `${this.fullName}  ${this.netSalary()}<br/>`);
}

gaziS.render();
lanaA.render();
tamaraA.render();
safiW.render();
omarZ.render();
ranaS.render();
hadiA.render();
