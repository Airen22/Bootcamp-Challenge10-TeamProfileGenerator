const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('Check that new Manager() construct gets created with given school parameter', () => {
  const newManager = new Manager("James", 2341, "james@mail.com", "Office")

  expect(newManager.getOfficeNumber()).toBe("Office")  
})
test('Check that getRole() returns "Intern"', () => {
  const newManager = new Manager("James", 2341, "james@mail.com", "Office")
  
  expect(newManager.getRole()).toBe("Manager")  
})