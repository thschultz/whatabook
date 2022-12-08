/**
	Title: slytherin-whatabook.js
    Authors: John Vanhessche, Thomas Schultz, Walter McCue
    Date: 8 December 2022
    Description: MongoDB Shell Scripts for the WhatAbook customers and books collections.
 */

//Displays all books
db.books.find()
//Displays by given genre
db.books.find({"genre" : "Thriller"})
//Displays by given author
db.books.find({ "author": "Luna Lovegood"}
//Displays by given bookId
db.books.find({ "bookId" : "b1013" })