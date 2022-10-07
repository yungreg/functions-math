 
 const addition = (numOne, numTwo) => {
    addedNums = numOne + numTwo // seems the variables here don't need a const...? experiment with let instead. edit: neither one works. *shoulder shrug.jpeg*
    return addedNums
 }
// remember since there's a value in the function, it needs tto be sent to a variable.
 const multiplication = (numToMultiply) => {
    multipliedNum = numToMultiply * 2
    return multipliedNum
 }

// note/: read the directions closely. pass the addedNums variable into Multiplication() function as anm argument.
addition(3, 7)
multiplication(addedNums)

console.log(multipliedNum)