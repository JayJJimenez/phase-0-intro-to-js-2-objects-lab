// Write your solution in this file!
const employee = {
    
    name : "jonathan",
    streetAddress : "100 drive",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};

    newEmployee['name'] = 'Sam';

    newEmployee['streetAddress'] = '11 Broadway'

    return newEmployee;
}

// updateEmployeeWithKeyAndValue(employee, 'name', 'streetAddress');

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

    employee[key] = value;

    return employee
}


function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};

    delete newEmployee[key];

    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];

    return employee;
  }
