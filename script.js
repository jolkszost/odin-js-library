let myLibrary = [];

function Book(title, author, pages, read)  {
    this.title = title
    this.author = `by ${author}`
    this.pages = `${pages} pages`
    this.read = read
   this.info = function() {
        return (`${title}, ${author}, ${pages}, ${read}`);
    }
}
function addBookToLibrary(t) {
    myLibrary.push(t)

}

function displayLibrary(myLibrary) {
            for (let b = 0; b < myLibrary.length; b++) {
                console.log(b);
                console.log(myLibrary);
                console.log(theHobbit.info())
                let cardDiv = document.createElement("div");
                
                 let cardInfo = myLibrary[b];
               cardDiv.textContent = cardInfo.info();
               console.log(cardDiv);
               const cardContainer = document.getElementById("cardContainer");
               cardContainer.appendChild(cardDiv);

                
            }
}
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
addBookToLibrary(theHobbit);
const huckFinn = new Book('Huck Finn', 'Mark Twain', 500, 'read');
addBookToLibrary(huckFinn);

displayLibrary(myLibrary);
console.log(myLibrary);
console.log(theHobbit.info())