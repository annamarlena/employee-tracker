DROP DATABASE IF EXISTS employeetracker_db;
CREATE DATABASE employeetracker_db;

USE employeetracker_db;

-- Create a Departments table that shows Department Names and Department ids --
CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  departmentname VARCHAR(100) NOT NULL
);

-- Create a Roles table that shows Job Title, Role id, Department the Role belongs to, and Salary for the Role --
CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  jobtitle VARCHAR(100) NOT NULL,
  roledepartment VARCHAR(100) NOT NULL,
  rolesalary VARCHAR(100) NOT NULL
);

-- Create an Employees table that shows Employee ids, First Name, Last Name, Job title, Department, Salary, and Reporting Manager --
CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  employeetitle VARCHAR(100) NOT NULL,
  employeedepartment VARCHAR(100) NOT NULL,
  employeesalary VARCHAR(100) NOT NULL,
  reportingmgr VARCHAR(100) NOT NULL
);
