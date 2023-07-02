num1 =52
num2 =62
num3 = 55

console.log(num1>num2?'num1 is larger':num1<num2?'num2 is larger':'equal');

if (num1>num2 && num1>num3){
    if (num2>num3){
        console.log('num2 is second largeest number');
        console.log(num1, num2, num3);    
    }
    else{
        console.log('num3 is second largest number');
        console.log(num1, num3, num2);
    }
}
else if (num2>num1 && num2>num3){
    if (num1>num3){
        console.log('num1 is second largeest number');
        console.log(num2, num1, num3);    
    }
    else{
        console.log('num3 is second largest number');
        console.log(num2, num3, num1);
    }
}
else if (num3>num1 && num3>num2){
    if (num1>num2){
        console.log('num1 is second largeest number');
        console.log(num3, num1, num2);    
    }
    else{
        console.log('num2 is second largest number');
        console.log(num3, num3, num1);
    }
}