// === MATERIALIZE FUNCTIONS === //
$(document).ready(function () {
    M.AutoInit();
});
function js_Load() {
    document.body.style.visibility = 'visible'
}

$("#submitIssueBtn").on("click", function () {
    let Name = $("#icon_prefix").val().trim()
    let Phone = $("#icon_telephone").val().trim()
    let Email = $("#icon_email").val().trim()
    let Message = $("#messageBox").val().trim()
    if (Name === "" || Phone === "" || Email === "" || Message === "") {
        alert("Please fill out all fields")
    } else {
        $("#issueBox").addClass("hidden")
        $("#loadingDiv").removeClass("hidden")
        let templateParams = {
            type: "ISSUE",
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
                $("#thanksDiv").removeClass("hidden")
            }, function (error) {
                console.log('FAILED...', error)
                $("#loadingDiv").addClass("hidden")
                $(".returnHomeBox").addClass("hidden")
                $("#errorDiv").removeClass("hidden")
            });
    }
})