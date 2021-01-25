var express = require('express')
var router = express.Router()
var db = require('../dbOperations')

/* Register-sivu GET: näytä sivu, POST: tallenna rekisteröityminen */
router.get('/register', function(req, res, next) {
    if (! req.session.loggedin )
        res.render('register', { loggedin: false })
})

router.post('/', function(req, res, next) {
    let user = req.body
    db.createUser( user, function( data ) {
        req.session.message = 'Tunnuksesi on luotu. Nyt voit kirjautua palveluun.'
        res.redirect( '/session/new' )
    })
})

// GET /user/manage: rekisteröintitiedon hallinta (vain kirjautuneena)
router.get('/manage', function(req, res, next) {
    if ( req.session.loggedin ) {
        res.render('manage', { loggedin: true, username: req.session.username })
    } else {
        res.render('login', { loggedin: false, message: 'Kirjaudu palveluun.' })
    }
    
})

module.exports = router
