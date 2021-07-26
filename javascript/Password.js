function getpassword(){
    var chars = "01234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*(){}[]";
    var passwordLength = 16;
    var password = "";


    for(var i=0; i<passwordLength;i++){
        var randomNUmber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNUmber,randomNUmber+1);
    }
    document.getElementById("password").value = password;
}
