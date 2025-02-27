
let totalPrice = 0;

function price(pancakeType, toppings, extras, delivery){
    pancakeType = document.getElementById("type").value;

    toppings = document.querySelectorAll(".topping");
    toppings.forEach(topping => 
    {
        if(topping.checked)
        {
            totalPrice= parseInt(topping.dataset.price) + totalPrice;
        }
    })

    extras = document.querySelectorAll(".extra");
    extras.forEach(extra =>
    {
        if(extra.checked)
        {
            totalPrice= parseInt(extra.dataset.price) + totalPrice;
        }
    })

    delivery = document.querySelector("input[name='delivery']:checked");
    totalPrice = parseInt(delivery.dataset.price) + totalPrice;
}

topping.addEventListener('change', price);

extra.addEventListener('change',price);