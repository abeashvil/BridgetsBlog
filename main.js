//let username = "jishybaddy123";
//let password = "Tennis12";
let user = $("#un").val();
let pass = $("#pw").val();

$("#sign_in").click(function(){
if (user.length != 13){
                alert("Incorrect username! Please try again.");
}
if (pass.length != 8){
                alert("Incorrect password! Please try again.");
}
  if (pass.length == 8 && user.length == 13){
               $.mobile.navigate( "#mainpage" ,  {transition:"pop"});
  }
