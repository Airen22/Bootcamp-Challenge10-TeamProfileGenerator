const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('Check for intern school', () => {
    const school = "school"
    const newIntern = new Intern("name", "id", "email", school)

  expect(newIntern.school).toEqual(expect.any(String))
  expect(newIntern.getSchool()).toBe(school)  
})
test('Check for manager role', () => {
    const newIntern = new Intern("name", "id", "email", "school")
    expect(newIntern.getRole()).toBe("Intern")  
})