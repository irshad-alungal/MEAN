num=151
input=num
str=""

while (num>0) {
    lastDigit= num%10;
    str+=lastDigit;
    num=Math.floor(num/10);
}
console.log(str);
console.log(input==str?'palindrome':'not palindrome');