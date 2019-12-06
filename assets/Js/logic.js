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
    let Product = $("#productSelect").val()
    let Color = $("#colorSelect").val()
    let Size = $("#sizeSelect").val()
    let Quantity = $("#quantitySelect").val()
    let File = $("#linkImage").val()
    let First = $("#first_name").val()
    let Last = $("#last_name").val()
    let Phone = $("#icon_telephone").val()
    let Email = $("#email").val()
    let City = $("#city").val()
    let State = $("#state").val()
    let Address = $("#address").val()
    let Zipcode = $("#zip_code").val()
    if (Product === null || Color === null || Size === null || Quantity === null || File === "" || First === "" || Last === "" || Phone === "" || Email === "" || City === "" || State === "" || Address === "" || Zipcode === "") {
        alert("Please fill out all forms")
    } else {
        alert(`Product: ${Product} -- Color: ${Color} -- Size: ${Size} -- Quantity: ${Quantity} -- *File: ${File}* -- First: ${First} -- Last: ${Last} -- Phone: ${Phone} -- Email: ${Email} -- City: ${City} -- State: ${State} -- Address: ${Address} -- Zipcode: ${Zipcode}`)
    }
})