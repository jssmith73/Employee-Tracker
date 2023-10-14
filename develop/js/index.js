const { default: inquirer } = require("inquirer");

inquirer
.prompt([
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
    }, 
]);