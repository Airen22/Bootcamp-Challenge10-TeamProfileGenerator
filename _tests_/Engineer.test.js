const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('Check for engineer github', () => {
    const github = "github"
    const newEngineer = new Engineer("name", "id", "email", github)

  expect(newEngineer.github).toEqual(expect.any(String))
  expect(newEngineer.getGithub()).toBe(github)  
})
test('Check for manager role', () => {
    const newEngineer = new Engineer("name", "id", "email", "github")
    expect(newEngineer.getRole()).toBe("Engineer")  
})