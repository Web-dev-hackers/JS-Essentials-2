//create a function called 'isScammer' that receives 3 inputs 'isLoggedIn', 'isAuthenticated' and 'isSubscribed'
//check if one of these parameters has no value return false otherwise return true

//after that uncomment the next lines
//var result1 = isScammer('', true, 56)
//var result2 = isScammer('str', true, 0)
//var result3 = isScammer('whatever', false, 88)
//console.log(result1, result2, result3) // all of them false
//create a function called 'isScammer' that receives 3 inputs 'isLoggedIn', 'isAuthenticated' and 'isSubscribed'
//check if one of these parameters has no value return false otherwise return true

var isLoggedIn = String
var isAuthenticated = Boolean
var isSubscribed = Number

function isScammer(isLoggedIn,isAuthenticated,isSubscribed){
   
    if ((isLoggedIn !== true && isAuthenticated !== true && isSubscribed == true)){
    return "true"
    }
    // else if ((isLoggedIn !== true && isAuthenticated == true && isSubscribed !== true)){
    //     return "true"
    // }
    // else if ((isLoggedIn == true && isAuthenticated !== true && isSubscribed !== true)){
    //         return "true"
    // }
    else {
        return "false"
    }

}

// after that uncomment the next lines
var result1 = isScammer('', true, 56)
var result2 = isScammer('str', true, 0)
var result3 = isScammer('whatever', false, 88)
console.log(result1, result2, result3) // all of them false
