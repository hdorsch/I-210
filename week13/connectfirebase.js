import { app } from "./firebase.js";
import { getFirestore, collection, getDocs, addDoc, query, deleteDoc, updateDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const db = getFirestore(app);

const sectionRef = document.querySelector("section");

async function getBooks() {
    const booksCollection = collection(db, "Books");
    const booksDocs = await getDocs(booksCollection);

    sectionRef.innerHTML = "";
    
    for (let i = 0; i < booksDocs.docs.length; i++) {
        const book = booksDocs.docs[i];
        const bookData = book.data();
        
        console.log("looping?");

        sectionRef.innerHTML += `
        <div>
            <h4>${bookData.title}</h4>
            <p>${bookData.yearPublished}</p>
            <div>
                <button class="Delete-button" data-book-id="${book.id}">Delete</button>
                <button class="Update-button" data-book-id="${book.id}">Update Year</button>
            </div>
        </div>
        `
    }
    const deleteButtons = document.querySelectorAll(".Delete-button")

    for (const deleteButton of deleteButtons) {
        deleteButton.onclick = deleteBook;
    }

    const updateButtons = document.querySelectorAll(".Update-button")

    for (const updateButton of updateButtons) {
        updateButton.onclick = updateBookYear;
    }

}

async function deleteBook(e) {
    const bookId = e.currentTarget.dataset.bookId;
    const booksCollection = collection(db, "Books");
    const bookDoc = doc(booksCollection, bookId);
    await deleteDoc(bookDoc);

    getBooks();
}

async function updateBookYear(e) {
    const bookId = e.currentTarget.dataset.bookId;
    const booksCollection = collection(db, "Books");
    const bookDoc = doc(booksCollection, bookId);
    const newBookYear = prompt("Enter Updated Book Year");
    await updateDoc(bookDoc, {yearPublished: newBookYear });

    getBooks();
}


getBooks();

console.log(sectionRef);

//  onclick="deleteBook(${book.id})
//  onclick="updateBookYear(${book.id})