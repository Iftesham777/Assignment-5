document.getElementById("login-btn").addEventListener("click", function () {

    const username = document.getElementById("input-number").value;
    const password = document.getElementById("input-pin").value;

    if (username == "admin" && password == "admin123") {
        window.location.href = "home.html";
    } else {
        alert("Wrong username or password");
    }

});