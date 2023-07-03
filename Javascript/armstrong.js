//w.a.p to check a number is armstrong or not
//153 = 1^3+5^3 +30 =1+125+27

num=153;
input=num;
sum=0;
while (num>0){
    lastDigit = num%10
    sum+=lastDigit**3
    num = Math.floor(num/10)
}
console.log(input===sum?'armstrong': 'not armstrong' ) ;