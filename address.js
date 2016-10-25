'use strict' // ALWAYS

const conf = require('./conf.json');


module.exports = class Address {

    static random() {
        return require(`./addresses/${conf.dimensions}d`).random();
    }

    neighbours() {
        throw Error('unimplemented');
    }

};
