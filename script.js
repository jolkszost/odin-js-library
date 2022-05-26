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
    
    const cardArea = document.getElementById("cardArea");

    while (cardArea.firstChild) {
        cardArea.removeChild(cardArea.firstChild)

    }
            for (let b = 0; b < myLibrary.length; b++) {
              
                
                let cardDiv = document.createElement('div');
                cardDiv.classList.add('card');
                cardDiv.setAttribute('id', `${b}`)
                 let bookInfo = myLibrary[b];
           
                let bookT = document.createElement('p');
                    bookT.textContent = bookInfo.title;
                let bookA = document.createElement('p');
                    bookA.textContent = bookInfo.author;
                let bookP = document.createElement('p');
                    bookP.textContent = bookInfo.pages;
                let bookR = document.createElement('p');
                    bookR.textContent = bookInfo.read;
                let bookRemoveButton = document.createElement("button");
                    bookRemoveButton.textContent = 'Remove from library';
                    bookRemoveButton.classList.add('bookRemove');
                    bookRemoveButton.setAttribute('id', `${b}`)
                    bookRemoveButton.setAttribute('onclick', 'removeBook(this)')       
                let bookReadButton = document.createElement('button');
                    bookReadButton.textContent = 'Change to read/not read yet';
                    bookReadButton.classList.add('changeRead');
                    bookReadButton.setAttribute('id', `${b}`);
                    bookReadButton.setAttribute('onclick', 'changeReadStatus(this)')

               console.log(cardDiv);
               cardDiv.appendChild(bookT);
               cardDiv.appendChild(bookA);
               cardDiv.appendChild(bookP);
               cardDiv.appendChild(bookR);
               cardDiv.appendChild(bookRemoveButton);
               cardDiv.appendChild(bookReadButton);
               
               cardArea.appendChild(cardDiv);

                
            }
}
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'Not read yet');
addBookToLibrary(theHobbit);
const huckFinn = new Book('Huck Finn', 'Mark Twain', 500, 'Read');
addBookToLibrary(huckFinn);


function createNewBook() {
    let nTitle = document.getElementById('title').value;
    let nAuthor = document.getElementById('author').value;
    let nPages = document.getElementById('pages').value;
    let nRead = function isRead() {
         if (document.getElementById('readOrNot').checked) {
            let nRead = 'Read';
            return nRead;
         } else {
            let nRead = 'Not read yet';
            return nRead;
         }; 
   };  
    let newBook = new Book(nTitle, nAuthor, nPages, nRead())
    addBookToLibrary(newBook);
    console.log(newBook);
    console.log(myLibrary);
     displayLibrary(myLibrary);
};   
function removeBook(removedBook) {
    removedBook.parentNode.remove();
    removedBookID = Number(removedBook.id);
    myLibrary.splice(removedBookID, 1);
    console.log(myLibrary);
    displayLibrary(myLibrary);
} 

function changeReadStatus(changedRead) {
       changedReadID = Number(changedRead.id);
       bookToChange = myLibrary[changedReadID];
       if (bookToChange.read === 'Read') {
           delete bookToChange.read;
           bookToChange.read = 'Not read yet';
           displayLibrary(myLibrary);
       } else {
       
       delete bookToChange.read;
       bookToChange.read = 'Read';
       displayLibrary(myLibrary)
       }
}

displayLibrary(myLibrary);
