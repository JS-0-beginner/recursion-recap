/// node fibonacci-series-recursive.js \\\

// Normal-Series

/* 
const fibo = [0, 1];

for(let i=2; i<=6; i++)
{
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo); 
*/

// Series- Recursive

function fibonacciSeries(n)
{
    if(n==0)
    {
        return [0];
    }
    else if(n==1)
    {
        return [0, 1];
    }
    const fibo = fibonacciSeries(n-1) 
    // Recursive-Call - 1([0, 1]), 2, 3, 4, 5

    fibo[n] = fibo[n-1] + fibo[n-2];

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    /* 
    fibo[n] 
    fibo[1] = [0, 1]

    fibo[2] = fibo[2-1] + fibo[2-2] 
    fibo[2] = 1 + 0 (index-wise)  = [0, 1, 1]

    fibo[3] = fibo[3-1] + fibo[3-2];
    fibo[3] = 2 + 1 (index-wise)  = [0, 1, 1, 2]

    fibo[4] = fibo[4-1] + fibo[4-2];
    fibo[4] = 3 + 2 (index-wise)  = [0, 1, 1, 2, 3]

    fibo[5] = fibo[5-1] + fibo[5-2];
    fibo[5] = 4 + 3 (index-wise)  = [0, 1, 1, 2, 3, 5]
     */
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    return fibo;
}

const result = fibonacciSeries(5);
console.log(result);