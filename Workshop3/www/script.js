import { listenerCount } from "cluster";

$(document).ready(function() {
    $('#loginform').submit(function(event){
        event.preventDefault();
        ajaxPost();
    });

    function ajaxPost() {
        // Prepare Form Data from web form.
        var formData = {
            email : $('#email').val(),
            upwd : $('upwd').val()
        }
        $.ajax({
            type : "POST",
            contentType : "application/json",
            url : window.location + "api/login",
            data : JSON.stringify(formData),
            dataType : 'json',
            success : function(customer) {
                $("postResultDiv").html("<p>" + "Login Successfully!" + "Email Address: " + customer.email + "</br>" +
                "Password: " + customer.upwd + "</br>" + "Valid User: " + customer.valid + "</p>");
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