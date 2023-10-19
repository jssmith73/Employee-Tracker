DROP DATABASE IF EXISTS my_company:

CREATE DATABASE my_company;

USE my_company;

CREATE TABLE departments (
    id INT AUTO_INCREMENT,
    name VARCHAR(200),
    PRIMARY KEY(id)
);

CREATE TABLE roles (
    id INT, 
    title VARCHAR(50) NOT NULL,
    salary DECIMAL(6,1),
    dept_id INT,
    FOREIGN KEY (dept_id)
    REFERENCES departments(id)
    ON DELETE SET NULL
);

CREATE TABLE employees (
    id INT, 
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30),
    role_id INT,
    FOREIGN KEY (role_id)
    REFERENCES roles(id)
    ON DELETE SET NULL
)