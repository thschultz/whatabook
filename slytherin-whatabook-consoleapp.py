# // Title:  slytherin-whatabook-consoleapp.py
# // Author:  John Vanhessche 
# // Date: 8 December 2022 
# // Description:  slytherin-whatabook-consoleapp.py 

#importing MongoClient
from pymongo import MongoClient;
import datetime;

#Connecting to MongoDB
url = "mongodb+srv://web335_user:s3cret@bellevueuniversity.ouotidt.mongodb.net/web335DBretryWrites=true&w=majority"
client = MongoClient(url);

#access variable for web335DB
db = client['web335DB'];

########################################Application Start#############################################################################

def main():
        printWelcome()
    
# Main welcome script to capture user initial choice
def printWelcome():
    print("Welcome to WhatABook.  Please enter a choice below:")
    print("1 - List ALL books")
    print("2 - List books by criteria")
    print("3 - View Wish List")

# choice is evaluated and sent to the appropriate function
# no need to hve a separate function for listing all books, so that is executed immediately
# the other choices have further selections that need to be made
    choice = int(input("\nEnter a selection: "))    #capture user input
    
    if choice == 1:
        for book in db.books.find({}):
            print(book);
    elif choice == 2:
        listByChoice();
    elif choice == 3:
        wishList();
    else:
        exit()      #any invalid selection terminates the application.....for now.



# The is the parent for listBy{Author, Genre, BookId} functions.  This allows for a cleaner Welcome screen and a return point.
def listByChoice():
    print("\nPlease select your criteria")
    print("1 - List books by Author")
    print("2 - List books by Genre")
    print("3 - List books by bookId")
    print("\n0 - Home")

    criteria = int(input("\nEnter a selection: "))    #capture user input
    
    if criteria == 1:
        listByAuthor();
    elif criteria == 2:
        listByGenre();
    elif criteria == 3:
        listByBookId();
    elif criteria == 0:         #They can escape back to the Welcome screen by typing 0
        printWelcome();
    else:
        listByChoice();         #typing anything other than the valid selections, returns to the top of the function



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
            print(book)
    elif genre == 2:
        for book in db.books.find({"genre": "Horror"}):
            print(book)
    elif genre == 3:
        for book in db.books.find({"genre": "Non-Fiction"}):
            print(book)
    elif genre == 4:
        for book in db.books.find({"genre": "Fantasy"}):
            print(book)
    elif genre == 5:
        for book in db.books.find({"genre": "How-To"}):
            print(book)
    elif genre == 0:
        listByChoice();     #escapes back to parent
    else:
        listByGenre();      #not a valid selection, so return to the top of the function



#This function will return a book by it's bookId.  This is NOT the mongo _id.  
def listByBookId():    
    bookId  = str(input("\nEnter a four digit book Id  b-"))   #capture user input
    for book in db.books.find({"bookId": "b"+bookId}):   #appending 'b' to user entered number for value to key.
        print(book);
    # TODO error handling for invalid number




#This function will ask a user to enter their customer Id.  it will then return the books in that customer's wishlist to that Id.
#TODO this will return an embedded object(s).
def wishList():
    print("Wish List is under construction")  
    # wishList = str(input("\nEnter your customer Id c-"))
    # for customer in db.customer.find(wishList, 
    # {

    # })



#under construction.  The function will ask the user type in an author, then it should return books for that author.
def listByAuthor():
    author = str(input("\nFind an author.  Example: John Grisham: "))    
    for author in db.books.find({"author": author}):
        print(author);
#TODO develop an if/else to use $exist operator to check for existence of inputted author, if found return author, otherwise return error.    
        




# #possible future console requirement
# def addBookToWishList():
#     print("under construction")

# #possible future console requirement
# def removeBookFromWishList():
#     print("under construction")

# def listCustomers():
#     listById();
#     listByLastName();


main()