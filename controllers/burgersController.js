var express = require('express');

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require('../models/burgers.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log('This is the burger object',hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/api/burgers', function(req, res) {
  burger.create(['burger_name', 'devoured'],
    [req.body.burger_name, req.body.devoured],
    function(result) {
      res.json(console.log('This is the post route',{ id: result.insertId }));
    });
});

router.put('/api/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  console.log('this is condition from put', condition);

  burger.update(
    {
      burger: req.body.burger
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

router.delete('/api/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// Export routes for server.js to use.
module.exports = router;
