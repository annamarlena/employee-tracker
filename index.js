const express = require("express");
const inquirer = require("inquirer");
const cTable = require("console.table");
const mysql = require("mysql2");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  console.log("Connected to the employee tracker database.")
)

function init() {
  // Create the prompts
  inquirer.prompt([
    {
      // Ask the user what they'd like to view
      type: "list",
      message: "Please select what you would like to view:",
      name: 'initialQuestions',
      choices: [ "View All Departments", "View All Roles", "View All Employees", "Add A Department", "Add A Role", "Add An Employee", "Update An Employee Role" ],
    },
  ])
  .then((data) => {
    switch(data.initialQuestions) {
      case "View All Departments": viewDepartments();
      break;
      case "View All Roles": viewRoles();
      break;
      case "View All Employees": viewEmployees();
      break;
      case "Add A Department": addDepartment();
      break;
      case "Add A Role": addRole();
      break;
      case "Add An Employee": addEmployee();
      break;
      case "Update An Employee Role": updateEmployee();
    }
  })
}

// Call the initial function
init();

// if user chooses all departments, then show a table with dept names and ids
function viewDepartments() {
db.query("SELECT * FROM department", function (err, results) {
  console.table(results);
  init();
});
}

// if user chooses all roles, then show a table with job titles, role ids, dept the role belongs to, 
// and salary for the role
function viewRoles() {
db.query("SELECT * FROM role", function (err, results) {
  console.table(results);
  init();
});
}

// if user chooses all employees, then show a formatted table with employee data of emp ids, first names, 
// last names, job titles, depts, salaries, and managers the emps report to
function viewEmployees() {
db.query("SELECT * FROM employee", function (err, results) {
  console.table(results);
  init();
});
}

// if user chooses to add a department, then prompt to add the department name and the department 
// is added to the database
function addDepartment() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the new department name?",
      name: "newDepartment"
    }
  ])
  .then((data) => {
    db.query(`INSERT INTO department (department_name) VALUES (?)`, [data.newDepartment], function (err, results) 
    {
      if (err) throw err;
      console.table(results);
      init();
    })
  })
}

// if user chooses to add a role, then prompt to enter the name, salary, and dept for the role 
// and add the role to the database
function addRole() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the new role/job title called?",
      name: "newRole"
    },
    {
      type: "input",
      message: "What is the salary for this role?",
      name: "newSalary"
    },
    {
      type: "input",
      message: "What department does this role belong to?",
      name: "newDepartment"
    }
  ])
  .then((data) => {
    db.query(`INSERT INTO role (job_title) VALUES (?)`, [data.newRole], function (err, results) 
    {
      if (err) throw err;
      console.table(results);
      init();
    })
  })
}

// if user chooses to add an employee, then prompt to enter the employee's first name, last name, role, 
// and manager, and add the employee to the database
function addEmployee() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the new employee's first name?",
      name: "newEmpFirstName"
    },
    {
      type: "input",
      message: "What is the new employee's last name?",
      name: "newEmpLastName"
    },
    {
      type: "input",
      message: "What is the new employee's role?",
      name: "newEmpRole"
    }
  ])
  .then((data) => {
    db.query(`INSERT INTO employee (first_name) = ? (last_name) = ? (role_id) = ?`, [data.newEmpFirstName], function (err, results) 
    {
      if (err) throw err;
      console.table(results);
      init();
    })
  })
}

// if user chooses to update employee role, then prompt to select an employee to update and add their new role, 
// and the info is updated in the database
function updateEmployee() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the employee id?",
      name: "employeeToUpdate"
    },
    {
      type: "input",
      message: "What is the employee's new role?",
      name: "updatedRole"
    }
  ])
  .then((data) => {
    db.query(`UPDATE employee SET role_id = ? WHERE id = ?`, [data.updatedRole, data.employeeToUpdate], function (err, results) 
    {
      if (err) throw err;
      console.table(results);
      init();
    })
  })
}