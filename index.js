const { initializeDatabase } = require("./db/db.connect");
const express = require("express")
const app = express()
//const Restaurant = require("./modules/restrauntModel.module")
app.use(express.json())
initializeDatabase()

const Book = require('./modules/books.module')
/*
const fs = require("fs")


const bookJson = fs.readFileSync('booksData.json' , 'utf-8')

const bookData = JSON.parse(bookJson)

function seedData(){
    try
 {   
    for( const book of bookData){
        const newBook = new Book({
            title: book.title,
      author: book.author,
      publishedYear: book.publishedYear,
      genre: book.genre,
      language: book.language,
      country: book.country,
      rating: book.rating,
      summary: book.summary,
      coverImageUrl: book.coverImageUrl
        })
        newBook.save()
    
    } 
}catch(error){
        console.log("Error occured",error)
    }
}

seedData()


async function getRestaurantData(){
    try{
        const restaurantData = await Restaurant.find()
        console.log(restaurantData)
        return restaurantData
    }catch(error){
        console.log("Error occured",error)
    }
}

app.get("/restaurants",async(req,res) =>{
    try{
        const allRestaurants = await getRestaurantData()
        console.log(allRestaurants)
        if(allRestaurants.length != 0){
            res.json(allRestaurants)
        }else{
            res.status(404).json({message: "No restaurants found"})
        }
    }catch(error){
        res.status(500).json({error: "failed to fetch restaurant"})
    }
    
   
})

async function saveNewRestaurant(newRestaurant){
    try{
        const restaurant = new Restaurant(newRestaurant)
        const saveRestaurant = await restaurant.save()
        return saveRestaurant
    }catch(error){
        throw error
    }
}

app.post("/restaurants",async(req,res)=>{
    try
    {const newRestaurant = await saveNewRestaurant(req.body)
    res.status(200).json({message: "Restaurant added successfully" , restaurant1 : newRestaurant})}
    catch(error){
        res.status(500).json({error: "Failed to add restaurant"})
    }
})

async function deleteRestaurant(restaurantId){
    try{
        const restaurant = await Restaurant.findByIdAndDelete(restaurantId)
        return restaurant
    }catch(error){
        throw error
    }
}

app.delete("/restaurants/:restaurantId",(req,res)=>{
    try{
        const deletedRestaurant = deleteRestaurant(req.params.restaurantId)
        if(deletedRestaurant){
            res.status(200).json({message: "Restaurant deleted successfully",restaurant : deletedRestaurant})
        }
    }catch(error){
        res.status(500).json({error: "Failed to delete restaurant"})
    }
})

    */

async function getAllBooks(){
    try{
        const allBooks = await Book.find()
        return allBooks
    }catch(error){
        console.log("Error occured while fetching books" ,error)
    }
}

app.get("/books",async (req,res) => {
    try{
        const book = await getAllBooks()
        if(book){
            res.status(200).json({message: "Books fetched successfully",books : book})
        }else{
            res.status(404).json({message: "Error while fetching"})
        }
    }catch(error){
        res.status(500).json({error: "Failed to fetch books"})
    }
})

async function deleteBook(bookId){
    try{
        const book = await Book.findByIdAndDelete(bookId)
        return book
    }catch(error){
        console.log("Error occured while deleting book" ,error)
    }
}
app.delete("/books/:bookId", async (req,res) =>{
  try{
    const deletedBook = await deleteBook(req.params.bookId)
    if(deletedBook){
        res.status(200).json({message: "Book deleted successfully",book : deletedBook})

    }else{
      res.status(404).json({message: "Error while deleting book"})
    }
}catch(error){
    res.status(500).json({error: "Failed to delete book"})
}
})

const PORT = 3001
app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`)
})