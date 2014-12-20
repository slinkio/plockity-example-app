module.exports = function(app) {
  var express = require('express');
  var exampleRouter = express.Router();
  exampleRouter.get('/', function(req, res) {
    res.send({example:[]});
  });
  app.use('/api/example', exampleRouter);
};
