// Viestien populointi index.ejs-sivun messagesbody id:n kohtaan

function populateMessages() {
    $.getJSON("/messages", function(data) {
        $('#messagesbody').empty()
        let htmlstr
        for (let i = data.length-1; i >= 0 ; i-- )
            htmlstr +=
                '<tr><td>'+data[i].id+'</td>' +
                '<td>'+data[i].sender+'</td>' +
                '<td>'+data[i].topic+'</td>' +    
                '<td>'+data[i].message+'</td></tr>'
        $("#messagesbody").html(htmlstr)
    })
}

// index.ejs-sivun alkumääritykset
$(document).ready(function() {
    populateMessages()
    setInterval( populateMessages, 2000 )
    $("#sendmessage").on('click', function(){
        $.post('/messages', {
            "sender":"anonymous",
            "topic": document.getElementById("messageform").elements["mytopic"].value,
            "message": document.getElementById("messageform").elements["mymessage"].value
        })
    })
})