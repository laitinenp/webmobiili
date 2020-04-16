var idcounter = 2;

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
        let id = idcounter++
        messages[ id ] = msg
        messages[ id ].id = id
        callback(id)
    },

    modifyMessageById : function ( id, updatedata ) {

    }

}
