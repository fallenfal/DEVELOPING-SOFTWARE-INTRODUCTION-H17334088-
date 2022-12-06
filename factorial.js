// defining the factorial function with 1 parameter
function factorial(value){
    // defining the result variable to be able to store the final result
    // assign it the value 1 because in a mutiplication it dosent affect the final result. every thing multiplied by 1 is still the same amount
    var result = 1

    // looping over the number of times the argument asks us to do soo
    for(var i = 1; i <= value;i++){
        // multipicating the result each time until we reach the coindition above i <= parameter
        result = result * i
    }
    console.log(result)
}





factorial(5)
factorial(3)
factorial(6)
factorial(10)
factorial(2)























