countEachVowel("helloQQ");

function checkVowels(str){
    vowels = ['a','e','i','o','u'];
    str = str.toLowerCase();
    console.log(str);
    let counter = 0;
    for(i=0; i<str.length; i++){
        if(vowels.includes(str[i])){
            console.log(`The string contains the vowel ${str[i]}`);
            counter++;
        }
    }
    console.log(`The string contained ${counter} vowels`);
}

function vowels(str){
    let counter = 0;
    let vowels = ['a','e','i','o','u'];
    for(char of str.toLowerCase()){
        if(vowels.includes(char)){
            counter++;
        }
    }
    console.log(`${counter} vowels`);
}

function countEachVowel(str){
    // console.log(str.indexOf('o'));
    let location;
    let counter = [0, 0, 0, 0, 0];
    let vowels = ['a','e','i','o','u'];
    for(char of str.toLowerCase()){
        if(vowels.includes(char)){
            index = str.indexOf(char);
            counter[index]++;
        }
    }
    console.log(`${counter}`);
}