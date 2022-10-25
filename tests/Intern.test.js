// const builder = require('../index');
const Intern = require('../lib/Intern')
const testIntern = new Intern('Bobby', 11, 'bobby@mail.com', 'University of Texas');

describe('Intern', () => {
    it('should return a new object with a function of getRole', () => {
        expect(typeof testIntern.getRole).toBe('function');
    });

    it('should return a name value of Bobby', () => {
        expect(testIntern.name).toBe('Bobby')
    });

    it('should return an id number of 11', () => {
        expect(testIntern.id).toBe(11);
    });

    it('should return an email value of bobby@mail.com', () => {
        expect(testIntern.email).toBe('bobby@mail.com');
    });

    it('should return a school value of University of Texas', () => {
        expect(testIntern.school).toBe('University of Texas')
    });
})
