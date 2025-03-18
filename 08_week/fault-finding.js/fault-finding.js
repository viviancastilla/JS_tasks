'use strict';

//Task 1
function greet(name){
    if (name) {
        return "Hello " + name + "!";
    }else{
        return "Hello, guest!";
    }
}

console.log(greet("Alice"))
console.log(greet());

//Task 2
function calculatePrice(price, quantity){
    if(!quantity){
        return 1;
    }
    return price * quantity;
}

console.log(calculatePrice(10, 2)),
console.log(calculatePrice(5));

//Task 3
function isEven(num){
    if(num % 2 === 0){
        return true;
    }else{
        return false;
    }
}

console.log(isEven(4));
console.log(isEven(7));

//Task 4
function countToFive(){
    for (let i = 1; i <= 5; i++){
        console.log(i);
    }
}
countToFive();

//Task 5
function getLastItem(arr){
    return arr[arr.length - 1];
}

console.log(getLastItem(["apple", "banana", "cherry"]));
console.log(getLastItem([1, 2, 3]));

//Task 6
function parseJson(jsonString){
    try{
        return JSON.parse(jsonString);
    }catch(error){
        return "Erorr (invalid JSON)";
    }
}
console.log(parseJson('{"name": "Alice", "age": 25}'));
console.log(parseJson("{name: 'Alice', age: 25}'"));

//Task 7
function getEmail(user){
        return user.email;
}

console.log(getEmail({name: "Alice", email: "alice@example.com"}));

//Task 8
function double(num){

    return num + num;
}

function square(num){
    return num * num;
}

function processNumber(num){
    return square(double(num));
}

console.log(processNumber(3));
console.log(processNumber(4));

//Task 9
function sortNumbers(arr){
    return arr.sort((a, b) => b - a);
}
console.log(sortNumbers)