/// node factorial-recursion.js \\\

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

console.log('');
console.log('Factorial');
let fact = 1;
for(i=8; i>=1; i--)
{
    fact = fact * i;
}
console.log(fact);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

console.log('Factorial - Reverse Form');
let factIncrement = 1;
for(i=1; i<=8; i++)
{
    factIncrement = factIncrement * i;
}
console.log(factIncrement);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

console.log('Factorial by Function');
function factorial(n)
{
    if(n==1)
    {
        return 1;
    }

    return factorial(n-1) * n
}

let result = factorial(6);
console.log(result);

