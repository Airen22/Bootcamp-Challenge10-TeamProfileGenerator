const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('Check for manager office number', () => {
    const office = 1
    const newManager = new Manager("name", "id", "email", office)

  expect(newManager.officeNumber).toEqual(expect.any(Number))
  expect(newManager.getOfficeNumber()).toBe(office)  
})

test('Check for manager role', () => {
    const newManager = new Manager("name", "id", "email", "office")
    expect(newManager.getRole()).toBe("Manager")  
})