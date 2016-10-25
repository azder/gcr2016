'use strict'; // ALWAYS

const Address = require('./address');

const ident = a => a;
const noop = ()=> {
};

// executres fn only if test returns true
const iff = (test, fn) => test() ? fn() : noop();

const print = (...args) => console.log(...args);

class City {

    constructor() {
        this.population = new Map();
    }

    exists(address) {
        return this.population.has(address);
    }

    add(address, person) {
        this.exists(address) || this.population.set(address, person);
    }

}

const skopje = new City();

const center = Address.random();
const neighbours = center.neighbours();

skopje.add(center, {name: 'goran'});

print(skopje, center, neighbours);
