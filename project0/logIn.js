var username;
var password;



function login() {
    username = $("#username").val();
    password = $("#pass");

    document.getElementById("text").innerText="clicked";

    if (username == "bruger"){
        location.href = "test.html"
    } else if (username == "superbruger"){
        location.href = "superbruger.html"
    }



}

