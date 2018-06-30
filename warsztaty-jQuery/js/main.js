$(function(){
    'use strict';
    var btn = $("#przycisk");
    
    btn.on("click", function(){

        $.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", function(data) {
            console.log(data.userName);
            
           // $("#container").append(data.userId);
            $("#container").html("<p>"+data.userName+"</p>");//wstawia paragraf w diva, a w nim tekst data.userName
        });
    });
    
});