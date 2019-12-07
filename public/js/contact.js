var emailpass = process.env.emailJS_key
// === MATERIALIZE FUNCTIONS === //
$(document).ready(function () {
    M.AutoInit();
    emailjs.init(emailpass);
});
function js_Load() {
    document.body.style.visibility = 'visible'
}

$("#submitMessageBtn").on("click", function () {
    let Name = $("#icon_prefix").val().trim()
    let Phone = $("#icon_telephone").val().trim()
    let Email = $("#icon_email").val().trim()
    let Message = $("#messageBox").val().trim()
    if (Name === "" || Phone === "" || Email === "" || Message === "") {
        alert("Please fill out all fields")
    } else {
        $("#contactBox").addClass("hidden")
        $("#loadingDiv").removeClass("hidden")
        let templateParams = {
            type: "MESSAGE",
            name: Name,
            number: Phone,
            email: Email,
            message: Message,
        }
        emailjs.send('default_service', 'grafikmessage', templateParams)
            .then(function (response) {
                console.log('Sucessful message send!')
                $("#loadingDiv").addClass("hidden")
                $(".returnHomeBox").addClass("hidden")
                $("#ourContact").addClass("hidden")
                $("#thanksDiv").removeClass("hidden")
            }, function (error) {
                console.log('FAILED...', error)
                $("#loadingDiv").addClass("hidden")
                $(".returnHomeBox").addClass("hidden")
                $("#ourContact").addClass("hidden")
                $("#errorDiv").removeClass("hidden")
            });
    }
})