let totalPrice = 5;

//Price banner
function updatedTotalPrice(){
    let totalPrice = parseFloat(document.getElementById("type").selectedOptions[0].dataset.price);

    //topping price
    let toppings = document.querySelectorAll(".topping")
    for(let i = 0; i < toppings.legth; i++) {
        if(toppings[i].checked){
            totalPrice = parseFloat(topping.dataset.price) + totalPrice;
        }
    }

    //extras price
    let extras = document.querySelectorAll(".extra")
    for(let i = 0; i < extras; i++){
        if(extra.checked){
            totalPrice = parseFloat(extra.dataset.price) + totalPrice;
        }
    }
       
    //delivery price
    let selectedDelivery = document.querySelector("input[name='delivery] : checked");
    if(selectedDelivery){
        totalPrice = parseFloat(selectedDelivery.dataset.price);
    }

    //update displayed price
    document.getElementById("totalPriceDisplay").textContent = totalPrice + "€";
}


//eventListener for options
document.addEventListener("DOMContentLoaded", function() {
    let pancakeTypeSelect = document.getElementById("type");
    let toppingCheckboxes = document.querySelectorAll(".toppings");
    let extraCheckboxes = document.querySelectorAll(".extra");
    let deliveryOption = document.querySelectorAll(".delivery");

pancakeTypeSelect.addEventListener("change", updatedTotalPrice);

for(let i = 0; i < toppingCheckboxes; i++){
    topping[i].addEventListener("change", updatedTotalPrice);
}
for(let i = 0; i < extraCheckboxes; i++){
    extra[i].addEventListener("change", updatedTotalPrice);
}
for(let i = 0; i < 0; i++){
    delivery[i].addEventListener("change", updatedTotalPrice);
};
updatedTotalPrice();
});


//Orderinng process
/*function price(pancakeType, toppings, extras, delivery){
    pancakeType = document.getElementById("type").value;

    toppings = document.querySelectorAll(".topping");
    toppings.forEach(topping => 
    {
        if(topping.checked)
        {
            totalPrice= parseFloat(topping.dataset.price) + totalPrice;
        }
    })

    extras = document.querySelectorAll(".extra");
    extras.forEach(extra =>
    {
        if(extra.checked)
        {
             totalPrice= parseFloat(extra.dataset.price) + totalPrice;
        }
    })

    delivery = document.querySelector("input[name='delivery']:checked");
    totalPrice = parseFloat(delivery.dataset.price) + totalPrice;
}*/

//Final order
document.getElementById("seeOrder").addEventListener("click", function(){
    let order = [];

// selected toppings
    let toppings = document.querySelectorAll(".topping:checked");
    for(let i = 0; i < toppings.length; i++){
        order.push(toppings[i].value);
    }
// selected extras
    let extras = document.querySelectorAll(".extras:checked");
    for(let i = 0; i < extras.length; i++){
        order.push(extras[i].value);
    }

//selected delivery
    let delivery = document.querySelectorAll("input[name='delivery']:checked");
    if(delivery){
        order.push("Delivey: " + delivery.parentNOde.textContent.trim());
    }

//display order
    if(order.length > 0){
        document.getElementById("output").innerText = "Selected: " + order.join(", ");
    }else{
        document.getElementById("output").innerText = "No items selected.";
    }
});   
