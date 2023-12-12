function login() {
    var account = JSON.parse(localStorage.getItem("account"));
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (account == null) {
        location.assign("./company_signup.html");
    }
    else {
        for (var i = 0; i < account.length; i++) {
            if ((account[i].email == email) && (account[i].password == password)) {
                //window.location.replace("./project1.html");
                location.assign("./project1.html")
            }
        }
    }
}
