var msgcounter = 2
var usercounter = 1

// Simuloitu tietokantadata
var messages = [
    {
        "id":0,
        "sender":"Gösta",
        "topic":"SmartICT",
        "message":"Heippa koodarit"
    },
    {
        "id":1,
        "sender":"Melinda",
        "topic":"SmartICT",
        "message":"Terkkui"
    }
]

var users = [
    {
        'username': 'username',
        'password': 'password'
    }
]


module.exports = {

    // simuloitu haku tietokannasta
    findMessageById : function ( id, callback ) {
        for ( let i = 0; i < messages.length; i++ ) {
            if ( messages[i].id == id )
                return callback( messages[ i ] )
        }
        return callback( null )
    },

    findMessages : function(callback) {
        return callback(messages)
    },

    createMessage : function ( msg, callback ) {
        let id = msgcounter++
        messages[ id ] = msg
        messages[ id ].id = id
        callback(id)
    },

    modifyMessageById : function ( id, updatedata ) {

    },

    createUser : function ( user, callback ) {
        let id = usercounter++
        users[ id ] = user
        users[ id ].id = id
        callback(id)
    },

    checkCredentials : function ( credentials, callback ) {
        let username = credentials.username
        let password = credentials.password
        for ( let i = 0; i < users.length; i++ ) {
            if ( users[i].username == username && users[i].password == password )
                return callback( true )
        }
        return callback( false )
    }

}
