const inquirer = require("inquirer");
// const db = require('../db')

inquirer
.prompt([
    {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
    {
        name: "view_departments",
        type: "list",
        message: "View Departments"
    }, 
    {
        name: "view_roles",
        type: "",
        message: ""
    }, 
    {
        name: "view_employees",
        type: "",
        message: ""
    }, 
    {
        name: "add_dept",
        type: "",
        message: ""
    }, 
    {
        name: "add_role",
        type: "",
        message: ""
    }, 
    {
        name: "add_employee",
        type: "",
        message: ""
    }, 
    {
        name: "add_employee_role",
        type: "",
        message: ""
    }
]}
])

.then(answer => {
    console.log(answer)
})