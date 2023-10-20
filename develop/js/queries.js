const connection = require('./connect');
const sql = require('./connect');

class DB {

    constructor(connection) {
        this.connection = connection;
    }

    //View all departments

viewDepartments() {
    console.log('viewDepartments() is running')
    return this.connection.promise().query(
       "SELECT departments.id, departments.name FROM departments;"
    );
};
};

module.exports = new DB(connection);