var email = document.querySelector("input[type=text]");
var submit = document.querySelector("form");
var warning = document.createElement("p");
warning.classList.add("atention")


submit.addEventListener("submit", function checkEmail() {
    event.preventDefault();

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
        warning.innerHTML = "Oops! Please add your email";
        submit.appendChild(warning);
        email.focus;
        return false;
    }
});