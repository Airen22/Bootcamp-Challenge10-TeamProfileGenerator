const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('Check that new Engineer() construct gets created with given github parameter', () => {

    const newEngineer = new Engineer("James", 2341, "james@mail.com", "GitHub")

    expect(newEngineer.getGithub()).toBe("GitHub")  
})
test('Check that getRole() returns "Engineer"', () => {
    const newEngineer = new Engineer("James", 2341, "james@mail.com", "GitHub")
    
    expect(newEngineer.getRole()).toBe("Engineer")  
})