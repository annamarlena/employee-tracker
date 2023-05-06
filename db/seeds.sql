INSERT INTO department (department_name)
  VALUES 
    ("Customer Service Center"),
    ("Career Force Center"),
    ("Information Technology");

INSERT INTO role (job_title, department_id, role_salary)
  VALUES
    ("Call Center Representative", 1, 45000 ),
    ("Call Center Manager", 1, 65000 ),
    ("Career Counselor", 2, 50000 ),
    ("Career Center Manager", 2, 65000 ),
    ("IT Specialist", 3, 60000 ),
    ("IT Manager", 3, 70000 );

INSERT INTO employee (first_name, last_name, role_id, manager_id)
  VALUES
    ("Linda", "Corney", 2, null ), 
    ("John", "Donut", 4, null ),
    ("Judy", "Blossom", 6, null );

INSERT INTO employee (first_name, last_name, role_id, manager_id)
  VALUES
    ("Melissa", "Holland", 1, 1 ),
    ("Daniel", "Oberhouse", 1, 1 ), 
    ("Anne", "Francisco", 1, 1 ), 
    ("Lori", "Pikachu", 1, 1 ), 
    ("James", "Hill", 3, 2 ), 
    ("Janet", "Valley", 3, 2 ), 
    ("Kent", "Carlson", 5, 3 ),
    ("Natalie", "Cole", 5, 3 );




