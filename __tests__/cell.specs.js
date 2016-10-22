'use strict'; // ALWAYS

const Cell = require('../src/Cell');


describe('cell', () => {

  it('should exist', ()=> {

    expect(Cell).toBeDefined();

  }); // it

  it('should be a construction function', ()=> {

    expect(Cell).toBeInstanceOf(Function);

  }); // it


  it('should create a new cell', ()=> {

    const cell = new Cell();
    expect(cell).toBeDefined();

  }); // it

  it('should create a new cell', ()=> {

    const cell = new Cell();
    expect(cell.isAlive).toBeDefined();

  }); // it

}); // describe


