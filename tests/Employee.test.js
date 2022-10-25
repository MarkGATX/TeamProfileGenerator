// const builder = require('../index');
const Employee = require('../lib/Employee')
const testEmployee = new Employee('Luke', 20, 'luke@mail.com')

describe('Employee', () => {
    it('should return a new fucntion getRole', () => {
        expect(typeof testEmployee.getRole).toBe('function');
    });

    it('should return function called getId', () => {
        expect(typeof testEmployee.getId).toBe('function');
    });

    it('should return the value of the function to be 20', () => {
        expect(testEmployee.getId()).toBe(20);
    });

    it('should return the value of the function getEmail to luke@mail.com', () => {
        expect(testEmployee.getEmail()).toBe('luke@mail.com');
    });

    it('should return a new function that returns the class of Employee', () => {
        expect(testEmployee.getRole()).toBe('Employee');
    });

    it('should return a the name value of Luke', () => {
        expect(testEmployee.name).toBe('Luke');
    });

    it('should return the id value of 20', () => {
        expect(testEmployee.id).toBe(20);
    });

    it('should return the email value of luke@mail.com', () => {
        expect(testEmployee.email).toBe('luke@mail.com');
    });

});
