input=4;

i=1;
str="";
sum=0;

while(i<=input){
    str+=input;
    sum+=Number(str);
    i++;
}

console.log(sum);