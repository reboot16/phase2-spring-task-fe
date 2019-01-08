$(document).ready(function(){
    var urlString = window.location.href;
    var url = new URL(urlString);
    var id = url.searchParams.get("id");

    loadData();

    $("#logout").click(function(){
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: "/logout",
            dataType: "json",
            success: function(){
                window.location = "login.html";
            }
        });
    });
    

    function loadData(){
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: "/user/" + id,
            dataType: "json",
            success: function(response){
                var user = response.data;

                $("#employee-profile").append(
                    "<tr><td>Name</td><td>" + user.name + "</td></tr>" +
                    "<tr><td>Name</td><td>" + user.nim + "</td></tr>" +
                    "<tr><td>Name</td><td>" + user.username + "</td></tr>"
                );
            },
            error: function(){
                alert("Error");
            }
        });
    }

});