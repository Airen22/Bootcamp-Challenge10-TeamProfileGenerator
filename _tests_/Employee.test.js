const Employee = require('../lib/Employee');

test('Check for employee name', () => {
    const name = "James"
    const newEmployee = new Employee(name)

  expect(newEmployee.name).toEqual(expect.any(String))
  expect(newEmployee.getName()).toBe(name)  
})



test('Check for employee email', () => {
    const email = "erin@gmail.com"
    const newEmployee = new Employee("name", "id", email)

  expect(newEmployee.email).toEqual(expect.any(String))
  expect(newEmployee.getEmail()).toBe(email)  
})

test('Check for employee role', () => {
    const newEmployee = new Employee("name", "id", "email")
    expect(newEmployee.getRole()).toBe("Employee")  
})