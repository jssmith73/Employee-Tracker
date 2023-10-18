INSERT INTO departments (id, name)
VALUES ('001','IT'),
       ('002','Human Resources'),
       ('003','Production'),
       ('004','R&R'),
       ('005','Management');

INSERT INTO roles (id, title, salary, dept_id)
VALUES ('001','IT personel', '65.0','001'),
       ('002','HR Representative', '55.5','002'),
       ('003','Production specialist', '40.6','003'),
       ('004','Researcher', '60.0', '004'),
       ('005', 'Manager', '85.1', '005');

INSERT INTO employees (id, first_name, last_name, role_id)
VALUES ("001", "Scott", "Langley", "001"),
       ("002", "Tony", "Morris", "002"),
       ("003", "Jim", "Porter", "003");
      