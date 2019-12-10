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
    let Quantity = $("#standardQuantitySelect").val()
    let File = $("#standardLinkImage").val()
    let SizePrice = $("#standardSizeSelect").val()
    let [Size, Price] = SizePrice.split("-")
    let itemTotal = (Price * Quantity)
    let newItem = {
        Product,
        Size,
        Quantity,
        File,
        Price,
        itemTotal
    }
    cartItems.push(newItem)
    updateCart()
})
$("#submitPremiumBtn").on("click", function () {
    let Product = $("#premiumProductSelect").val()
    let Quantity = $("#premiumQuantitySelect").val()
    let File = $("#premiumLinkImage").val()
    let SizePrice = $("#premiumSizeSelect").val()
    let [Size, Price] = SizePrice.split("-")
    let itemTotal = (Price * Quantity)
    let newItem = {
        Product,
        Size,
        Quantity,
        File,
        Price,
        itemTotal
    }
    cartItems.push(newItem)
    updateCart()
})
$("#submitHouseBtn").on("click", function () {
    let Product = $("#houseProductSelect").val()
    let Quantity = $("#houseQuantitySelect").val()
    let File = $("#houseLinkImage").val()
    let SizePrice = $("#houseSizeSelect").val()
    let [Size, Price] = SizePrice.split("-")
    let itemTotal = (Price * Quantity)
    let newItem = {
        Product,
        Size,
        Quantity,
        File,
        Price,
        itemTotal
    }
    cartItems.push(newItem)
    updateCart()
})


// === UPDATE CART === //
function updateCart() {
    $(".cartDiv").empty()

    // === SHOW/HIDE CART DIVS === //
    if (cartItems.length > 0) {
        $(".checkoutButtonDiv").removeClass("hidden")
        $('.noItemsInCart').addClass("hidden")


        for (let i = 0; i < cartItems.length; i++) {
            // === RENDER CART ITEMS TO CART DIV === //
            let newItem = `
        <div class="cartList">
        <h3 class="cartItemHead">Item ${[i + 1]}</h3>
        <div class="row"> 
        <div class="col s12 l4"> 
        <h4><div class="cartItemInfoHead">Product: </div>${cartItems[i].Product}</h4> 
        </div> 
        <div class="col s6 l4"> 
        <h4><div class="cartItemInfoHead">Quantity: </div>${cartItems[i].Quantity}</h4> 
        </div> 
        <div class="col s6 l4"> 
        <h4><div class="cartItemInfoHead">Size: </div>${cartItems[i].Size}</h4> 
        </div> 
        </div> 
        <div class="row"> 
        <div class="col s12 l6"> 
        <h4><div class="cartItemInfoHead">Total: </div>$${cartItems[i].itemTotal.toFixed(2)}</h4> 
        </div> 
        <div class="col s12 l6">
        <a class="btn-floating btn-large waves-effect waves-light red removeCartItem" value="${[i]}"><i class="material-icons">delete</i></a>
        </div> 
        </div>
        <div class="row">
        <div class="col s12 l8 offset-l2">
        <p><div class="cartItemInfoHead">Img: </div>${cartItems[i].File}</p> 
        </div> 
        
        </div>
        </div>`
            $(".cartDiv").append(newItem)
        }
        updateTotal()

    } else {
        $(".checkoutButtonDiv").addClass("hidden")
        $('.noItemsInCart').removeClass("hidden")
    }
}
function updateTotal() {
    // === ADD AND UPDATE TOTAL === //
    let cartTotal = 0
    for (var l = 0; l < cartItems.length; l++) {
        cartTotal = (parseInt(cartTotal) + parseInt(cartItems[l].itemTotal))
        console.log(`total: ${cartTotal} item:${cartItems[l].itemTotal}`)
    }
    $("#totalDiv").html(`$${cartTotal.toFixed(2)}`)
}

// === REMOVE ITEM === //
$(document.body).on("click", ".removeCartItem", function () {
    let value = $(this).attr("value")
    if (value > -1) {
        cartItems.splice(value, 1);
    }
    updateCart()
})


// === FINAL SUBMIT ORDER === //
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