

var names = document.getElementById("name");
var phone = document.getElementById("phone");
var mail = document.getElementById("email");
var error=document.getElementsByClassName("error");
var form = document.getElementById("form")
var check=true;

function add(){
  check=true;
    NameValid(names.value);
    phoneValid(phone.value);
    EmailValid(mail.value);
   if(check){
   form.reset()
   }
 
}

function NameValid(x){
 if (!x) {
   error[0].innerText = "Your Name is required";
   check = false;
 } 
 else {
   var regex =/^[a-zA-Z]+$/
   if (!regex.test(x)) {
     error[0].innerText = "Your name is invalid";
     check = false;
   } else {
     error[0].innerText = "";
   }
 }
}

function phoneValid(x){
  if (!x) {
    error[1].innerText = "Your phone is required";
    check = false;
  } 
  else {
    var regex =/^[0-9]+$/
    if (!regex.test(x)) {
      error[1].innerText = "Invalid phone number";
      check = false;
    } else {
     error[1].innerText = "";
    }
  }
 }

function EmailValid(x){
    if (!x) {
      error[2].innerText = "Your email is required";
      check = false;
    } 
    else {
      var reg = /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
      if (!reg.test(x)) {
        error[2].innerText = "Invalid email";
        check = false;
      } else {
        error[2].innerText = "";
      }
    }
}
