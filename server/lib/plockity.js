/*
  Inits plockity for entire app
  ---
  You do not have to do this, as you can simply `new Plockity`
  each time you want to use the adapter. Doing it this way only
  gets a session ONCE from the server, rather than retrieving a
  key each time you use it. This works via node module cyclic
  dependencies.
 */

var PlockityAdapter = require('plockity-node');

var applicationAdapter = new PlockityAdapter({
  apiKey: 'mykey' // Replace with environmental var!
});

module.exports = applicationAdapter;
