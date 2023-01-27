// Get the string from the page
//Controller Function
function getValue(){
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);

    displayString(revString, userString);
}

// Reverse the string
//Logic Function
function reverseString(userString){
    let revString = [];

    //Reverse string using for loop
    for (let i = userString.length - 1; i >= 0; i--){
        revString += userString[i];
    }

    return revString;
}

// Display the reversed string to the user
function displayString(revString, userString){
    //Write to the page
    if (revString.toLowerCase() == userString.toLowerCase()) {
        document.getElementById("msg").innerHTML = `Your Word IS a Palindrome`;
    } else {
        document.getElementById("msg").innerHTML = 'Your Word is NOT a Palindrome';
    }
    //Show the alert box
    document.getElementById("alert").classList.remove("invisible");
}