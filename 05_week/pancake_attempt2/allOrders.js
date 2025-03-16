//Loading the local storage to get the orders array and display it the all orders page
document.addEventListener("DOMContentLoaded", function(){
    let savedOrders = localStorage.getItem("orders");
    let orderDetails = document.getElementById("orderDetails");
    let noOrders = document.getElementById("noOrders");
    let orderTemplate = document.getElementById("orderTemplate");

    if(savedOrders){
        let orders = JSON.parse(savedOrders);

        if(orders.length > 0){
            orders.forEach(order => {

                let orderClone = orderTemplate.cloneNode(true);

                orderClone.querySelector("#orderId").textContent = "0rder #" + order.orderId;
                orderClone.querySelector("#customerName").textContent = "Name: " + order.customerName;
                orderClone.querySelector("#pancake").textContent = "Pancake: " + order.selectedPancake;
                orderClone.querySelector("#toppings").textContent = "Topping: " + order.toppings;
                orderClone.querySelector("#extras").textContent = "Extras: " + order.extras;
                orderClone.querySelector("#delivery").textContent = "Delivery: " + order.deliveryMethod;
                orderClone.querySelector("#totalPrice").textContent = "Totla price: " + order.totalPrice;
                orderClone.querySelector("#.selectBox span").textContent = "Status: " + order.status;

                orderClone.querySelector('.selectBox').classList.add(order.status.toLowerCase())
                orderDetails.appendChild(orderClone);
            });
        }else{
            noOrders.textContent = "No orders at the moment";
        }
    }
});

//Status color option
document.querySelectorAll('.selectBox').forEach(selectBox =>{
    selectBox.addEventListener('click', function(){
        this.closest('.selectStatus').classList.toggle('open');
    });
});
    

document.querySelectorAll('.option').forEach(function(option){
    option.addEventListener('click', function(){
        let statusText = option.textContent;

        let selectBox = this.closest('.selectStatus').querySelector('.selectBox');
        selectBox.querySelector('span').textContent = "Status: " + statusText;
        
        selectBox.classList.remove('waiting', 'ready', 'delivered');
        selectBox.classList.add(option.dataset.value);

        this.closest('.selectStatus').classList.remove('open');
    });
});

document.addEventListener('click', function(event){
    if(!event.target.closest('.selectStatus')){
        document.querySelectorAll('.selectStatus').forEach(selectStatus =>{
            selectStatus.classList.remove('open');
        });
    }
});