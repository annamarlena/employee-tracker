DROP DATABASE IF EXISTS employeetracker_db;
CREATE DATABASE employeetracker_db;

USE employeetracker_db;

-- Create a Departments table that shows Department Names and Department ids --
CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(100) NOT NULL
);

-- Create a Roles table that shows Job Title, Role id, Department the Role belongs to, and Salary for the Role --
CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  job_title VARCHAR(100) NOT NULL,
  role_department VARCHAR(100) NOT NULL,
  role_salary INT NOT NULL
);

-- Create an Employees table that shows Employee ids, First Name, Last Name, Job title, Department, Salary, and Reporting Manager --
CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  employee_title VARCHAR(100) NOT NULL,
  employee_department VARCHAR(100) NOT NULL,
  employee_salary INT NOT NULL,
  reporting_manager VARCHAR(100) NOT NULL
);

