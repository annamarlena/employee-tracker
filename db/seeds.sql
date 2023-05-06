INSERT INTO departments (department_name)
  VALUES 
    ("Customer Service Center"),
    ("Career Force Center"),
    ("Information Technology");

INSERT INTO roles(job_title, role_department, role_salary)
  VALUES
    ("Call Center Representative", "Customer Service Center", 45000 ),
    ("Call Center Manager", "Customer Service Center", 65000 ),
    ("Career Counselor", "Career Force Center", 50000 ),
    ("Career Center Manager", "Career Force Center", 65000 ),
    ("IT Specialist", "Information Technology", 60000 ),
    ("IT Manager", "Information Technology", 70000 );

INSERT INTO employees (first_name, last_name, employee_title, employee_department, employee_salary, reporting_manager)
  VALUES
    ("Melissa", "Holland", "Call Center Representative", "Customer Service Center", 45000, "Linda Corney" ),
    ("Daniel", "Oberhouse", "Call Center Representative", "Customer Service Center", 45000, "Linda Corney" ), 
    ("Anne", "Francisco", "Call Center Representative", "Customer Service Center", 45000, "Linda Corney" ), 
    ("Lori", "Pikachu", "Call Center Representative", "Customer Service Center", 45000, "Linda Corney" ), 
    ("Linda", "Corney", "Call Center Manager", "Customer Service Center", 65000 ), 
    ("James", "Hill", "Career Counselor", "Career Force Center", 50000, "John Donut" ), 
    ("Janet", "Valley", "Career Counselor", "Career Force Center", 50000, "John Donut" ), 
    ("John", "Donut", "Career Center Manager", "Career Force Center", 65000 ), 
    ("Kent", "Carlson", "IT Specialist", "Information Technology", 60000, "Judy Blossom" ),
    ("Natalie", "Cole", "IT Specialist", "Information Technology", 60000, "Judy Blossom" ),
    ("Judy", "Blossom", "IT Manager", "Information Technology", 70000);

