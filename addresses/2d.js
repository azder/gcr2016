'use strict'; // ALWAYS

const {randint} = require('../util.js');
const Address = require('../address');

module.exports = class Address2D extends Address {

    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
    }

    static random() {
        return new Address2D(randint(), randint());
    }

    neighbours() {

        return [
            new Address2D(this.x - 1, this.y - 1),
            new Address2D(this.x - 1, this.y),
            new Address2D(this.x - 1, this.y + 0),

            new Address2D(this.x, this.y - 1),
            new Address2D(this.x, this.y),
            new Address2D(this.x, this.y + 1),

            new Address2D(this.x + 1, this.y - 1),
            new Address2D(this.x + 1, this.y),
            new Address2D(this.x + 1, this.y + 1)
        ];

    }

};
