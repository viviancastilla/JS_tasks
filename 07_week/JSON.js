//Task 1
const student ={
    name: "Vivian",
    age: 21,
    grade: "A",
}
let studentJSON = JSON.stringify(student);
console.log(studentJSON);

//Task 2
let studentObject = JSON.parse(studentJSON);
console.log(studentObject);

//Task 3
let classroom = [
    {name: 'Barbara', age: 24, grade: "A"},
    {name: 'Jaime', age: 25, grade: "A"},
    {name: 'Sofia', age: 23, grade: "B"}
]
let classroomJSON = JSON.stringify(classroom);
console.log(classroomJSON);

//Task 4
let classroomObject = JSON.parse(classroomJSON);
console.log(classroomObject);

//Task 5
let weatherReport = {
    temperature: 5,
    humidity: "low",
    conditions: "sunny"
}
let weatherJSON = JSON.stringify(weatherReport);
console.log(weatherJSON);

//Task 6
let movies = [
    {title: "Star wars", director: "J.J.Abrams" , rating: 8},
    {title: "Cinderella", director: "Kenneth Branagh" , rating: 9},
    {title: "Harry Potter", director: "Alfonso Cuaron", rating: 7}
    ];

let moviesJSON = JSON.stringify(movies);
let moviesObject = JSON.parse(moviesJSON);
movies.forEach(movies => {
    if(movies > 8){
        console.log(movies.rating); 
    }
});

//Task 7
let filterHighRatedMovies(jsonString){
let movieArray = JSON.parse(jsonString);
let highRatedMovies = movieArray.filter(function(movie){
        return ovie.rating > 8;
   });
}

//Task 8
let shoppingCart = [
    {items: }
]

//Task 9
function totalCartValue(jsonString){
    
}

//Task 10
let gameProgress = [
    {level: 1},
    {score: 20},
    {livesRemaining: 2}
]
let gameProgressJSON = JSON.stringify(gameProgress);
console.log(gameProgressJSON);

let gameProgressObject = JSOM.parse(gameProgress);
gameProgressUpdated = gameProgressObject[1].value + 100;
console.log(gameProgressUpdated);
