const inquirer = require("inquirer");
const DB = require('./queries')
const connection = require('./connect');

//EMPLOYEE MANAGER PROMPTS

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
        name: "Update an Employee Role",
        value: "UPDATE_EMP_ROLE"
    },
    {
        name: "Delete a Department",
        value: "DELETE_DEPT"
    },
    {
        name: "Delete a Role",
        value: "DELETE_ROLE"
    },
    {
        name: "Delete an Employee",
        value: "DELETE_EMP"
    }
    
]}
]

//FUNCTION TO EXECUTE PROMPT REQUESTS

const call = () => {

inquirer
.prompt (option)

.then(res => {
    let choice = res.choice;

switch (choice) {

//VIEW DEPTARTMENTS, ROLES, AND EMPLOYEES

case "VIEW_DEPARTMENTS": 
  viewAllDepartments();
  break

case "VIEW_ROLES":
    viewAllRoles();
    break

case "VIEW_EMPLOYEES":
    viewAllEmployees();
    break
//-----------------------



//ADD DEPARTMENTS, ROLES AND EMPLOYEES

case "ADD_DEPT":
    inquirer
    .prompt([
        {
            type: "input",
            name: "departmentName",
            message: "What is the name of the new department?"
        }
    ])

    .then( function(answers) {
        console.log(answers);
        connection.query('INSERT INTO departments SET ?', {
            name: answers.departmentName,
        },
        call()
    )})

    break

case "ADD_ROLE":
    inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of the new role?"
        },
        {
            type: "input",
            name: "salary",
            message: "What is the salary?"
        },
        {
            type: "input",
            name: "dept_id",
            message: "What is the Department ID of this role?"
        }
    ])

    .then( function(answers) {
        console.log(answers);
        connection.query('INSERT INTO roles SET ?', {
            title: answers.title,
            salary: answers.salary,
            dept_id: answers.dept_id
        },
        call()
    )})
    
    break
    
case "ADD_EMP":
    inquirer
    .prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the employee's last name?"
        },
        {
            type: "input",
            name: "role_id",
            message: "What is the employees role ID?"
        },
        {
            type: "list",
            name: "manager_id",
            message: "What is this employee's manager ID?",
            choices: ["1" , "3", "5", "7"]
        }
    ])

    .then( function(answers) {
        console.log(answers);
        connection.query('INSERT INTO employees SET ?', {
            first_name: answers.first_name,
            last_name: answers.last_name,
            role_id: answers.role_id,
            manager_id: answers.manager_id
        },
        call()
    )})

     break

//UPDATE EMPLOYEE ROLE

case "UPDATE_EMP_ROLE":
        inquirer
        .prompt([
        {
            type: "input",
            name: "employee_id",
            message: "What is the employee ID?"
        },
        {
            type: "input",
            name: "role_id",
            message: "What is the employees new role ID?"
        }
    ])
    
    .then( function(answers) {
        console.log(answers);
        connection.query('UPDATE employees SET role_id = ? WHERE id = ?', 
            [answers.role_id, answers.employee_id],

            call()
    )}
    )
    break

//DELETE DEPARTMENTS, ROLES, AND EMPLOYEES

case "DELETE_DEPT":
    inquirer
    .prompt([
            
        {
            type: "input",
            name: "departmentId",
            message: "What is the department ID?"
        }
        ])

    .then(function(answers) {
            console.log(answers);
            connection.query('DELETE FROM departments WHERE ?', 
            { id: answers.departmentId },
            call()
        )})

    break
    
case "DELETE_ROLE":
    inquirer
    .prompt([
            
        {
            type: "input",
            name: "roleId",
            message: "What is the role ID?"
        }
        ])

    .then(function(answers) {
            console.log(answers);
            connection.query('DELETE FROM roles WHERE ?', 
            { id: answers.roleId },
            call()
        )})

    break

case "DELETE_EMP":
    inquirer
    .prompt([
                    
        {
            type: "input",
            name: "employeeID",
            message: "What is the employee's ID"
        }
        ])
        
        .then(function(answers) {
            console.log(answers);
             connection.query('DELETE FROM employees WHERE ?', 
            { id: answers.employeeID },
            call()
            )})
}});

//VIEW FUNCTIONS

//View all departments function

function viewAllDepartments() {

    
    DB.viewDepartments().then(([rows]) => {
        let employees = rows;
        console.log("\n");
        console.table(employees);
    })

    //Returns to main prompt
    call();
  
}

//View Roles

function viewAllRoles() {
    DB.viewRoles().then(([rows]) => {
        let employees = rows;
        console.log("\n");
        console.table(employees);
    })

    call();
}

//View Employees

function viewAllEmployees() {
    DB.viewEmployees().then(([rows]) => {
        let employees = rows;
        console.log("\n");
        console.table(employees);
    });

    call();
}

}

call();