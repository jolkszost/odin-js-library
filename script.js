let myLibrary = [];

function Book(title, author, pages, read)  {
    this.title = title
    this.author = `by ${author}`
    this.pages = `${pages} pages`
    this.read = read
   this.info = function() {
        return (`${title}` + '\r\n' +`${author}` + '\n\r' + `${pages}` + '\n' + `${read}`);
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
                let cardDiv = document.createElement('div');
                cardDiv.classList.add('card');
                 let bookInfo = myLibrary[b];
            //    cardDiv.textContent = cardInfo.info();
                let bookT = document.createElement('p');
                    bookT.textContent = bookInfo.title;
                let bookA = document.createElement('p');
                    bookA.textContent = bookInfo.author;
                let bookP = document.createElement('p');
                    bookP.textContent = bookInfo.pages;
                let bookR = document.createElement('p');
                    bookR.textContent = bookInfo.read;    
               console.log(cardDiv);
               cardDiv.appendChild(bookT);
               cardDiv.appendChild(bookA);
               cardDiv.appendChild(bookP);
               cardDiv.appendChild(bookR);
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