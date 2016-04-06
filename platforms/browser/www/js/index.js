
function validate() {
  // accept only credit cards with 13 to 16 digits
   var cardNumber=document.getElementById("cardValue").value;
   var numberOnly=/^[1-9]{1}[0-9]{12}([0-9]?){3}$/;  
   if (cardNumber==""||numberOnly.test(cardNumber)==false) {
        document.getElementById("result").innerHTML ="Please enter a valid credit card number";
    } //close first if
    else{
        // The Luhn Algorithm
        var sum = 0, nDigit = 0, bEven = false;
        for (var n = cardNumber.length - 1; n >= 0; n--) {
        var cDigit = cardNumber.charAt(n),
              nDigit = parseInt(cDigit, 10);

        if (bEven) {
            if ((nDigit *= 2) > 9)
                nDigit -= 9;
        }

        sum += nDigit;
        bEven = !bEven;
        }
        if (sum % 10==0){
            document.getElementById("result").innerHTML ="Valid Credit Card Number";
        }//close second if
        else {
            document.getElementById("result").innerHTML ="Invalid Credit Card Number";
        }

    }// close else statement
} //close check function

    
    
  