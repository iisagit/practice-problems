const prompt = require("prompt-sync")();

let input = Number(prompt("enter a number to check if it is prime or composite - "));

if (input === 1)
    console.log("1 is neither a prime nor composite number.");
else
    isPrime(input);

function isPrime(input){
    for(i=2; i<=(input/2); i++){
        if(input%i === 0){
            console.log(`${input} is a prime number.`);
            return;
        }
    }
    console.log(`${input} is a composite number.`);
}
