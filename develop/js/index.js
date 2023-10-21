const inquirer = require("inquirer");
// const sql = require('mysql2');
const DB = require('./queries')


const option = [
    {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
    {
        name: "View All Departments",
        value: "VIEW_DEPARTMENTS"
    }, 
    {
        name: "View All Roles",
        value: "VIEW_ROLES"
    }, 
    {
        name: "View All Employees",
        value: "VIEW_EMPLOYEES"
    }, 
    {
        name: "Add a Department",
        value: "ADD_DEPT",
    }, 
    {
        name: "Add a Role",
        value: "ADD_ROLE"
    }, 
    {
        name: "Add an Employee",
        value: "ADD_EMP"
    }, 
    {
        name: "Add an Employee Role",
        value: "ADD_EMP_ROLE"
    }
]}
]

const call = () => {

inquirer
.prompt (option)

.then(res => {
    let choice = res.choice;

switch (choice) {

case "VIEW_DEPARTMENTS": 
  viewAllDepartments();
  break

case "VIEW_ROLES":
    viewAllRoles();
    break

case "VIEW_EMPLOYEES":
    viewAllEmployees();
    break

case "ADD_DEPT":
    inquirer
    .prompt([
        {
            type: "input",
            name: "departmentName",
            message: "What is the name of the new department?"
        }
    ])

    .then(res =>
    addDepartment(DB.addDepartment(res.answer)));
    break

case "ADD_ROLE":
    add_role();
    break

case "ADD_EMP":
    add_employee();
    break

case "ADD_EMP_ROLE":
    update_employee_role();

}});

//View all departments function
function viewAllDepartments() {
    DB.viewDepartments().then(([rows]) => {
        let employees = rows;
        console.log("\n");
        console.table(employees);
    })
}

function viewAllRoles() {
    DB.viewRoles().then(([rows]) => {
        let employees = rows;
        console.log("\n");
        console.table(employees);
    })
}

function viewAllEmployees() {
    DB.viewEmployees().then(([rows]) => {
        let employees = rows;
        const departmentOptions = departments.map(({id, name}) => ({ name: name,
        value: id}));
        console.log("\n");
        console.table(employees);
    });
}

function addDepartment() {

(res) =>
DB.addDepartment(res.departmentName).then(([rows]) => {
    let departments = rows;
    console.log("\n");
    console.table(departments);
    })
};

function addRole() {
    DB.addRole('NEW ROLE').then(([rows]) => {
        let roles = rows;
        console.log("\n");
        console.table(roles);
    })
}

function addEmployee() {
    DB.addRole().then(([rows]) => {
        let employee = rows;
        console.log("\n");
        console.table(employee);
    })
}

function addEmployeeRole() {
    DB.addEmployeeRole().then(([rows]) => {
        let roles = rows;
        console.log("\n");
        console.table(roles);
    })
}

}


call();