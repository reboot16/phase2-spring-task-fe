$(document).ready(function(){
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
        })
    });
    function loadData(){
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: "/user/" + id,
            dataType: "json",
            success: function(response){
                $.each(response.data, function(i, user){
                    $('#table-content').append(
                        "<tr>" +
                            "<td>" + (i+1) + "</td>" +
                            "<td>" + user.nim + "</td>" +
                            "<td>" + user.name + "</td>" +
                            "<td>" + user.username + "</td>" +
                        "<tr>"
                    );
                });
            },
            error: function(){
                alert("Error");
            }
        });
    }
});