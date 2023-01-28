const Employee = require('../lib/Employee');

test('Check that new Employee() construct get created with given parameters', () => {
  const newEmployee = new Employee("James", 2341, "james@gmail.com")

  expect(newEmployee.name).toEqual("James")
  expect(newEmployee.id).toEqual(2341)
  expect(newEmployee.email).toEqual("james@gmail.com")

})

test('Check that getName() returns name parameter', () => {
  const newEmployee = new Employee("James", 2341, "james@mail.com")

  expect(newEmployee.getName()).toBe("James")  

})

test('Check that getId() returns id parameter', () => {
  const newEmployee = new Employee("James", 2341, "james@mail.com")

  expect(newEmployee.getId()).toBe(2341)  
})

test('Check that getEmail() returns email parameter', () => {
    const newEmployee = new Employee("James", 2341, "james@mail.com")
   
    expect(newEmployee.getEmail()).toBe("james@mail.com")  
})

test('Check that getRole() returns "Employee:"', () => {
  const newEmployee = new Employee("James", 2341, "james@mail.com")
    expect(newEmployee.getRole()).toBe("Employee")  
})