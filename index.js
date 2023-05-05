const inquirer = require("inquirer");
const fs = require("fs"); 

// Create the prompts
inquirer.prompt([
  {
    // Ask the user what they'd like to view
    type: "list",
    message: "Please select what you would like to view:",
    name: 'initialQuestions',
    choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"],
  },
])
// Create the README file
.then((data) => {
  // if all departments, then show a table with dept names and ids

  // if all roles, then show a table with job titles, role ids, dept the role belongs to, and salary for the role

  // if all employees, then show a formatted table with employee data of emp ids, first names, last names, job titles,
  // depts, salaries, and managers the emps report to

  // if add dept, then prompt to add the dept name and the dept is added to the database

  // if add a role, then prompt to enter the name, salary, and dept for the role and add the role to the database

  // if add an employee, then prompt to enter the employee's first name, last name, role, and mgr, and add the emp to the database

  // if choose to update emp role, then prompt to select an emp to update and add their new role, and the info is updated in the database
}