// const builder = require('../index');
const Engineer = require('../lib/Engineer')
const testEngineer = new Engineer('Alice', 20, 'alice@mail.com', 'alicecode');

describe('Engineer', () => {
    it('should return a new object with a getRole function', () => {
        expect(typeof testEngineer.getRole).toBe('function');
    });

    it('should return a name value of Alice', () => {
        expect(testEngineer.name).toBe('Alice')
    });
    it('should return an id number of 20', () => {
        expect(testEngineer.id).toBe(20);
    });
    it('should return an email value of alice@mail.com', () => {
        expect(testEngineer.email).toBe('alice@mail.com');
    });
    it('should return a GitHub value of alicecode', () => {
        expect(testEngineer.gitHub).toBe('alicecode')
    });

});
