/**
	Title: script.js
    Author: J. Vanhessche
    Date: 7 December 2022
    Description: MongoDB Shell Scripts for the Whatabook customers and books collections.
 */


//Drop books and customers collections
db.books.drop()
db.customers.drop()

//Create books collection
db.createCollection("books", {
    validator: { $jsonSchema: {
        bsonType: "object",
        properties: {
            title: {
                bsonType: "string"
            }, 
            author: {
                bsonType: "string"
            }, 
            genre: {
                bsonType: "string"
            }, 
            bookId: {
                bsonType: "string"
            }
        }
    }}
})

//Create customers collection
db.createCollection("customers", {
    validator: { $jsonSchema: {
        bsonType: "object",
        properties: {
            firstName: {
                bsonType: "string"
            }, 
            lastName: {
                bsonType: "string"
            }, 
            customerId: {
                bsonType: "string"
            }, 
            wishlist: {
                bsonType: "array"
            }
        }
    }}
})

//Creating an array of book objects
let books = [
    {"title": "","author": "","genre": "","bookId": ""},
    {"title": "","author": "","genre": "","bookId": ""},
    {"title": "","author": "","genre": "","bookId": ""},
    {"title": "","author": "","genre": "","bookId": ""},
    {"title": "","author": "","genre": "","bookId": ""},
    {"title": "","author": "","genre": "","bookId": ""},
    {"title": "","author": "","genre": "","bookId": ""},
    {"title": "","author": "","genre": "","bookId": ""},
    {"title": "","author": "","genre": "","bookId": ""},
    {"title": "","author": "","genre": "","bookId": ""},
    {"title": "","author": "","genre": "","bookId": ""},
    {"title": "","author": "","genre": "","bookId": ""},
    {"title": "","author": "","genre": "","bookId": ""},
    {"title": "","author": "","genre": "","bookId": ""},
    {"title": "","author": "","genre": "","bookId": ""},
]

//loop through array and insert each book object into db.books
//confirm each add with console message.
for (let book in books) {
    db.books.insertOne(book);
    console.log(`${book.title} added successfully`)
} 

//Creating an array of customers
let customers = [
    {"firstName": "","lastName": "","customerId": "","wishlist": [{"title": "","author": "","genre": "","bookId": ""},]},
    {"firstName": "","lastName": "","customerId": "","wishlist": [{"title": "","author": "","genre": "","bookId": ""},]},
    {"firstName": "","lastName": "","customerId": "","wishlist": [{"title": "","author": "","genre": "","bookId": ""},]},
    {"firstName": "","lastName": "","customerId": "","wishlist": [{"title": "","author": "","genre": "","bookId": ""},]},
    {"firstName": "","lastName": "","customerId": "","wishlist": [{"title": "","author": "","genre": "","bookId": ""},]},
    {"firstName": "","lastName": "","customerId": "","wishlist": [{"title": "","author": "","genre": "","bookId": ""},]},
    {"firstName": "","lastName": "","customerId": "","wishlist": [{"title": "","author": "","genre": "","bookId": ""},]},
    {"firstName": "","lastName": "","customerId": "","wishlist": [{"title": "","author": "","genre": "","bookId": ""},]},
    {"firstName": "","lastName": "","customerId": "","wishlist": [{"title": "","author": "","genre": "","bookId": ""},]},
    {"firstName": "","lastName": "","customerId": "","wishlist": [{"title": "","author": "","genre": "","bookId": ""},]},
]

//loop through customer array and insert each customer object into db.customers
//confirm each add with a console message.
for (let customer in customers) {
    db.customers.insertOne(customer);
    console.log(`${customer.lastName} added successfully`)
}











//Deprecated code, for example only
//books
// book0 = {"title": "","author": "","genre": "","bookId": ""}
// book1 = {"title": "","author": "","genre": "","bookId": ""}
// book2 = {"title": "","author": "","genre": "","bookId": ""}
// book3 = {"title": "","author": "","genre": "","bookId": ""}
// book4 = {"title": "","author": "","genre": "","bookId": ""}
// book5 = {"title": "","author": "","genre": "","bookId": ""}
// book6 = {"title": "","author": "","genre": "","bookId": ""}
// book7 = {"title": "","author": "","genre": "","bookId": ""}
// book8 = {"title": "","author": "","genre": "","bookId": ""}
// book9 = {"title": "","author": "","genre": "","bookId": ""}
// book10 = {"title": "","author": "","genre": "","bookId": ""}
// book11 = {"title": "","author": "","genre": "","bookId": ""}
// book12 = {"title": "","author": "","genre": "","bookId": ""}
// book13 = {"title": "","author": "","genre": "","bookId": ""}
// book14 = {"title": "","author": "","genre": "","bookId": ""}
// db.books.insertOne(book0)
// db.books.insertOne(book1)
// db.books.insertOne(book2)
// db.books.insertOne(book3)
// db.books.insertOne(book4)
// db.books.insertOne(book5)
// db.books.insertOne(book6)
// db.books.insertOne(book7)
// db.books.insertOne(book8)
// db.books.insertOne(book9)
// db.books.insertOne(book10)
// db.books.insertOne(book11)
// db.books.insertOne(book12)
// db.books.insertOne(book13)
// db.books.insertOne(book14)


