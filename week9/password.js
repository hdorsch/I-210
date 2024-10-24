function isStrongPassword(password) {
    // TODO: Write your solution here 
    // too short < 8
    if (password.length < 8) {
       return false
    }
    // contains password
    // if (password.indexOf("password") !== -1) {
    //    return false
    // } 
    if (password.includes("password")) {
        return false
     } 
    // needs uppercase
    if (password.toLowerCase() === password) {
       return false
    }
    return true
 }

 function drawTriangle(triangleSize) {
    // TODO: Add your solution here
    for (let i = 0; i < triangleSize; i++) {
        let stars = "";
        for (let j = 0; j <= i; j++) {
            stars += "*";
        }
        console.log(stars);
    }
 }

 function sortEvens(numArray) {
    // TODO: Write your solution here
    let evenNumbersToReturn = [];

    // logic
    for (let i = 0; i < numArray.length; i++) {
        const num = numArray[i];
        // modulus (%) sends back the remainder of the division
        if (num % 2 === 0) {
            evenNumbersToReturn.push(num);
        }
        evenNumbersToReturn.sort(function (a,b) {
            return a - b;
        })
    }
    return evenNumbersToReturn
}