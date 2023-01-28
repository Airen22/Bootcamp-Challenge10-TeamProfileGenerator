const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('Check that new Intern() construct gets created with given school parameter', () => {
  const newIntern = new Intern("James", 2341, "james@mail.com", "School")
  expect(newIntern.school).toEqual("School")
})

test('Check that getSchool() returns School parameter', () => {
  const newIntern = new Intern("James", 2341, "james@mail.com", "School")
  expect(newIntern.getSchool()).toBe("School")  
})

test('Check that getRole() returns "Intern"', () => {
  const newIntern = new Intern("James", 2341, "james@mail.com", "School")
  expect(newIntern.getRole()).toBe("Intern")  
})