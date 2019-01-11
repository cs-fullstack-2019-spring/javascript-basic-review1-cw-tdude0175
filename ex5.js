


//Write a JavaScript program that does the following:
// Prompts the User to enter their outstanding loan amount as a number (LOANAMT)
// Prompts the User to enter the number of months in which they want to pay off the loan (NUMMONTHS)
// Calculates the monthly payment they need to make and logs it to the console as To pay of a loan of LOANAMT it will take NUMMONTHS monthly payments.
// BONUS: Keep prompting until the User actually enters a number for both loan amount and number of months (HINT: Look into using NaN)

do
    {

    var LOANAMT = parseFloat(prompt(" Enter loan amount required."));
    var NUMMONTHS = parseFloat(prompt(" How many months will you have to pay it off?"));

    var PAYMONTHS = parseInt(LOANAMT / NUMMONTHS);

    if(isNaN(LOANAMT)|| isNaN(NUMMONTHS))
    {
        console.log("Please input amount in numbers.");

    }
    else
        {
            console.log("It will take " + NUMMONTHS + " monthly payments of " + PAYMONTHS + " to pay back " + LOANAMT + " amount of funds.");
        }
    }while(isNaN(LOANAMT) && isNaN(NUMMONTHS));
//how to get console to pick up on not a number?
// parseInt used to make code more preety,
// Without parseInt will return repeating decimals, same can be said for parseFloat.