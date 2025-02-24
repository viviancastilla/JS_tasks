const input = document.querySelector('fruitInput');
const button = document.querySelector('#addFruitBtn');
const list = document.querySelector('#fruitlist');

function updatefruitList() {
    const newItem = document.createElement('li');
    newItem.textContent = input.value
    list.appendChild(newItem);
    input.value = '';
}

button.addEventListener('click', updateFruitList)