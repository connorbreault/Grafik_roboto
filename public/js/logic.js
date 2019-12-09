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
        File,
    }
    cartItems.push(newItem)
    updateCart()
})
$("#submitPremiumBtn").on("click", function () {
    let Product = $("#premiumProductSelect").val()
    let Size = $("#premiumSizeSelect").val()
    let Quantity = $("#premiumQuantitySelect").val()
    let File = $("#premiumLinkImage").val()
    let newItem = {
        Product,
        Size,
        Quantity,
        File,
    }
    cartItems.push(newItem)
    updateCart()
})
$("#submitHouseBtn").on("click", function () {
    let Product = $("#houseProductSelect").val()
    let Size = $("#houseSizeSelect").attr("data-value")
    let Price = $("#houseSizeSelect").val()
    let Quantity = $("#houseQuantitySelect").val()
    let itemTotal = (Price * Quantity)
    let File = $("#houseLinkImage").val()
    alert(`${itemTotal} = SIZE=${Size} => PRICE=${Price} QUANTITY=${Quantity}`)
    // let newItem = {
    //     Product,
    //     Size,
    //     Price,
    //     Quantity,
    //     File,
    //     itemTotal
    // }
    // cartItems.push(newItem)
    // updateCart()
})

function updateCart() {
    $(".cartDiv").empty()
    for (let i = 0; i < cartItems.length; i++) {
        let newItem = `
        <div class="cartList">
        <h2>Item ${[i + 1]}</h2>
        <div class="row"> 
        <div class="col s12 l4"> 
        <h3><div class="cartItemInfoHead">Product: </div>${cartItems[i].Product}</h3> 
        </div> 
        <div class="col s6 l4"> 
        <h3><div class="cartItemInfoHead">Quantity: </div>${cartItems[i].Quantity}</h3> 
        </div> 
        <div class="col s6 l4"> 
        <h3><div class="cartItemInfoHead">Size: </div>${cartItems[i].Size}</h3> 
        </div> 
        </div> 
        <div class="row"> 
        <div class="col s12 l4"> 
        <h3><div class="cartItemInfoHead">Price: </div>${cartItems[i].Price}</h3> 
        </div> 
        <div class="col s6 l4"> 
        <h3><div class="cartItemInfoHead">Total: </div>${cartItems[i].itemTotal}</h3> 
        </div> 
        </div>
        <div class="row">
        <div class="col s12 l8">
        <p><div class="cartItemInfoHead">Img: </div>${cartItems[i].File}</p> 
        </div> 
        <div class="col s12 l2">
        <a class="btn-floating btn-large waves-effect waves-light red removeCartItem" value="${[i]}"><i class="material-icons">delete</i></a>
        </div> 
        </div>
        </div>`
        $(".cartDiv").append(newItem)
    }
}

// $(".removeCartItem").addEventListener("click", function () {
//     alert("hi")
//     this.parentElement.parentElement.parentElement.remove()
// })
$(document.body).on("click", ".removeCartItem", function () {
    let value = $(this).val()
    // this.parentElement.parentElement.parentElement.remove()
    if (value > -1) {
        cartItems.splice(value, 1);
    }
    updateCart()
})

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