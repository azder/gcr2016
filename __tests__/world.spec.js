'use strict'; // ALWAYS

const {flatten} = require('ramda');
const World = require('../src/world.js');

describe('a world', () => {

    it('is a constructor for the world', () => {
        expect(new World()).toBeDefined();
    });

    it('needs to have a state', () => {
        expect(new World().state).toBeDefined();
    });

    it('has a state of an array of arrays', ()=> {
        const w = new World();
        expect(w.state).toBeInstanceOf(Array);
        w.state.map(array=> expect(array).toBeInstanceOf(Array));
    });

    it('has state (100x100) populated with cells that are alive or dead', () => {
        const s = (new World()).state;
        expect(s.length).toBe(100);
        flatten(s).map(cell => expect(cell.alive).toBeDefined());
    });

    it('has a method for next tick, shouldLive', () => {
        const s = (new World()).state;

    })

});
