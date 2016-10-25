'use strict'; // ALWAYS


const {randint} = require('../util.js');
const Address = require('../address');

module.exports = class Address3D extends Address {
    constructor(x, y, z) {
        super();
        this.x = x;
        this.y = y;
        this.z = z;
    }

    static random() {
        return new Address3D(randint(), randint(), randint());
    }
};
