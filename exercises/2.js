console.log(window);

class EmployeeSalaries {
  constructor() {
    this.salaries = [];
    
    for (let i = 0; i < 5; i++) {
      const salary = parseFloat(
        prompt(`Enter the salary for employee #${i + 1}: `)
      );
      this.salaries.push(salary);
    }
  }

  printSalary() {
    console.log(this.salaries);
  }
}

let employee = new EmployeeSalaries();
employee.printSalary();


