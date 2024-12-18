const owner = document.getElementById("owner");
const cvv = document.getElementById("cvv");
const cardNumber = document.getElementById("cardNumber");
const expirationDate = document.getElementById("expirationDate");
const cancel = document.getElementById("cancel");
const confirm = document.getElementById("confirm");
const confirm2 = document.getElementById("confirm2");
const Name = document.getElementById("name");
const lastName = document.getElementById("lastName");
const idNum = document.getElementById("id");

function emptyChecker() {
    let ar = [];

    if (owner.value == '') {
        ar.push("owner");
    }
    if (cvv.value == '') { // Changed from `else if` to `if` to check all fields
        ar.push("CVV");
    }
    if (cardNumber.value == '') { // Changed from `else if` to `if` to check all fields
        ar.push("Card Number");
    }
    if (expirationDate.value == '') { // Changed from `else if` to `if` to check all fields
        ar.push("Expiration Date");
    }
    if (lastName.value == '') { // Changed from `else if` to `if` to check all fields
        ar.push("Last Name");
    }
    if (idNum.value == '') { // Changed from `else if` to `if` to check all fields
        ar.push("ID Number");
    }
    if (Name.value == '') { // Changed from `else if` to `if` to check all fields
        ar.push("Name");
    }
    return ar;
}

function alertBuild(ar) {
    let alertInfo = ""; // Initialize alertInfo inside this function
    for (let i = 0; i < ar.length; i++) {
        switch (ar[i]) {
            case "owner":
                alertInfo += " Owner,";
                break;
            case "CVV":
                alertInfo += " CVV,";
                break;
            case "Card Number":
                alertInfo += " Card Number,";
                break;
            case "Expiration Date":
                alertInfo += " Expiration Date,";
                break;
            case "Last Name":
                alertInfo += " Last Name,";
                break;
            case "ID Number":
                alertInfo += " ID Number,";
                break;
            case "Name":
                alertInfo += " Name,";
                break;
                
            default:
                break;
        }
    }
    return alertInfo; // Return the built string
}

function mainFunction() {
    let array = emptyChecker();
    if(array.length == 0){
        alert("Complete")
    }
    else{
        let alertInfo = alertBuild(array); // Assign the returned value to alertInfo
        alert(alertInfo += " windows are empty!")
    }
}

confirm.addEventListener('click', () => mainFunction());
confirm2.addEventListener('click', () => mainFunction());


