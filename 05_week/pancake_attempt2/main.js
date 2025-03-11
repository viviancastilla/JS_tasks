let totalPrice = 5;

//Price banner
function updatedTotalPrice(){
    totalPrice = parseFloat(document.getElementById("type").selectedOptions[0].dataset.price);

    //topping price
    let toppings = document.querySelectorAll(".topping")
    for(let i = 0; i < toppings.length; i++) {
        if(toppings[i].checked){
            totalPrice = parseFloat(toppings[i].dataset.price) + totalPrice;
        }
    }

    //extras price
    let extras = document.querySelectorAll(".extra")
    for(let i = 0; i < extras.length; i++){
        if(extras[i].checked){
            totalPrice = parseFloat(extras[i].dataset.price) + totalPrice;
        }
    }
       
    //delivery price
    let selectedDelivery = document.querySelector("input[name='delivery']:checked");
    if(selectedDelivery){
        totalPrice = parseFloat(selectedDelivery.dataset.price) + totalPrice;
    }

    //update displayed price
    document.getElementById("totalPriceDisplay").textContent = totalPrice + "€";
}


//eventListener for options
document.addEventListener("DOMContentLoaded", function() {
    let pancakeTypeSelect = document.getElementById("type");
    let toppingCheckboxes = document.querySelectorAll(".topping");
    let extraCheckboxes = document.querySelectorAll(".extra");
    let deliveryOption = document.querySelectorAll(".delivery");

pancakeTypeSelect.addEventListener("change", updatedTotalPrice);

for(let i = 0; i < toppingCheckboxes.length; i++){
    toppingCheckboxes[i].addEventListener("change", updatedTotalPrice);
}
for(let i = 0; i < extraCheckboxes.length; i++){
    extraCheckboxes[i].addEventListener("change", updatedTotalPrice);
}
for(let i = 0; i < deliveryOption.length; i++){
    deliveryOption[i].addEventListener("change", updatedTotalPrice);
}
updatedTotalPrice();
});

//Final order
document.getElementById("seeOrder").addEventListener("click", function(){
    let order = [];

//customer name
let customer = document.getElementById("customerName").value;
order.push("Name: " + customer);

//selected pancake
    let selectedPancake = document.getElementById("type").selectedOptions[0].textContent;
    order.push("Pancake: " + selectedPancake);
    
// selected toppings
    let toppings = document.querySelectorAll(".topping:checked");
    for(let i = 0; i < toppings.length; i++){
        order.push("Topping: " + toppings[i].value);
    }
// selected extras
    let extras = document.querySelectorAll(".extra:checked");
    for(let i = 0; i < extras.length; i++){
        order.push("Extra: " + extras[i].value);
    }

//selected delivery
    let delivery = document.querySelector("input[name='delivery']:checked");
    if(delivery){
        order.push("Delivery: " + delivery.value);
    }

//display order
    if(order.length > 0){
        document.getElementById("summaryText").innerHTML = "Selected:<br>" + order.join("<br>");
    }else{
        document.getElementById("summaryText").innerText = "No items selected.";
    }
});   
