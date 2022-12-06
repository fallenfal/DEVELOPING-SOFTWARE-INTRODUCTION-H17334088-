
// defining a quit program function that just alerts the user the program has finished
function quitProgram(){
    alert('Thank you for choosing Superslide Water Park')
}

// defining a display error function that we can call with an parameter so we can use it thru the program moere easily
function displayError(err){
    alert(err)
}

// defining the global variables for the calculations
var adults = 0;
var childrens = 0;
var adultPriceTicket = 10
var childPriceTicket = 5

// defining a display function the show an prompt with a small manu and return a choice made by the user
function displayMenu(){
    var choice = prompt('Choose your option:\n 1 Book a new party \n 2 See who has been in the park \n 3 See the total earnings')
    return choice;
}


// defining the function for the first option
function bookParty(){
    // asking for the number of adults and childern and converting them into a number
    var adult = Number(prompt("How many adults ? "))
    var children = Number(prompt("How many Children? "))

    // checking that they are numbers and nothing else
    if(adult === NaN || children === NaN) {
        // displaying an error if the inputs are not correct
        displayError("Input a correct number")
    } else {
        // calculating the number of visitors in the park and store them in the global variables
        adults = adults + adult
        childrens = childrens + children
    }
}


// defining the function for the second option
// an alert that shows us the global variables for the visitors
function displayUsers(){
    alert(`Today have been ${adults} adults and ${childrens} Childrens`)
}


// defining a function that calculates the earnings based on the number stored in the global variables
function seeEarnings(adults,children){
    var adultCost = adults * adultPriceTicket
    var childrenCost = children * childPriceTicket
    alert(`Adults cost is ${adultCost} and children is ${childrenCost} and the total is ${adultCost + childrenCost}`)
}

// calling the functions based on the choices made by the user

while(true){
    // getting the menu choice from the user
    var choice = displayMenu()

    // cheking the choices selected
    if(choice == 1){
        bookParty()
    } else if(choice == 2){
        displayUsers()
    } else if(choice == 3){
        seeEarnings(adults, childrens)
    } else if(choice == 0){
        // if 0 is selected we display an alert with the function quitProgram and then use the break statement to exit the loop
        quitProgram()
        break
    } else {
        // checks if the selection is correct, if not thows an alert that notifies to choose a correct one
        displayError("Please select a correct option or choose 0 to exit")
    }
}





