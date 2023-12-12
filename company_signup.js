
function signup(){

    var account = JSON.parse(localStorage.getItem("account"));
    if (account == null) {
        account = [];
    }





    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;

    var error_arr = [];

    var username_notvalid = false;
    var email_notvalid = false;
    var email_foundnotvalid = false;
    var password_notvalid = false;
    var confirmpassword_notvalid = false;


    if (username == "") {
        error_arr.push("username required");
        username_notvalid = true;
    }
    if (email == "" || email.indexOf("@") == -1) {
        error_arr.push("email required");
        email_foundnotvalid = true;
    }
    if(account != null){
        for(var i=0;i<account.length;i++){
            if(email==account[i].email){
                error_arr.push("email is already uesd");
                email_foundnotvalid = true;
                break;
            }
        }
    }

    if (password == "" || password.length < 8) {
        error_arr.push("passwor must be more than 8 characters");
        password_notvalid = true;
    }
    if (confirmpassword == "") {
        error_arr.push("confirm password required");
        confirmpassword_notvalid = true;
    }
    if (confirmpassword !== password) {
        error_arr.push("confirm password is not equal password");
        confirmpassword_notvalid = true;
    }

    if (username_notvalid || email_notvalid || password_notvalid || confirmpassword_notvalid || email_foundnotvalid) {
        var message = "";
        for (var i = 0; i < error_arr.length; i++) {
            message += error_arr[i]+"\n";
        }
        alert(message);
    }
    else{
        var user = {
            "username": username,
            "email": email,
            "password":password
        }
        account.push(user);
        localStorage.setItem("account",JSON.stringify(account));
        alert("done")
    }
}



