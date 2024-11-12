import { app } from "./firebase.js";
import { getFirestore, collection, getDocs, query } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const booksListRef = document.querySelector("#BooksList")

const db = getFirestore(app);

async function getBooks() {
    const booksCollection = collection(db, "Books");
    const booksDocs = await getDocs(booksCollection);
    
    for (let i = 0; i < booksDocs.docs.length; i++) {
        const book = booksDocs.docs[i];
        const bookData = book.data();

        booksListRef.innerHTML += `<li>${bookData.title} (${bookData.yearPublished})</li>`
    }
}

getBooks();

console.log(db);


