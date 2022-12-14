# // Title:  slytherin-whatabook-consoleapp.py
# // Author:  John Vanhessche 
# // Date: 8 December 2022 
# // Description:  slytherin-whatabook-consoleapp.py 
# // Modified By: Walter McCue on 12 December 2022

#importing MongoClient
from pymongo import MongoClient;
import datetime;

#Connecting to MongoDB
url = "mongodb+srv://web335_user:s3cret@bellevueuniversity.ouotidt.mongodb.net/web335DBretryWrites=true&w=majority"
client = MongoClient(url)

#access variable for web335DB
db = client['web335DB']

########################################Application Start#############################################################################

def main():
        printWelcome()
    
# Main welcome script to capture user initial choice
def printWelcome():
    print("Welcome to WhatABook.  Please enter a choice below:")
    print("1 - List ALL books")
    print("2 - List books by criteria")
    print("3 - View Wish List")
    print("4 - Exit")

# choice is evaluated and sent to the appropriate function
# no need to hve a separate function for listing all books, so that is executed immediately
# the other choices have further selections that need to be made
    choice = int(input("\nEnter a selection: "))    #capture user input
    
    if choice == 1:
        for book in db.books.find():
            print(
              "Book Title: ", book["title"] + "\n"
              "Genre: ", book["genre"] + "\n"
              "Author: " , book["author"] + "\n"
              "Book ID: ", book["bookId"] + "\n\n"
            )
        main()
    elif choice == 2:
        listByChoice()
    elif choice == 3:
        wishList()
    else:
        exit()      #any invalid selection terminates the application.



# The is the parent for listBy{Author, Genre, BookId} functions.  This allows for a cleaner Welcome screen and a return point.
def listByChoice():
    print("\nPlease select your criteria")
    print("1 - List books by Author")
    print("2 - List books by Genre")
    print("3 - List books by bookId")
    print("\n0 - Home")

    criteria = int(input("\nEnter a selection: "))    #capture user input
    
    if criteria == 1:
        listByAuthor()
    elif criteria == 2:
        listByGenre()
    elif criteria == 3:
        listByBookId()
    elif criteria == 0:         #They can escape back to the Welcome screen by typing 0
        printWelcome()
    else:
        print("Not a valid selection")
        listByChoice()         #typing anything other than the valid selections, returns to the top of the function



# The function will ask the user type in an author, then it should return books for that author.
def listByAuthor():
    author = str(input("\nFind an author.  Example: John Grisham: "))    
    authorObject = db.books.find_one({"author": author})
    if(authorObject):
        print("Book Title: ", authorObject["title"] + "\n"
              "Genre: ", authorObject["genre"] + "\n"
              "Author: " , authorObject["author"] + "\n"
              "Book ID: ", authorObject["bookId"] + "\n\n")
        main()
    else:
        print("Not a Valid Author")
        listByAuthor()



#child function to listByChoice.  Provides user with a list of genre's to select from
def listByGenre():
    print("\nSelect from one of the following genre's:")
    print("1 - Thriller")
    print("2 - Horror")
    print("3 - Non-Fiction")
    print("4 - Fantasy")
    print("5 - How-To")
    print("\n0 - Go Back")      

#Evaluate the selection and execute the appropriate mongo command.
#TODO need to format the output better, not sure how to do this yet....  pretty()??, set project and sort fields??
    genre = int(input("\nEnter a selection: "))    #capture user input

#evaluate user input and select the appropriate mongo command.
    if genre == 1:
        for book in db.books.find({"genre": "Thriller"}):
            print("Book Title: ", book["title"] + "\n"
              "Genre: ", book["genre"] + "\n"
              "Author: " , book["author"] + "\n"
              "Book ID: ", book["bookId"] + "\n\n")
        main()
    elif genre == 2:
        for book in db.books.find({"genre": "Horror"}):
            print("Book Title: ", book["title"] + "\n"
              "Genre: ", book["genre"] + "\n"
              "Author: " , book["author"] + "\n"
              "Book ID: ", book["bookId"] + "\n\n")
        main()
    elif genre == 3:
        for book in db.books.find({"genre": "Non-Fiction"}):
            print("Book Title: ", book["title"] + "\n"
              "Genre: ", book["genre"] + "\n"
              "Author: " , book["author"] + "\n"
              "Book ID: ", book["bookId"] + "\n\n")
        main()
    elif genre == 4:
        for book in db.books.find({"genre": "Fantasy"}):
            print("Book Title: ", book["title"] + "\n"
              "Genre: ", book["genre"] + "\n"
              "Author: " , book["author"] + "\n"
              "Book ID: ", book["bookId"] + "\n\n")
        main()
    elif genre == 5:
        for book in db.books.find({"genre": "How-To"}):
            print("Book Title: ", book["title"] + "\n"
              "Genre: ", book["genre"] + "\n"
              "Author: " , book["author"] + "\n"
              "Book ID: ", book["bookId"] + "\n\n")
        main()
    elif genre == 0:
        listByChoice();     #escapes back to parent
    else:
        listByGenre();      #not a valid selection, so return to the top of the function



#This function will return a book by it's bookId.  This is NOT the mongo _id.  
def listByBookId():    
    bookId  = str(input("\nEnter a five-digit book Id (example: b****): "))   #capture user input
    bookObject = db.books.find_one({"bookId": bookId})
    
    if(bookObject):
        print("Book Title: ", bookObject["title"] + "\n"
              "Genre: ", bookObject["genre"] + "\n"
              "Author: " , bookObject["author"] + "\n"
              "Book ID: ", bookObject["bookId"] + "\n\n")
        main()
    else:
        print("Not a valid bookId")
        listByBookId()



#This function will ask a user to enter their customer Id.  it will then return the books in that customer's wishlist to that Id.
def wishList():
    print("To view a wishlist, please type the customerId:")
    customerId = str(input("\nEnter your five-digit customer Id (example: c****): "))  #capture user input
    customerObject = db.customers.find_one({"customerId": customerId})

    if(customerObject):
        pipeline = [
            {
                "$match": {
                    "customerId": customerId
                }
            },
            {
                "$project": {
                    "_id": 0,
                    "wishlist": 1
                }
            }
        ]
        print("Wishlist for " + customerObject["firstName"] + " " + customerObject["lastName"] + ": ")
        for book in customerObject["wishlist"]:
            print("Title: ", book["title"] + "\n"
                "Author: ", book["author"] + "\n"
                "Genre: ", book["genre"] + "\n"
                "Book ID: ",  book["bookId"] + "\n\n")
        main()
    else:
        print("Customer not found")
        wishList()



main()