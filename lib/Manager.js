const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        returns('Manager');
    };

}

const manager = new Manager('Jake', 4, 'jake@email', 2);

