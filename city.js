'use strict'; // ALWAYS

const POP = Symbol('population');

class City {

    constructor() {
        this[POP] = new Map();
    }

    people() {
        return Array.from(this[POP].values());
    }

    add(location, person) {
        this[POP].set(location, person);
    }

    remove(location){
        this[POP].remove(location);
    }

}

module.exports = City;
