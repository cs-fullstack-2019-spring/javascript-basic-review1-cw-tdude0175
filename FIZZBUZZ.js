


//Your code should start at 1 and then iterate (count) each number up to the maximum number entered by the User.
// If the current number is evenly divisible by 3 you should log FIZZ and the number
// If the current number is evenly divisible by 5 you should log BUZZ and the number
// If the current number is evenly divisible by both 3 and 5 you should log FIZZBUZZ and the number
// Otherwise, just print the current number


var num1 = parseInt(prompt("enter a number."));

for(var numstr = 1;numstr <=num1; numstr++)
{
    //var Divis_3 = (parseFloat(numstr)/3);
    var Divis_3 = numstr%3;
    var Divis_5 = numstr%5;

    if(0 === Divis_3 && Divis_5 === 0 )
    {
        console.log("FIZZBUZZ");
    }
    else if(Divis_5 === 0 )
    {
        console.log("BUZZ");
    }
    else if (Divis_3 === 0)
    {
        console.log("FIZZ");
    }
    else
        {
            console.log(numstr);
        }
}

// trying to use parseFloat and parseInt to confirm wether a number is divisble by a number.