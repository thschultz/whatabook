/**
	Title: slytherin-whatabook.js
    Authors: John Vanhessche, Thomas Schultz, Walter McCue
    Date: 8 December 2022
    Description: MongoDB Shell Scripts for the WhatAbook customers and books collections.
 */


//Drop books and customers collections
db.books.drop()
db.customers.drop()

//Create books collection
db.createCollection("books",
 {
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
db.createCollection("customers",
 {
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

//A collection of book objects
book0 = {
    "title": "Night Road",    
    "author": "Kristin Hannah",    
    "genre": "Thriller",    
    "bookId": "b1001"
}

book1 = {
    "title": "Dark of the Moon",    
    "author": "John Sanford",     
    "genre": "Thriller",    
    "bookId": "b1002"
}
book2 = {
    "title": "The Investigator",    
    "author": "John Sanford",    
    "genre": "Thriller",
    "bookId": "b1003"
}
    
book3 = {
    "title": "Thinner",
    "author": "Richard Bachman",
    "genre": "Horror",
    "bookId": "b1004"
}
    
book4 = {
    "title": "The Shining",
    "author": "Stephen King",
    "genre": "Horror",
    "bookId": "b1005"
}
    
book5 = {
    "title": "It",
    "author": "Stephen King",
    "genre": "Horror",
    "bookId": "b1006"
}
    
book6 = {
    "title": "The Forgotten 500",
    "author": "Gregory Freeman",
    "genre": "Non-Fiction",
    "bookId": "b1007"
}
    
book7 = {
    "title": "Taken For A Ride",
    "author": "Bradley Stertz",
    "genre": "Non-Fiction",
    "bookId": "b1008"
}
    
book8 = {
    "title": "Before We We're Yours",
    "author": "Lisa Wingate",
    "genre": "Non-Fiction",
    "bookId": "b1009"
}
    
book9 = {
    "title": "20,000 Leagues Under The Sea",
    "author": "Jules Verne",
    "genre": "Fantasy",
    "bookId": "b1010"
}
    
book10 = {
    "title": "The War of The Worlds",
    "author": "H.G Wells",
    "genre": "Fantasy",
    "bookId": "b1011"
}
        
book11 = {
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "genre": "Fantasy",
    "bookId": "b1012"
}
    
book12 = {
    "title": "Getting Started With Wordpress",
    "author": "Todd Kelsey",
    "genre": "How-To",
    "bookId": "b1013"
}
    
book13 = {
    "title": "Basecamp for Beginners",
    "author": "Todd Kelsey",
    "genre": "How-To",
    "bookId": "b1014"
}
    
book14 = {
    "title": "C# Programming",
    "author": "Barbara Doyle",
    "genre": "How-To",
    "bookId": "b1015"
}
        

//A collection of insert statements to insert each book object into db.books
db.books.insertOne(book0)
db.books.insertOne(book1)
db.books.insertOne(book2)
db.books.insertOne(book3)
db.books.insertOne(book4)
db.books.insertOne(book5)
db.books.insertOne(book6)
db.books.insertOne(book7)
db.books.insertOne(book8)
db.books.insertOne(book9)
db.books.insertOne(book10)
db.books.insertOne(book11)
db.books.insertOne(book12)
db.books.insertOne(book13)
db.books.insertOne(book14)

//A collection of customer objects
customer0 = {
    "firstName": "Bonnie",
    "lastName": "Swanson",
    "customerId": "c1001",
    "wishlist": []
}

customer1 = {
    "firstName": "Peter",
    "lastName": "Griffin",
    "customerId": "c1002",
    "wishlist": []
}

customer2 = {
    "firstName": "Lois",
    "lastName": "Griffin",
    "customerId": "c1003",
    "wishlist": []
}

customer3 = {
    "firstName": "Joe",
    "lastName": "Swanson",
    "customerId": "c1004",
    "wishlist": []
}

customer4 = {
    "firstName": "Meg",
    "lastName": "Griffin",
    "customerId": "c1005",
    "wishlist": []
}

customer5 = {
    "firstName": "Cleveland",
    "lastName": "Brown",
    "customerId": "c1006",
    "wishlist": []
}

customer6 = {
    "firstName": "Evil",
    "lastName": "Monkey",
    "customerId": "c1007",
    "wishlist": []
}

customer7 = {
    "firstName": "Neil",
    "lastName": "Goldman",
    "customerId": "c1008",
    "wishlist": []
}

customer8 = {
    "firstName": "Loretta",
    "lastName": "Brown",
    "customerId": "c1009",
    "wishlist": []
}

customer9 = {
    "firstName": "Glenn",
    "lastName": "Quagmire",
    "customerId": "c1010",
    "wishlist": []
}


//A collection of insert statements to insert each customer object into db.customers
db.customers.insertOne(customer0)
db.customers.insertOne(customer1)
db.customers.insertOne(customer2)
db.customers.insertOne(customer3)
db.customers.insertOne(customer4)
db.customers.insertOne(customer5)
db.customers.insertOne(customer6)
db.customers.insertOne(customer7)
db.customers.insertOne(customer8)
db.customers.insertOne(customer9)




