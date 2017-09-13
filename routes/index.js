var express = require('express');
var router = express.Router();
var database = require('../db/knex');

function getValues(obj) {
  let keyArr = [];
  for(var key in obj) {
    keyArr.push(obj[key])
  }
  return keyArr
};


/* GET home page. */
router.get('/checklist', (req, res) => {
  database('checklist').select()
    .then((checklist) => {
      res.status(200)
      res.render('index.pug', {
        itemName: Object.keys(checklist[0]),
        isChecked: getValues(checklist[0])
     })
    })
    .catch((error) => {
      res.status(500).json({
        error
      })
    });
});

module.exports = router;
