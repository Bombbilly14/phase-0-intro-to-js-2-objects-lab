// Write your solution in this file!
const employee = {
    name: "William",
    streetAddress: "114 e",
}
function updateEmployeeWithKeyAndValue(employee, name, value){
    const newEmployee={...employee}
    newEmployee[name]=value
    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value){
    employee[name]= value
    return employee
}
function deleteFromEmployeeByKey(employee, name){
    const newerEmployee={...employee}
    delete newerEmployee.name
    return newerEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee.name
    return employee
}