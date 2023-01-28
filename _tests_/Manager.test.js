const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('Check that new Manager() construct gets created with given office number parameter', () => {
  const newManager = new Manager("James", 2341, "james@mail.com", "101A")
  expect(newManager.officeNumber).toEqual("101A")
})

test('Check that getOfficeNumber() returns office number parameter', () => {
  const newManager = new Manager("James", 2341, "james@mail.com", "101A")
  expect(newManager.getOfficeNumber()).toBe("101A")  
})

test('Check that getRole() returns "Manager"', () => {
  const newManager = new Manager("James", 2341, "james@mail.com", "101A")
  expect(newManager.getRole()).toBe("Manager")  
})