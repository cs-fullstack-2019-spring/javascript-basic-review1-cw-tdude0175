# JavaScript Review Basics 1 CW

### Create a new *external* JavaScript file for each exercise. Modify the provided ```index.html``` file to point to the individual JavaScript file to test a given solution.

#### Exercise 1
Print ```Hello World``` in the console

#### Exercise 2
Ask the user for any input. Print that user input.

#### Exercise 3
Ask the user for input. Print ```Hello [THEIR NAME]```

#### Exercise 4
* Ask the user to input the temperature as a number (store in variable ```FTEMP```), and convert it to celcius (store in variable ```CTEMP```)
* Log the message ```FTEMP Fahrenheit equals CTEMP in Celcius```

Use the following line of code for the conversion (this uses a Math function which we will discuss more in future lessons):

```var CTEMP = Math.round((FTEMP - 32) * 5 / 9);```

#### BONUS: Keep prompting until the User actually enters a number (HINT: Look into using ```NaN```)

#### Exercise 5
Write a JavaScript program that does the following:
* Prompts the User to enter their outstanding loan amount as a number (```LOANAMT```)
* Prompts the User to enter the number of months in which they want to pay off the loan (```NUMMONTHS```)
* Calculates the monthly payment they need to make and logs it to the console as ```To pay of a loan of LOANAMT it will take NUMMONTHS months```

#### BONUS: Keep prompting until the User actually enters a number for both loan amount and number of months (HINT: Look into using ```NaN```)

## NINJA BONUS: FIZZBUZZ

FIZZBUZZ is the classic Programmer's challenge often used as part of job interviews.

User inputs the ending maximum value (e.g. 100) 

Your code should start at 1 and then iterate (count) each number up to the maximum number entered by the User.

* If the current number is evenly divisible by 3 you should log ```FIZZ``` and the number
* If the current number is evenly divisible by 5 you should log ```BUZZ``` and the number
* If the current number is evenly divisible by both 3 and 5 you should log ```FIZZBUZZ``` and the number 
* Otherwise, just print the current number


