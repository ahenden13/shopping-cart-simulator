//alert("hi");
document.querySelector("#quantities").addEventListener("click", calcQuantTotal)
document.querySelector("#confirmShipping").addEventListener("click", addShipPrice);
document.querySelector("#promoCode").addEventListener("click", checkPromo);

var subtotal = 0;
var finalTotal = 0;

displayShippingOptions();

function displayShippingOptions() {
    let shippingOptionsArray = ["Standard (4-5 Business days): No additional charge", "Expedited (2-3 Business days): $4.99", "Overnight (1 Business Day): $9.99"];
    for (let i=0; i < shippingOptionsArray.length; i++) {
        document.querySelector("#shippingOptions").innerHTML += `<input type="radio" name="shipping" id= "${shippingOptionsArray[i]}" 
        value="${shippingOptionsArray[i]}"> <label for="${shippingOptionsArray[i]}">${shippingOptionsArray[i]}</label><br>`;
    }
}

function checkPromo() {
    let userCode = document.querySelector("#promo").value.toLowerCase();
    let promoFeedback = document.querySelector("#codeFeedback");
    if (userCode == "alana24") {
        promoFeedback.textContent = "Promo code is valid! 10% discount applied to order.";
        promoFeedback.style.color = "green";
        applyDiscount();
    } else {
        promoFeedback.textContent = "Promo code is not valid.";
        promoFeedback.style.color = "black";
    }
}

function applyDiscount() {
    let discount = subtotal * 0.1;
    subtotal -= discount;
    calcTaxAndTotal();
}

function addShipPrice() {
    let shippingPref = document.querySelector("input[name=shipping]:checked").value;
    if(shippingPref == "Expedited (2-3 Business days): $4.99") {
        subtotal += 4.99;
        document.querySelector(`#shippingImg`).innerHTML = "<img src='img/dog.png' alt='Dog' width='80'>";
    } else if (shippingPref == "Overnight (1 Business Day): $9.99") {
        subtotal += 9.99;
        document.querySelector(`#shippingImg`).innerHTML = "<img src='img/rabbit.png' alt='Rabbit' width='100'>";
    } else {
        document.querySelector(`#shippingImg`).innerHTML = "<img src='img/turtle2.jpg' alt='Turtle' width='120'>";
    }
    calcTaxAndTotal();
}

function calcQuantTotal() {
    subtotal = 0;
    let quant1 = document.querySelector("#quantity1").value;
    let quant2 = document.querySelector("#quantity2").value;
    let quant3 = document.querySelector("#quantity3").value;
    let item1Total = 8*quant1;
    let item2Total = 5*quant2;
    let item3Total = 10*quant3;
    subtotal += item1Total;
    subtotal += item2Total;
    subtotal += item3Total;
    console.log(subtotal);
    calcTaxAndTotal();
}

function calcTaxAndTotal() {
    let shortenedSub = subtotal.toFixed(2);
    document.querySelector("#displaySubtotal").innerHTML = `Subtotal: $${shortenedSub}`;
    subtotal = Number(shortenedSub);
    console.log(subtotal);
    
    let tax = subtotal * 0.075;
    console.log(tax);
    let shortenedTax = tax.toFixed(2);
    tax = shortenedTax;
    console.log(shortenedTax);
    document.querySelector("#displayTax").innerHTML = `Sales Tax: $${tax}`;

    finalTotal = Number(subtotal) + Number(tax);
    console.log(finalTotal);
    let shortenedFinal = finalTotal.toFixed(2);
    finalTotal = shortenedFinal;
    document.querySelector("#displayFinalTotal").innerHTML = `Grand Total: $${finalTotal}`;
    
}



