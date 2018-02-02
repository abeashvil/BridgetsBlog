//let username = "jishybaddy123";
//let password = "Tennis12";


// wait for jquery to load before using $
'use strict';
$(function(){

$("#blog_area1").html(localStorage.getItem("blog"));
$("#blog_area").html(localStorage.getItem("blog2"));
$("#textarea-1").html(localStorage.getItem("blog"));
$("#date").html(localStorage.getItem("blog2"));



$("#welcome").click(function(){
$.mobile.navigate( "#main_page" ,  {transition:"pop"});
});

    $("#sign_in").click(function(){

        let user = $("#un").val();
        let pass = $("#pw").val();


        if (user.length != 13){
            alert("Incorrect username! Please try again.");
        }
        if (pass.length != 8){
            alert("Incorrect password! Please try again.");
        }
        if (pass.length == 8 && user.length == 13){
           $.mobile.navigate( "#edit_page" ,  {transition:"pop"});
        }

    });

    $("#submit_blog").click(function(){


    let blogarea = $("#textarea-1").val();
    let datearea = moment().format('MMMM Do YYYY');
    localStorage.getItem("blog");
    localStorage.getItem("blog2");






             localStorage.setItem("blog" , blogarea);
             localStorage.setItem("blog2" , datearea);

             $.mobile.navigate( "#main_page" ,  {transition:"pop"});


});




});



