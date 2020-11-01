/* Add your JavaScript to this file */

var email = document.getElementsByClassName("email");
var button = document.getElementsByClassName("btn");

button.onclick = function(){
    if (email.value == ""){
        document.getElementsByClassName("message").innerHTML ="Please Enter A Valid Email Address";
    }else{
        document.getElementsByClassName("message").innerHTML ="Thank You! Your email address" + `${email}`+"had been added to our mailing list!";
    }
}