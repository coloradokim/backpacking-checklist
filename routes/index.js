var express = require('express');
var router = express.Router();
var database = require('../db/knex');

/* GET home page. */

router.get('/', (req, res) => {
  database('checklist').select()
    .then((checklist) => {
      res.status(200).json(checklist)
    })
    .catch((error) => {
      res.status(500).json({error})
    });
});

module.exports = router;
