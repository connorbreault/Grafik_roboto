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
    if (Product === "" || Quantity === "" || File === "" || SizePrice === "") {
        alert("Please fill out all inputs")
    } else {
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
        alert("Added to cart!")
    }
})
$("#submitPremiumBtn").on("click", function () {
    let Product = $("#premiumProductSelect").val()
    let Quantity = $("#premiumQuantitySelect").val()
    let File = $("#premiumLinkImage").val()
    let SizePrice = $("#premiumSizeSelect").val()
    if (Product === "" || Quantity === "" || SizePrice === "") {
        alert("Please fill out all inputs")
    } else {
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
        alert("Added to cart!")
    }
})
$("#submitHouseBtn").on("click", function () {
    let Product = $("#houseProductSelect").val()
    let Quantity = $("#houseQuantitySelect").val()
    let SizePrice = $("#houseSizeSelect").val()
    if (Product === "" || Quantity === "" || SizePrice === "") {
        alert("Please fill out all inputs")
    } else {
        let [Size, Price] = SizePrice.split("-")
        let itemTotal = (Price * Quantity)
        let newItem = {
            Product,
            Quantity,
            Size,
            Price,
            itemTotal
        }
        cartItems.push(newItem)
        updateCart()
        alert("Added to cart!")
    }
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
        <div class="row"> 
                <div class="col s8 l10">
                    <h3 class="cartItemHead">Item ${[i + 1]}</h3>
                </div> 
                <div class="col s4 l2">
                    <a class="btn-floating btn-large waves-effect waves-light red removeCartItem" value="${[i]}"><i class="material-icons">delete</i></a>
                </div> 
            </div>
            
            <div class="row"> 
                <div class="col s6 l3"> 
                    <div class="cartItemInfoHead">Product: </div>
                    <h4 class="itemInfo">${cartItems[i].Product}</h4> 
                </div> 
                <div class="col s6 l3"> 
                    <div class="cartItemInfoHead">Quantity: </div>
                    <h4 class="itemInfo">${cartItems[i].Quantity}</h4> 
                </div> 
                <div class="col s6 l3"> 
                    <div class="cartItemInfoHead">Total: </div>
                    <h4 class="itemInfo">$${cartItems[i].itemTotal.toFixed(2)}</h4> 
                </div>
                <div class="col s6 l3"> 
                    <div class="cartItemInfoHead">Size: </div>
                    <h4 class="itemInfo">${cartItems[i].Size}</h4>  
                </div> 
            </div> 
        </div>`
            // <div class="row">
            // <div class="col s12 l8 offset-l2">
            // <p><div class="cartItemInfoHead">Img: </div>${cartItems[i].File}</p> 
            // </div> 

            // </div>
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
    }
    $("#total").html(`$${cartTotal.toFixed(2)}`)
}

// === REMOVE ITEM === //
$(document.body).on("click", ".removeCartItem", function () {
    let value = $(this).attr("value")
    if (value > -1) {
        cartItems.splice(value, 1);
    }
    updateCart()
})



// === CHECKOUT SHOW/HIDES === //
$("#checkoutBtn").on("click", function () {
    $(".cartDiv , .checkoutButtonDiv").addClass("hidden")
    $(".orderUserInfo").removeClass("hidden")
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