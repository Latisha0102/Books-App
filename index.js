const { initializeDatabase } = require("./db/db.connect");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
initializeDatabase();

const corsOption = {
    origin: "*",
    credentials: true,
};
app.use(cors(corsOption));

const Book = require('./modules/books.module');

async function getAllBooks() {
    try {
        const allBooks = await Book.find();
        return allBooks;
    } catch (error) {
        console.log("Error occurred while fetching books", error);
    }
}

app.get("/books", async (req, res) => {
    try {
        const book = await getAllBooks();
        if (book.length != 0) {
            res.json(book);
        } else {
            res.status(404).json({ message: "Error while fetching" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch books" });
    }
});

async function addBook(book) {
    try {
        const newBook = new Book(book);
        const saveBook = await newBook.save()
        return saveBook;
    } catch (error) {
        console.log(error);
    }
}

app.post("/books", async (req, res) => {
    try {
        const newBook = await addBook(req.body);
        if (newBook) {
            res.status(201).json({ message: "Book added successfully", book: newBook });
        } else {
            res.status(404).json({ message: "Failed to add book" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch book" });
    }
});

// Other routes remain unchanged...
async function getBookByTitle(bookTitle){
    try{
        const book = await Book.findOne({title: bookTitle});
        return book
    }catch{
        console.log("Error occurred while fetching book by title", error)
    }
}

app.get("/books/title/:bookTitle" ,async(req,res) =>{
    try{
        const book = await getBookByTitle(req.params.bookTitle)
        if(book){
            res.json(book)
            
        }else{
            res.status(404).json({message: "Book not found"})
        }
    }catch(error){
        res.status(500).json({error: "Failed to fetch book by title"})
    }
})
async function getBookByAuthor(bookAuthor){
    try{
        const book = await Book.find({author: bookAuthor})
        return book
    }catch(error){
        console.log("Error occurred while fetching book by author", error)
    }
}

app.get("/books/author/:authorName", async(req,res)=>{
    try{
        const book = await getBookByAuthor(req.params.authorName)
        if(book){
            res.json(book)
        }else{
            res.status(404).json({message: "Book not found"})
        }
    }catch(error){
        res.status(500).json({error: "Failed to fetch book by author"})
    }
})

async function deleteBook(bookId){
    try{
        const deletedBook = await Book.findByIdAndDelete(bookId)
        return deletedBook
    }catch(error){
        console.log("Error occurred while deleting book", error)
    }
}

app.delete("/books/:bookId",(req,res)=> {
    try{
        const deletedBook = deleteBook(req.params.bookId)
        if(deletedBook){
            res.json({message: "Book deleted successfully", book: deletedBook})
        }else{
            res.status(404).json({message: "Book not found"})
        }
    }catch(error){
        res.status(500).json({error: "Failed to delete book"})
    }
})
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
