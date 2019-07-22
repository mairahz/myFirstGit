$(document).ready(function() {
    $('#loginform').submit(function(event){
        event.preventDefault();
        ajaxPost();
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
            success : function(valid) {
                var status = JSON.parse(valid);
                if ( status.ok == true) {
                    $("#postResultDiv").removeClass("hidemessage");
                    $("#postResultDiv").addClass("showmessage");
                    $("#errorMsg").addClass("hidemessage");
                    $("#errorMsg").removeClass("showmessage");
                } else {
                    $("#errorMsg").removeClass("hidemessage");
                    $("#errorMsg").addClass("showmessage");
                    $("#postResultDiv").addClass("hidemessage");
                    $("#postResultDiv").removeClass("showmessage");
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