// Write your solution in this file!
function updateEmployeeWithKeyAndValue(employee, key, value) {
    //Create a new object using the spread operator with the existing employee properties
  // and add or update the specified key-value pair
    return { ...employee, [key]: value };
}
//Call the function to update the employee's streetAddress

let employee = { name: 'Sam' };
const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');

console.log('Original Employee:', employee);
console.log('Updated Employee:', updatedEmployee);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Mutate the original employee object by adding or updating the specified key-value pair
    employee[key] = value;
    return employee;
  }
  // Call the function to destructively update the employee's streetAddress
  destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');

  console.log('Mutated Employee:', employee);
  

  function deleteFromEmployeeByKey(employee, key) {
    // Create a new object using the spread operator, omitting the specified key
    const { [key]: deletedKey, ...newEmployee } = employee;
  
    // Return the new object without the specified key-value pair
    return newEmployee;
  }
  // Log the original and updated employee objects
  console.log('Original Employee:', employee);
  console.log('Updated Employee:', updatedEmployee);
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Mutate the original employee object by deleting the specified key
    delete employee[key];
  
    // Return the mutated employee object (though returning it is optional in this case)
    return employee;
  }
  
  
  // Call the function to destructively delete the 'age' property from the employee
  destructivelyDeleteFromEmployeeByKey(employee, 'age');
  
  // Log the mutated employee object
  console.log('Mutated Employee:', employee);
  