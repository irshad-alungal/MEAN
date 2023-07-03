// hcf 

num1 = 12;
num2 = 36;
gcd= 0;
for (i=0; i<=num1; i++) {
        if (num1%i==0 && num2%i==0) {
            gcd = i;
        }
}

console.log(`gcd (${num1},${num2}) = ${gcd}`);