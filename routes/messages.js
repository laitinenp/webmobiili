var express = require('express')
var router = express.Router()
var db = require('../dbOperations')

/* API määriteltynä REST-arkkitehtuurin mukaisesti */
/* Osa vielä toteuttamatta - HTTP status-koodi 501 */

/* GET viestien lista. */
router.get('/', function(req, res) {
    db.findMessages(function( result ) {
        res.header('Cache-Control', 'no-cache, no-store, must-revalidate')
        res.json( result )
    })
})

/* POST uusi message (bodyssä json-muodossa). Id lasketaan globaalilla juoksevalla numerolla idcounter */
router.post('/', function(req, res, next) {
    if ( req.session.loggedin ) {
        console.log("POST: " + JSON.stringify(req.body))
        let message = req.body
        message.sender = req.session.username
        db.createMessage( message, function( data ) {
            res.status(201).send("Created succesfully " + data + ".")
        })
    } else {
        res.status(401).send("Unauctorized operation attempt.")
    }
})

/* GET yksittäisen viestin tieodot. Oletus: id on messages-taulukossa kyseisen olion indeksi */
router.get('/:id', function(req, res, next) {
    let id = req.params.id
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate')
    db.findMessageById( req.params.id, function( aMessage ) {
        res.json( aMessage )
    })
});

/* PUT päivitä yksittäinen mökin kenttä json body { fieldName: newValue }. */
router.put('/:id', function(req, res, next) {
    res.status(501).send("Not yet implemented.")
})

/* PATCH päivitä useita kenttiä json body { fieldName1: newValue, fieldName2:newvalue,... }. */
router.patch('/:id', function(req, res, next) {
    res.status(501).send("Not yet implemented.")
})

/* DELETE poista viesti. */
router.delete('/:id', function(req, res, next) {
    res.status(501).send("Not yet implemented.")
})

module.exports = router;
