/* g4g: https://www.geeksforgeeks.org/segregate-0s-and-1s-in-an-array-by-traversing-array-once/

You are given an array of 0s and 1s in random order. Segregate 0s on left side and 1s on right side of the array [Basically you have to sort the array]. Traverse array only once. 

Input array   =  [0, 1, 0, 1, 0, 0, 1, 1, 1, 0] 
Output array =  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1] 

We are writing out method 2
*/

/* psuedo-code:

1. left counter = 0, right = n-1
2. loop and each iteration check the leftmost, rightmost and come towards center, as long as it is 0 on the left and 1 on right
3. when u encounter 1 on the left, or 0 on right, switch it to opp and moveon to next iteration.

*/


/* THe following is what I wrote having looked at the soln logic and trying to recreate how it works with my own code. 
I tried with and without continue and break.
Once I could see it not working, if I had taken the time to trace the problem with pen and paper, iteration and iteration I could have come up with the solution ina bout an hour by trying different things.
Try that next time.

let arr = [0,0,0,1,1,0,0,1,0,0,1,1,1,1];

console.log(sortArr(arr, arr.length));

function sortArr(arr,n){
    let left = 0; right = n-1;
    while(left<right){
        while(arr[left]===0 && arr[right]===1){
            left++;
            right--;
        }
        if(arr[left]===1){
            arr[left]=0;
            left++;
            break;
        }
        else{
            left++;
            break;
        }
        if(arr[right]===0){
            arr[right]=1;
            right--;
            break;
        }
        else{
            right--;
            break;
        }
    }
    return arr;
}

*/

let arr = [0,0,0,1,1,0,0,1,0,0,1,1,1,1];

console.log(sortArr(arr, arr.length));

function sortArr(arr,n){
    let left = 0; right = n-1;
    while(left<right){
        while(arr[left]===0 && left<right){
            left++;
        }
        while(arr[right]===1 && left<right){
            right--;
        }
        if(left<right){
            arr[left]=0;
            arr[right]=1;
            left++;
            right--;
        }
    }
    return arr;
}
