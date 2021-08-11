/// node fibonacci-element-recursive.js \\\

// Normal-Series

/* 
const fibo = [0, 1];

for(let i=2; i<=6; i++)
{
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo); 
*/

// Element from Series

function fibonacci(n)
{
    if(n==0)
    {
        return 0;
    }
    if(n==1)
    {
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

const result = fibonacci(6);
console.log(result);