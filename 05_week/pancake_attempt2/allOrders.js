document.addEventListener("DOMContentLoaded", function(){
    let orders = JSON.parse(localStorage.getItem("orders"));
    let ordersContainer = document.getElementById("ordersContainer");

    if(orders.length === 0){
        ordersContainer.innerHTML = "No orders yet.";
    }else{
    ordersContainer.innerHTML = orders.map(order =>
        `Orde ID: ${order.orderId}<br> 
        Customer: ${order.customerName}<br>
        Pancake: ${order.selectedPancake}<br>
        Topping: ${order.toppings}<br>
        Extras: ${order.extras}<br>
        Delivery: ${order.delivery}<br>
        Total Price: ${order.totalPrice}<br>
        Status: ${order.status}<br>`
        ).join("");
    }
});
