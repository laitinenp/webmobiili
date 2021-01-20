var express = require('express')
var router = express.Router()
var db = require('../dbOperations')

/* GET home page. */
router.get('/', function(req, res, next) {
  db.findMessages(function(msgs) {
    let clone = Array.from( msgs )
    res.render('index', {
      title: 'Viestit',
      messages: clone.reverse()
    })
  })
})

/* GET api-dokumentti. */
router.get('/apidescr', function(req, res, next) {
  res.render('apidescr', {})
})

router.get('/fab', function(req, res, next) {
  res.render('test', {})
})

module.exports = router;
