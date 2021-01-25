document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submit_email").addEventListener("submit", e => {
        e.preventDefault()
        console.log("listener")
        var form = new FormData(document.getElementById("submit_email"))
        var email = form.get("email")
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        var message = ""
        if (email.match(mailformat)) {
            message = "Email successfully recorded"
        } else {
            message = "Invalid email address"
        }
        document.getElementById("message").innerHTML = "<h3>" + message + "</h3>"
        return false 
    })
})