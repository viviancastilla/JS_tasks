//Task 1
const library = [
    { title: 'Alice´s adventure in wonderland', author: 'Carrol Lewis', yearPublished: 1865},
    { title: 'The tree little pigs', author: 'Joseph Jacobs', yearPublished: 1890},
    { title: 'Little red riding hood' , author: 'Charles Perrault', yearPublished:1697 },
]
//Task 2
library[0].genre = ["fantasy", "adventure", "classic"]

// Task 3, both do the same thing)
library[0]["isAvailable"] = true
/*if(library[0].title === 'Alice in wonderland'){
        library[0].isAvailable = true;
    }*/

//Task 4
function Book(title, author, yearPublished, genres){
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.genres = genres;
}
const newBook = new Book('Frankenstein', 'Mary Shelley', 1818, ['science fiction', 'horror'] );
library.push(newBook);

//Task 5
function createBook(title, author, yearPublished, genres) {
    const newBook = {
        title: title,
        author: author,
        yearPublished: yearPublished,
        genres: genres,
    }
    return newBook
}
const createdBook = createBook('Frankenstein', 'Mary Shelley', 1818, ['science fiction', 'horror'] )
library.push({...createdBook})
// If you dont destructure you will return book {title: "Frakenstein" etc }

//Task 6
const jsonString = JSON.stringify(library);
console.log(jsonString);
const parsedLibrary = JSON.parse(jsonString);
console.log(parsedLibrary[0].title);

console.log(library[0].title);
console.log(library[1].yearPublished = 1980);
console.log(library[0].isAvailable);
console.log(library);

