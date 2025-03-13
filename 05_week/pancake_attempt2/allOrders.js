//Loading the local storage to get the orders array and display it the all orders page
document.addEventListener("DOMContentLoaded", function(){
    let savedOrders = localStorage.getItem("orders");
    let orderDetails = document.getElementById("orderDetails");
    let noOrders = document.getElementById("noOrders");
    let orderTeplate = document.getElementById("orderTemplate");

    if(savedOrders){
        let orders = JSON.parse(savedOrders);
        let orderText = document.getElementById("orderText");

        if(orders.length > 0){
            orders.forEach(order => {

                let orderClone = orderTemplate.cloneNode(true);

                document.getElementById("#orderId").textContent = "0rder" + order.orderId;
                document.getElementById("#customerName").textContent = order.customerName;
                document.getElementById("#pancake").textContent = order.selectedPancake;
                document.getElementById("#toppings").textContent = order.toppings;
                document.getElementById("#extras").textContent = order.extras;
                document.getElementById("#delivery").textContent = order.deliveryMethod;
                document.getElementById("#totalPrice").textContent = order.totalPrice;
                document.getElementById("#status").textContent = order.status;

                orderDetails.appendChild(orderClone);
            });
        }else{
            let orderText = document.getElementById("orderText");
            orderText.textContent = "No orders at the moment";
        }
    }
});