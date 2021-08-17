document.getElementById("submit-btn").addEventListener("click", function () {

    const emailInput = document.getElementById("user-email");
    const passWOrdInput = document.getElementById("user-password");

    // get value
    const email = emailInput.value;
    const password = passWOrdInput.value;

    // login validating

    if (email == "contact@rifat.com" && password == "1234") {
        window.location.href = "banking-site.html";
    } else {
        const error = document.getElementById("error-msg");

        error.innerText = "Please check your mail or password";
    }

});