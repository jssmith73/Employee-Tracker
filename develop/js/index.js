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
        value: ""
    }, 
    {
        name: "View All Employees",
        value: ""
    }, 
    {
        name: "Add a Department",
        value: ""
    }, 
    {
        name: "Add a Role",
        value: ""
    }, 
    {
        name: "Add an Employee",
        value: ""
    }, 
    {
        name: "Add an Employee Role",
        value: ""
    }
]}
]

const call = () => {

    console.log('call() running')

inquirer
.prompt (option)

.then((choice) => {

    if (choice = "View All Departments")
return viewAllDepartments();
    }
)

//View all departments function
function viewAllDepartments() {
    DB.viewDepartments()
}}


call();