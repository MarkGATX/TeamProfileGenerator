// const builder = require('../index');
const Manager = require('../lib/Manager')
const testManager = new Manager('Mark', 10, 'mark@mail.com', 231);
describe('Manager', () => {
    it('should return a new object getRole function', () => {
        expect(typeof testManager.getRole).toBe('function');
    });

    it('should return a name value of Mark', () => {
        expect(testManager.name).toBe('Mark');
    });

    it('should return an id value of 10', () => {
        expect(testManager.id).toBe(10);
    });

    it('should return an email value of mark@mail.com', () => {
        expect(testManager.email).toBe('mark@mail.com');
    });

    it('should return an office number value of 231', () => {
        expect(testManager.officeNumber).toBe(231)
    });

});




