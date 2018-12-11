var username;

//når der bliver klikket på login
function login() {
    username = $("#username").val();
//checker hvad der står og sender brugerne til en ny html side
    if (username == "bruger"){
        location.href = "test.html"
    } else if (username == "superbruger"){
        location.href = "superbruger.html"
    }



}

