/// node simple-recursion.js \\\

/* console.log('');
console.log('Increment >>>>>>>>>>>>>>>');

let sum = 0;
for(let i=1; i<=6; i++)
{
    console.log(i);
    sum = sum + i;
    
}
console.log('Total :',sum);

console.log('');
console.log('Decrement >>>>>>>>>>>>>>>');

let secondSum = 0;
for(let i=6; i>=1; i--)
{
    console.log(i);
    secondSum = secondSum + i;
}
console.log('Total :',secondSum); */

// Now Sum in recursive way

console.log('');
console.log('Recursion >>>>>>>>>>>>>>>');

function sum(i)
{
    if(i==1) // Base-Case (Stoppage)
    {
        return 1;
    }
    return sum(i-1) + i; // Recursive-Call
    /* 
    return sum(5) + 6;
    return sum(4) + 5 + 6;
    return sum(3) + 4 + 5 + 6;
    return sum(2) + 2 + 4 + 5 + 6;
    return     1  + 2 + 4 + 5 + 6; 
    */

}
let result = sum(6);
console.log(result);

