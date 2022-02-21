USE employee_db;

INSERT INTO departments (name) 
VALUES 
("Finance"),
("Marketing"),
("Sales Operations"),
("Information Tech"),
("HR");

INSERT INTO roles (title, salary, department_id) 
VALUES 
("Account Manager", 100000, 1),
("Account Associate", 62000, 1),
("Sales Manager", 90000, 2),
("Sales Associate", 50000, 2),
("Sales Operations Manager", 80000, 3),
("Sales Operations Associate", 50000, 3),
("Senior IT Engineer", 130000, 4),
("Junior IT Engineer", 100000, 4),
("HR Manager", 80000, 5),
("HR Associate", 60000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id) 
VALUES
("Courtney", "Best", 7, NULL),
("Naomi", "Campbell", 5, NULL),
("Lena", "Hughes", 8, 1),
("Bailey", "Aguilar", 1, NULL),
("Josh", "Valenzuela", 3, NULL),
("Marco", "May", 6, 2),
("Donald", "Lane", 2, 4),
("Luke", "Kim", 4, 5),
("Yasin", "Nielson", 9, NULL),
("Bryan", "Kobe", 10, 9);
