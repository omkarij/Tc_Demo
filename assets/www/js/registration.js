function formValidation()  
{  
var passid = document.registration.passid;
var repassid = document.registration.repassid;  
var uemail = document.registration.email;  
{  
if(passid_validation(passid,repassid,7,12))  
{  
if(ValidateEmail(uemail))  
{  
  
}  
}  
}  
return false;  
}

function passid_validation(passid,repassid,mx,my)  
{  
var passid_len = passid.value.length;
var repassid_len = repassid.value.length; 
var passid_val = passid.value;
var repassid_val = repassid.value; 
if (passid_len == 0 ||passid_len >= my || passid_len < mx)  
{  
alert("Password should not be empty / length be between "+mx+" to "+my); 
	
passid.focus();  
return false;  
}  

if(passid_len!=repassid_len){ 
		alert("Password length does not match.");
		repassid.focus();
		return false;
	}

if(passid_val!=repassid_val){
		alert("Both Passwords are different.");
		repassid.focus();
		return false;
}
return true;  
}  

function ValidateEmail(uemail)  
{  
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(uemail.value.match(mailformat))  
{  
return true;  
}  
else  
{  
alert("You have entered an invalid email address!");  
uemail.focus();  
return false;  
}  
}  