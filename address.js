/**
 * Created by azder on 2016-10-22.
 */


'use strict'; // ALWAYS

class Address {

    static a2(...args) {
        return new Address2D(...args);
    }

    static a3(...args) {
        return new Address3D(... args);
    }

}

class Address2D {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

}

class Address3D {

    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

}

module.exports = Address;
