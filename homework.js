//create a function called 'isScammer' that receives 3 inputs 'isLoggedIn', 'isAuthenticated' and 'isSubscribed'
//check if one of these parameters has no value return false otherwise return true
var isLoggedIn ;
var isAuthenticated;
var  isSubscribed;
function isScammer() {
    if(isLoggedIn !== null) {
        return isLoggedIn = false;
    }
    if(isAuthenticated  !== null) {
        return isAuthenticated = false;
    }
    if(isSubscribed  !== null) {
        return isSubscribed = false;
    }
}
//after that uncomment the next lines
var result1 = isScammer('', true, 56)
var result2 = isScammer('str', true, 0)
var result3 = isScammer('whatever', false, 88)
console.log(result1, result2, result3) // all of them false
