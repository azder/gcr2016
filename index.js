/**
 * Created by azder on 2016-10-22.
 */

'use strict'; // ALWAYS

const Address = require('./address');
const City = require('./city.js');

const skopje = new City();

const five = Address.a2(5, 5);
const six = Address.a2(6, 6);

skopje.add(five, Person.from({name: 'goran'}));
skopje.add(six, Person.from({name: 'damjan'}));

console.log({
         skopje,
    pop: skopje.people()
});
