var express = require('express')
const { checkCredentials } = require('../dbOperations')
var router = express.Router()

/* Handle session resource
GET    /session/new gets the webpage that has the login form
POST   /session authenticates credentials against database
DELETE /session destroys session and redirect to /
*/

/* Login-sivu */
router.get('/new', function(req, res, next) {
  console.log("MSG: " + req.session.message)
  let msg = (req.session.message) ? req.session.message : 'Kirjaudu palveluun.'
  if (! req.session.loggedin)
    res.render('login', { loggedin: false, message: msg })
  else
    res.render('index', { loggedin: true, username: req.session.username })
})

/* Kirjautuminen */
router.post('/', function(req, res, next) {
  // Tarkistetaan kirjautuminen req.body.username ja req.body.password -tietojen perusteella
  checkCredentials( req.body, function( result ) { 
    if ( result ) {
      req.session.loggedin = true
      req.session.username = req.body.username
      res.redirect( req.session.forward != undefined ? req.session.forward : "/" )
    } else {
      req.session.message = "Väärä käyttäjätunnus tai salasana. Syötä tiedot uudestaan tai rekisteröidy."
      res.redirect( '/session/new' )
    }
  })
})

/* Uloskirjautuminen */
router.get('/logout', function(req, res, next) {
  req.session.destroy()
	res.redirect('/')
})
router.delete('/', function(req, res, next) {
  req.session.destroy()
	res.redirect('/')
})

module.exports = router
