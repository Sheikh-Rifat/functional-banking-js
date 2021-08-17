document.getElementById("submit-btn").addEventListener("click", function () {

    const emailInput = document.getElementById("user-email");
    const passWOrdInput = document.getElementById("user-password");

    // get value
    const email = emailInput.value;
    const password = passWOrdInput.value;

    // login validating

    if (email == "brotherssk57@gmail.com" && password == "Rifat01917997474") {
        window.location.href = "banking-site.html";
    } else {
        const error = document.getElementById("error-msg");

        error.innerText = "Please check your mail or password";
    }

});