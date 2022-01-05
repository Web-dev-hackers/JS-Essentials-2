var firstName ;
var lastName ;

/** functions */

//1. create a function called 'setNames' that set the variables 'firstName' to your first name & 'lastName' to your last name then call this function underneath it
function setNames(){
firstName = "taha"
lastName = "tarbah"
}
setNames()
//2. create a function called 'getSum' that receives 2 parameters & return the sum of them
function getSum(x,y){
   var sum = x + y
    return sum
}
//after that uncomment the next 2 line the result should be 7 on the console
var sumResult = getSum(5, 2)
console.log(sumResult) //7

//3. create a function called 'getSub' that receives 2 parameters (param1, param2) & return the value of param2 - param1
function getSub (param1,param2){
    var value = param2 - param1
    return value
}
//after that uncomment the next 2 line the result should be 15 on the console
var subResult = getSub(5, 20)
console.log(subResult) //15

//4. create a function called 'contactStr' that receives 3 parameters 2 string values & contactor value (empty string or - or _)
//it should contact the first 2 parameters with the contactor & return it
function contactStr (first,last,_) {
  var contact = first + _ + last
  return contact
}
//after that uncomment the next 2 lines
var fullName = contactStr(firstName, lastName, ' ') //here the contractor value is empty space
console.log(fullName) // you should see your full name on the console ;)

/**flow control statement */
//5. create a function called 'isEven' that receives a number & return true if this number is even other otherwise  return false
function isEven (number){
    if (number%2 == 1){
        // or just number%2 
        return true
    } 
    
    else{
        return false
    }
    
}

//after that uncomment the next 2 lines
console.log(isEven(5)) //false
console.log(isEven(20)) //true

/** the most important question */
//6. create a function called 'getGeneration' that receives the year of birth (eg 1976)
//then return the generation name based on these instructions
//1981 to 1996 return 'generation x'
//1997 to 2012 return 'generation z'
//2013 to infinity return 'generation Alpha'
function getGeneration(year){
    if (1980<year && year<1997){
        return "generation x"
    }
    else if ( 1996<year && year<2013){
        return 'generation z'
    }
    else ( year>1981 )
        return 'generation Alpha'
   
}

//after that uncomment the next line
console.log(getGeneration(2001)) // 'generation z'

//7. create a function called 'getGeneration2' that do the same task as the previous question(6) but using 'switch' statement instead
// function getGeneration2(){
//     switch (year) {
//         case 1980<:
//     }
// }
//after that uncomment the next line
//console.log(getGeneration2(2001)) // 'generation z'
