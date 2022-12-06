// setting up the global variables for the payments
var standardPay = 7.8
var overtimePay = 12.5

// defining a error funtion to throw everytime we encounter an error
function displayError(err){
    alert(err)
}

// defining a function that checks the value and return if true or false based on if the input is correct
function valueChecks(value){
    if(isNaN(value)){
        return false
    }
    if(typeof value === undefined){
        return false
    }
    if(value <= 0){
        return false
    }
    return true
}


// defining a function the asks the user for information
// and geting only the full hours worked , not the partial ones
function getData(){
    var hours = Math.floor(Number(prompt("Input your worked hours! ")))
    return hours
}

// calculate the payments
function calculatePay(hours, standardPay, overtimePay){
    // calculating the standard hours and the overtime hours
    var standardHours = hours => (hours > 37) ? 37 : hours
    var overtimeHours = hours => (hours > 37) ? hours - 37 : 0

    // calculating the amount of pay based on the hours
    var totalStandardPay = standardHours(hours) * standardPay
    var totalOvertimePay = overtimeHours(hours) * overtimePay
    console.log(totalStandardPay)
    console.log(totalOvertimePay)
    var totalPay = totalOvertimePay + totalStandardPay
    return totalPay
}


// defining the initialization function that displays the result
function init(userHoursWorked,totalPay){
    alert(`This week you have  worked ${userHoursWorked} and you will get ${totalPay.toFixed(2)}`)
}

// looping over to check for results and errors and displaying the result
while(true){

    // assigning the data from user to variables
    var userHoursWorked = getData()

    // calculating the payment
    var totalPay = calculatePay(userHoursWorked,standardPay,overtimePay)

    // checking if the value from the user input is correct
    if(!valueChecks(userHoursWorked)){
        displayError("Wrong Input! Consider entering a number grater than 0")
    } else {
        // if the information is correct we initialize the init function and exit the loop
        init(userHoursWorked,totalPay)
        break
    }
}












