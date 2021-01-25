// register.ejs-sivun alkumääritykset
$(document).ready(function() {
    $("#sendregister").on('click', function(){
        $.post('/user', {
            "username": document.getElementById("registerform").elements["username"].value,
            "password": document.getElementById("registerform").elements["password"].value
        })
    })
})