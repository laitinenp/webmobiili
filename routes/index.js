var express = require('express')
var router = express.Router()
var db = require('../dbOperations')

/* GET home page. */
router.get('/', function(req, res, next) {
  db.findMessages(function(msgs) {
    let clone = Array.from( msgs )
    console.log(req.session.loggedin)
    res.render('index', {
      loggedin: req.session.loggedin,
      username: req.session.username,
      messages:clone.reverse()
    })
  })
})

/* GET api-dokumentti. */
router.get('/apidescr', function(req, res, next) {
  res.render('apidescr', { 
    loggedin: req.session.loggedin,
    username: req.session.username
  })
})

module.exports = router;
