// === MATERIALIZE FUNCTIONS === //
$(document).ready(function () {
    M.AutoInit();
    var elem = document.querySelector('.collapsible.expandable');
    var instance = M.Collapsible.init(elem, {
        accordion: false
    });
});
function js_Load() {
    document.body.style.visibility = 'visible'
}


// === SUBMIT ORDERS === //
$("#submitOrderBtn").on("click", function () {
    let Product = $("#productSelect").val().trim()
    let Color = $("#colorSelect").val().trim()
    // let Size = $("#psizeSelect").val().trim()
    let Quantity = $("#quantitySelect").val().trim()
    let File = $("#fileInput").val().trim()
    let First = $("#first_name").val().trim()
    let Last = $("#last_name").val().trim()
    let Phone = $("#icon_telephone").val().trim()
    let Email = $("#email").val().trim()
    let City = $("#city").val().trim()
    let State = $("#state").val().trim()
    let Address = $("#address").val().trim()
    let Zipcode = $("#zip_code").val().trim()
    alert(`Product: ${Product} -- Color: ${Color} -- Quantity: ${Quantity} -- File: ${File} -- First: ${First} -- Last: ${Last} -- Phone: ${Phone} -- Email: ${Email} -- City: ${City} -- State: ${State} -- Address: ${Address} -- Zipcode: ${Zipcode}`)
})