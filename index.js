const express = require("express");
const inquirer = require("inquirer");
const cTable =require("console.table");
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
  switch(data) {
    case "View All Departments": viewDepartments();
    break;
    case "View All Roles": viewRoles();
    break;
    case "View All Employees": viewEmployees();
    break;
  }
  // if add dept, then prompt to add the dept name and the dept is added to the database
  // INSERT INTO departments(department_name)
  //   VALUES ("");
  

  // if add a role, then prompt to enter the name, salary, and dept for the role and add the role to the database


  // if add an employee, then prompt to enter the employee's first name, last name, role, and mgr, and add the emp to the database

  // if choose to update emp role, then prompt to select an emp to update and add their new role, and the info is updated in the database

  // Default for any request not found
  app.use((req, res) => {
    res.status(404).end();
  });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})

// if user chooses all departments, then show a table with dept names and ids
function viewDepartments() {
db.query("SELECT * FROM departments", function (err, results) {
  console.table(results);
});
}

// if user chooses all roles, then show a table with job titles, role ids, dept the role belongs to, 
// and salary for the role
function viewRoles() {
db.query("SELECT * FROM roles", function (err, results) {
  console.table(results);
});
}

// if user chooses all employees, then show a formatted table with employee data of emp ids, first names, 
// last names, job titles, depts, salaries, and managers the emps report to
function viewEmployees() {
db.query("SELECT * FROM employees", function (err, results) {
  console.table(results);
});
}