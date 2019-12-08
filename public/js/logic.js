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


var cartItems = []

// === SUBMIT ORDERS === //
$("#submitStandardBtn").on("click", function () {
    let Product = $("#standardProductSelect").val()
    let Size = $("#standardSizeSelect").val()
    let Quantity = $("#standardQuantitySelect").val()
    let File = $("#standardLinkImage").val()
    let newItem = {
        Product,
        Size,
        Quantity,
        File
    }
    cartItems.push(newItem)
    updateCart()
    alert(cartItems)
})
$("#submitPremiumBtn").on("click", function () {
    let premiumProduct = $("#premiumProductSelect").val()
    let premiumSize = $("#premiumSizeSelect").val()
    let premiumQuantity = $("#premiumQuantitySelect").val()
    let premiumFile = $("#premiumLinkImage").val()
    alert(`${premiumProduct} ${premiumQuantity} ${premiumSize} ${premiumFile}`)
})
$("#submitHouseBtn").on("click", function () {
    let houseProduct = $("#houseProductSelect").val()
    let houseSize = $("#houseSizeSelect").val()
    let houseQuantity = $("#houseQuantitySelect").val()
    let houseFile = $("#houseLinkImage").val()
    alert(`${houseProduct} ${houseQuantity} ${houseSize} ${houseFile}`)
})

function updateCart() {
    $(".cartDiv").empty()
    for (let i = 0; i < cartItems.length; i++) {
        `
        <div>
            <h1>${cartItems[i]}</h1>
        </div>
        `
    }
}

$("#submitOrderBtn").on("click", function () {
    let First = $("#first_name").val()
    let Last = $("#last_name").val()
    let Phone = $("#icon_telephone").val()
    let Email = $("#email").val()
    let City = $("#city").val()
    let State = $("#state").val()
    let Address = $("#address").val()
    let Zipcode = $("#zip_code").val()
    if (First === "" || Last === "" || Phone === "" || Email === "" || City === "" || State === "" || Address === "" || Zipcode === "") {
        alert("Please fill out all forms")
    } else {
        alert(`First: ${First} -- Last: ${Last} -- Phone: ${Phone} -- Email: ${Email} -- City: ${City} -- State: ${State} -- Address: ${Address} -- Zipcode: ${Zipcode}`)
    }
})