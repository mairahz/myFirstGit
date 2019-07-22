$(document).ready(function() {
    console.log("ready!")
    $('#loginform').submit(function(event){
        event.preventDefault();
        ajaxPost();
        console.log("done!")
    });

    function ajaxPost() {
        // Prepare Form Data from web form.
        var formData = {
            email : $('#email').val(),
            upwd : $('#upwd').val()
        }
        $.ajax({
            type : "POST",
            contentType : "application/json",
            url : window.location + "/api/login",
            data : JSON.stringify(formData),
            dataType : 'json',
            success : function(customer) {
                if (customer.valid == true) {
                    $("#postResultDiv").html("<p>" + "Login Successfully! " + "Email Address: " + customer.email + "</br>" +
                    "Password: " + customer.upwd + "</br>" + "Valid User: " + customer.valid + "</p>");
                } else {
                    $("#postResultDiv").html("<p>Error logging in </p>");
                }
            },
            error : function(e){
                alert("Error!")
                console.log("ERROR: ", e);
            }
        });
        // Reset formData after posting
        resetData();
    }

    function resetData() {
        $("#email").val("");
        $("#upwd").val("");
    }
});