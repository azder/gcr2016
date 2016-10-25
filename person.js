/**
 * Created by azder on 2016-10-22.
 */


'use strict'; // ALWAYS


class Person {

    constructor(options) {
        Object.assign(this, options);
    }

    static from(options) {
        return new Person(options);
    }
}

module.exports = Person;
