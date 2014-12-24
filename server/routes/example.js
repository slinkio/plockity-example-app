var express = require('express'),
    handler = require('../handlers/example');

module.exports = function( app ) {
  var exampleRouter = express.Router();

  exampleRouter.get('/', handler.fetch);
  exampleRouter.post('/', handler.create);
  exampleRouter.post('/compare', handler.compare);

  app.use('/api/example', exampleRouter);
};
