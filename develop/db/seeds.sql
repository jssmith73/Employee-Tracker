INSERT INTO departments (name)
VALUES ('IT'),
       ('Human Resources'),
       ('Production'),
       ('R&D'),
       ('Management');

INSERT INTO roles (title, salary, dept_id)
VALUES ('IT personel', '65.0','001'),
       ('HR Representative', '55.5','002'),
       ('Production specialist', '40.6','003'),
       ('Researcher', '60.0', '004'),
       ('Manager', '85.1', '005');

INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Scott", "Langley", "001"),
       ("Tony", "Morris", "002"),
       ("Jim", "Porter", "003");
      