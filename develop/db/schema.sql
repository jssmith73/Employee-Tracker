DROP DATABASE IF EXISTS my_company;

CREATE DATABASE my_company;

USE my_company;

CREATE TABLE departments (
    id INT  AUTO_INCREMENT,
    name VARCHAR(200) UNIQUE NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    title VARCHAR(50)  NOT NULL,
    salary DECIMAL NOT NULL,
    dept_id INT  NOT NULL,
    INDEX dep_idx (dept_id),
    CONSTRAINT fk_dept FOREIGN KEY (dept_id) REFERENCES departments(id) ON DELETE CASCADE
);

CREATE TABLE employees (
    id INT  AUTO_INCREMENT PRIMARY KEY, 
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT  NOT NULL, 
    INDEX role_idx (role_id),
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
    manager_id INT ,  
    INDEX role_ind (role_id),     
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL
)