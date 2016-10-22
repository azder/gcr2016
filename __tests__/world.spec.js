/**
 * Created by azder on 2016-10-22.
 */

'use strict'; // ALWAYS

const world = require('../src/world');
const Cell = require('../src/Cell');

describe('world', () => {

    it('should exist', ()=> {

        expect(world).toBeDefined();

    });

    it('should have a matrix of state', ()=> {

        expect(world.state).toBeDefined();
        expect(world.state).toBeInstanceOf(Array);

        world.state.map(
            arr => expect(arr).toBeInstanceOf(Array)
        );

    }); // it

    it('should have cells of type Cell', ()=> {

        world.state.map(
            arr => (
                arr.map(
                    cell => {
                        expect(arr).toBeDefined();
                        expect(arr).toBeInstanceOf(Cell);
                    }
                )
            )
        ); // world.state
    }); // it

}); // define
