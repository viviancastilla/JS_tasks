let animalNames = ["All", "Mammal", "Birds", "Reptile", "Amphibian", "Fish"];

document.querySelector('#animalList'.innerHTML = "");

function animals(){
    animalNames.forEach(function(animal){
        let li = document.createElement('li');
        li.textContet = animal;
        dicument.querySlecetor('#animalList').appendChild(li);
    })
}

animals();
