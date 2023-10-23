const connection = require('./connect');

class DB {

    constructor(connection) {
        this.connection = connection;
    }

    //View all departments

viewDepartments() {
    return this.connection.promise().query(
       "SELECT departments.id, departments.name FROM departments;"
    );
};

//View all roles

viewRoles() {
    return this.connection.promise().query(
       "SELECT roles.id, roles.title, roles.salary, roles.dept_id FROM roles;"
    );
};

//View all employees

viewEmployees() {
    return this.connection.promise().query(
       "SELECT employees.id, employees.first_name, employees.last_name, employees.role_id, manager_id FROM employees"
    )};

//Add a department

addDepartment(viewDepartments) {

    console.log("New department saved!");
    return this.connection.promise().query("INSERT INTO departments(name) VALUES (?)", [viewDepartments],
    )}    

//Add a role

addRole(addRole) {
    return this.connection.promise().query("INSERT INTO roles (id, title, salary, role_id) SET ?",
    [addRole],
    )};
};

//Exports to index.js
module.exports = new DB(connection);