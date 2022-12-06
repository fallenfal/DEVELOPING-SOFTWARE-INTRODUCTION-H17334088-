
// defining the full name variable with an empty value
var fullName

// setting up the exit word
var exitWord = 'QUIT'

// looping thru the questions with a while loop
// we set the condition to true so we can always ask for the surname
while(true){
    // asking for the surname
    var surname = prompt("What is your Surname? ")

    // checking if the surname is equal with the exit word
    // if its equal we sent an alert the the program has ended and we exit the loop with the break statement
    if(surname.toUpperCase() == exitWord){
        alert('The program now will exit')
        break
    }

    // asking for the other 2 names
    forename = prompt("what is your Forename? ")
    middleName = prompt("What is your middle name?")

    // putting all the names together
    fullName = surname + " " + middleName + " " + forename

    // displaying the fullname of the customer
    alert("Customer names is " + fullName)
}




