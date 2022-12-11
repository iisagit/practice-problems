const prompt = require("prompt-sync")();

const nTerms = Number(prompt("Enter a number to generate Fibonacci series : "));

if(nTerms < 0){
    console.log("Enter a positive integer, please");
}
else{
    console.log("The series is as follows:");
    // This calls recursive function
    // for (i = 0; i < nTerms; i++){
    //     console.log(fibonacci(i));
    // }

    // This calls iterative function
    fibo(nTerms);
}

function fibonacci(num){
    if(num < 2)
    {
        return num;
    }
    else{
        return fibonacci(num-1) + fibonacci(num-2);
    }
}


/* The following function uses iteration instead of recursion.*/

function fibo(num){
    let f1 = 0;
    let f2 = 1;
    let temp;

    for(i=0; i<num; i++){
        console.log(f1);
        temp = f2 + f1;
        f1 = f2;
        f2= temp;
    }

}
