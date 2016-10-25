const R = require('ramda');

class World {

    constructor() {
        this.state = R.range(0, 100).map(
            row =>
                R.range(0, 100).map(
                    cell => ({
                        alive: 1
                    })
                )
        );
    }

}

module.exports = World;
