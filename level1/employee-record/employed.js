// Create an empty array named employees
let employees = [];

// Create an Employee constructor
function Employee(name, jobTitle, salary, status = "Full Time") {
  this.name = name;
  this.jobTitle = jobTitle;
  this.salary = salary;
  this.status = status;
  
  // Method to print employee's information
  this.printEmployeeForm = function() {
    console.log(`Name: ${this.name}`);
    console.log(`Job Title: ${this.jobTitle}`);
    console.log(`Salary: ${this.salary}`);
    console.log(`Status: ${this.status}`);
  }
}

// Instantiate three employees
const employee1 = new Employee("John Almost there Doe", "Driver", 75000);
const employee2 = new Employee("Jenny the tank Smith", "Commercial Driver", 90000);
const employee3 = new Employee("Bob Newbie Johnson", "CMV Trainee", 40000);

// Override the status attribute of one employee
employee2.status = "Contract";

// Call the printEmployeeForm method for each employee
employee1.printEmployeeForm();
employee2.printEmployeeForm();
employee3.printEmployeeForm();

// Put the generated employees into the employees array
employees.push(employee1, employee2, employee3);

// You can access the employees array with the employee objects
console.log(employees);
