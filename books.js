//Drop books and customers collections
db.books.drop()

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

book0 = {
    "title": "The Rise and Fall of Gryffindor",
    "author": "Walter White",
    "genre": "History",
    "bookId": "1001"
}

book1 = {
    "title": "Dumbledore at the Battle of Helms Deep",
    "author": "Frodo Baggins",
    "genre": "History",
    "bookId": "1002"
}

book2 = {
    "title": "Owls at Hogwarts",
    "author": "Wesley Snipes",
    "genre": "History",
    "bookId": "1003"
}

book3 = {
    "title": "Murder on the Hogwarts Express",
    "author": "Penelope Cruz",
    "genre": "Thriller",
    "bookId": "1004"
}

book4 = {
    "title": "Death & Quidditch",
    "author": "Neville Longbottom",
    "genre": "Thriller",
    "bookId": "1005"
}

book5 = {
    "title": "The Wand that killed Bartemius Crouch",
    "author": "Lucius Malfoy",
    "genre": "Thriller",
    "bookId": "1006"
}

book6 = {
    "title": "Love Potions made by Ravenclaw",
    "author": "Luna Lovegood",
    "genre": "Romance",
    "bookId": "1007"
}

book7 = {
    "title": "Dance with a werewolf",
    "author": "Gilderoy Lockhart",
    "genre": "Romance",
    "bookId": "1008"
}

book9 = {
    "title": "Sparks at the Leaky Cauldron",
    "author": "Hannah Abbott",
    "genre": "Romance",
    "bookId": "1009"
}

book10 = {
    "title": "Magic at Dawn",
    "author": "Harry Potter",
    "genre": "Adventure",
    "bookId": "1010"
}

book11 = {
    "title": "The Search of the Missing Slytherin Goblet",
    "author": "Draco Malfoy",
    "genre": "Adventure",
    "bookId": "1011"
}

book12 = {
    "title": "The Missing Dragon",
    "author": "Hagrid",
    "genre": "Adventure",
    "bookId": "1012"
}

book13 = {
    "title": "Many Faces of Nymphadora Tonks",
    "author": "Hermoine Granger",
    "genre": "Biography",
    "bookId": "1013"
}

book14 = {
    "title": "Truth and Lies: The Stories of Severus Snape",
    "author": "Horace Slughorn",
    "genre": "Biography",
    "bookId": "1014"
}



db.books.insertOne(book0)
db.books.insertOne(book1)
db.books.insertOne(book2)
db.books.insertOne(book3)
db.books.insertOne(book4)
db.books.insertOne(book5)
db.books.insertOne(book6)
db.books.insertOne(book7)
db.books.insertOne(book9)
db.books.insertOne(book10)
db.books.insertOne(book11)
db.books.insertOne(book12)
db.books.insertOne(book13)
db.books.insertOne(book14)