
function convertBinaryToDecimal() {
    var binaryInput = document.getElementById("binaryInput").value;
    
    // Check if the input is a valid binary number
    if (/^[01]+$/.test(binaryInput)) {
        var decimalEquivalent = parseInt(binaryInput, 2);
        document.getElementById("result").innerHTML = "Decimal Equivalent: " + decimalEquivalent;

        // Clear the input field
        binaryInput.value = "";
    } else {
        document.getElementById("result").innerHTML = "Invalid binary input. Please enter a valid binary number.";
        binaryInput="";
    }
}