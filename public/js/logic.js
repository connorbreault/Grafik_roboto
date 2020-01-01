// === MATERIALIZE FUNCTIONS === //
$(document).ready(function () {
    M.AutoInit();
    var elem = document.querySelector('.collapsible.expandable');
    var instance = M.Collapsible.init(elem, {
        accordion: false
    });
    emailjs.init("user_deAIEYtIkIShexUgNNM3h");
});
// === ONLOAD === //
function js_Load() {
    document.body.style.visibility = 'visible'
}

var cartItems = []

// === SUBMIT ORDERS === //
$("#submitStandardBtn").on("click", function () {
    let Product = $("#standardProductSelect").val()
    let Quantity = $("#standardQuantitySelect").val()
    let FileArr = $("#standardLinkImage")
    let File = FileArr.toArray()[0].files[0]
    let SizePrice = $("#standardSizeSelect").val()
    let [Size, Price] = SizePrice.split("-")
    if (Product === "" || Quantity === "" || File === "" || SizePrice === "") {
        $('#errorModal').modal("open")
    } else if (Size === "Custom") {
        openCustomModal()
    } else {
        let itemTotal = (Price * Quantity)
        let newItem = {
            Product,
            Size,
            Quantity,
            File,
            Price,
            itemTotal
        }
        // UPDATE CART //
        cartItems.push(newItem)
        updateCart()
        // SHOW MODAL //
        $('#modalItem').empty()
        $("#modalItem").html(Product)
        $('#addedModal').modal("open")
    }
})
$("#submitPremiumBtn").on("click", function () {
    let Product = $("#premiumProductSelect").val()
    let Quantity = $("#premiumQuantitySelect").val()
    let FileArr = $("#premiumLinkImage")
    let File = FileArr.toArray()[0].files[0]
    let SizePrice = $("#premiumSizeSelect").val()
    let [Size, Price] = SizePrice.split("-")
    if (Product === "" || Quantity === "" || File === "" || SizePrice === "") {
        $('#errorModal').modal("open")
    } else if (Size === "Custom") {
        openCustomModal()
    } else {
        let itemTotal = (Price * Quantity)
        let newItem = {
            Product,
            Size,
            Quantity,
            File,
            Price,
            itemTotal
        }
        // UPDATE CART //
        cartItems.push(newItem)
        updateCart()
        // SHOW MODAL //
        $('#modalItem').empty()
        $("#modalItem").html(Product)
        $('#addedModal').modal("open")
    }
})
$("#submitHouseBtn").on("click", function () {
    let Product = $("#houseProductSelect").val()
    let Quantity = $("#houseQuantitySelect").val()
    let SizePrice = $("#houseSizeSelect").val()
    let [Size, Price] = SizePrice.split("-")
    if (Product === "" || Quantity === "" || SizePrice === "") {
        $('#errorModal').modal("open")
    } else if (Size === "Custom") {
        openCustomModal()
    } else {
        let itemTotal = (Price * Quantity)
        let newItem = {
            Product,
            Quantity,
            Size,
            Price,
            itemTotal
        }
        // UPDATE CART //
        cartItems.push(newItem)
        updateCart()
        // SHOW MODAL //
        $('#modalItem').empty()
        $("#modalItem").html(Product)
        $('#addedModal').modal("open")
    }
})

let standardInpFile = $("#standardLinkImage")
let standardPreviewContainer = $("#standardImagePreview")
let standardPreviewImage = $(".standardImage-preview__image")
standardInpFile.on("change", function () {
    let file = this.files[this.files.length - 1]
    console.log(file)
    if (file) {
        let reader = new FileReader()
        reader.onload = readSuccess
        function readSuccess() {
            standardPreviewImage.attr("src", this.result)
            standardPreviewImage.removeClass("hidden")
        }
        reader.readAsDataURL(file)
    }
})

let premiumInpFile = $("#premiumLinkImage")
let premiumPreviewContainer = $("#premiumImagePreview")
let premiumPreviewImage = $(".premiumImage-preview__image")
premiumInpFile.on("change", function () {
    let file = this.files[this.files.length - 1]
    if (file) {
        let reader = new FileReader()
        reader.onload = readSuccess
        function readSuccess() {
            premiumPreviewImage.attr("src", this.result)
            premiumPreviewImage.removeClass("hidden")
        }
        reader.readAsDataURL(file)
    }
})


// === UPDATE CART === //
function updateCart() {
    $(".cartDiv").empty()

    // === SHOW/HIDE CART DIVS === //
    if (cartItems.length > 0) {
        $(".checkoutButtonDiv").removeClass("hidden")
        $('.noItemsInCart').addClass("hidden")
        let itemCount = 0

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
                <div class="col s12"> 
                    <div class="cartItemInfoHead">Img: </div>
                    <img src="" alt="" id="cartimg${itemCount}" class="cartimg"> 
                </div> 
            </div> 
        </div>`
            $(".cartDiv").append(newItem)
            itemCount++
        }
        updateTotal()
        itemCount = 0
        cartImgPreview()

    } else {
        $(".checkoutButtonDiv").addClass("hidden")
        $('.noItemsInCart').removeClass("hidden")
    }
}

function cartImgPreview() {
    for (let i = 0; i < cartItems.length; i++) {
        let file = cartItems[i].File
        console.log(`cartItem img: ${i}`)
        console.log(file)
        if (file) {
            const reader = new FileReader()
            reader.onload = readSuccess
            function readSuccess() {
                $("#cartimg" + i).attr('src', this.result);
            }
            reader.readAsDataURL(file)
        }
    }
}

function openCustomModal() {
    $('#customModal').modal("open")
}

$("#customMessageSend").on("click", function () {
    let Name = $("#customPrefix").val().trim()
    let Phone = $("#customTelephone").val().trim()
    let Email = $("#customEmail").val().trim()
    let Type = $("#customType").val().trim()
    let Quantity = $("#customQuantity").val().trim()
    let Message = $("#customModalTextArea").val()
    if (Name === "" || Phone === "" || Email === "" || Message === "" || Type === "") {
        alert("Please fill out all inputs")
    } else {
        alert(Name + Phone + Email + Message + Type)
        let templateParams = {
            type: "INQUIRY",
            name: Name,
            number: Phone,
            email: Email,
            order_type: Type,
            order_quantity: Quantity,
            message: Message,
        }
        emailjs.send('default_service', 'grafikmessage', templateParams)
            .then(function (response) {
                console.log('Sucessful message send!')
                $("#customModalInputDiv").addClass("hidden")
                $("#customModalSuccessDiv").removeClass("hidden")
            }, function (error) {
                console.log('FAILED...', error)
                $("#customModalInputDiv").addClass("hidden")
                $("#customModalErrorDiv").removeClass("hidden")
            });
    }
})
$("#customModalClose").on("click", function () {
    $("#customModalInputDiv").removeClass("hidden")
    $("#customModalSuccessDiv").addClass("hidden")
})


// === ADD AND UPDATE TOTAL === //
function updateTotal() {
    let cartTotal = 0
    for (var l = 0; l < cartItems.length; l++) {
        cartTotal = (cartTotal + cartItems[l].itemTotal)
    }
    $(".total").html(`$${cartTotal.toFixed(2)}`)
}


// === REMOVE ITEM === //
$(document.body).on("click", ".removeCartItem", function () {
    let value = $(this).attr("value")
    if (value > -1) {
        cartItems.splice(value, 1);
    }
    updateCart()
})


// === SUBMIT ORDER INFO === //
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
        $('#errorModal').modal("open")
    } else {
        $(".orderUserInfo").addClass("hidden")
        $(".plusTaxAndShipping").removeClass("hidden")
        $(".orderName").html(`${First} ${Last}`)
        $(".orderEmail").html(Email)
        $(".deliverState").html(`${City}, ${State}`)
        $(".deliverAddress").html(Address)
    }
})

function addShippingAndTax() {
    let cartTotal = 0
    for (var l = 0; l < cartItems.length; l++) {
        let newRow = (`<div class="row">
        <div class="col s6 l6">
            <div class="orderItem orange-text">${cartItems[l].Product}</div>
        </div>
        <div class="col s6 l6">
            <div class="orderQuantity orange-text">${cartItems[l].Quantity}</div>
        </div>
        </div>`)
        $(".appendHere").append(newRow)
        cartTotal = (parseInt(cartTotal) + parseInt(cartItems[l].itemTotal))
    }
    let ShipCost = 5
    // Get to calculate shipping, then ShipCost = APIcost
    let Tax = ((cartTotal * 15) / 100)
    $(".taxTotal").html(`$${Tax.toFixed(2)}`)
    // Figure out how to calculate tax for this type of item
    let fullTotal = cartTotal + ShipCost + Tax
    $(".fullTotal").html(`$${fullTotal.toFixed(2)}`)
}


// === CHECKOUT SHOW/HIDES === //
$("#checkoutBtn").on("click", function () {
    $(".cartDiv , .checkoutButtonDiv").addClass("hidden")
    $(".orderUserInfo").removeClass("hidden")
    addShippingAndTax()
})
$("#cancelBtn").on("click", function () {
    $(".cartDiv , .checkoutButtonDiv").removeClass("hidden")
    $(".orderUserInfo, .plusTaxAndShipping").addClass("hidden")
})