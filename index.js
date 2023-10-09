// Write your solution in this file!
const employee={
    name : 'Dennis irungu',
    streetAddress:'4th street',
}

// delete employee{n}
function updateEmployeeWithKeyAndValue({...employee}) {
     employee.name='Sam'
     employee.streetAddress='11 Broadway'
     console.log(employee)
     return employee
       
    }

//updateEmployeeWithKeyAndValue(employee)

function destructivelyUpdateEmployeeWithKeyAndValue(employee){
    employee.name='Sam'
    employee.streetAddress='12 Broadway'
    return (employee)
}
//destructivelyUpdateEmployeeWithKeyAndValue(employee)
function deleteFromEmployeeByKey({...employee}){
    delete employee.name
    return employee
}

function destructivelyDeleteFromEmployeeByKey(employee){
    delete employee.name
    return employee
}