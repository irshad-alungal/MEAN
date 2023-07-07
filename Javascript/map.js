a=[10,12,11,13,14,15]

sq= a.map(num=>num**2)

console.log(sq)

cb= a.map(num=>num**3);

console.log(cb)

newArry= a.map(num=>num>=13?num-1:num+1);

console.log(newArry)

evenArray= a.filter(num=>num%2==0)

console.log(evenArray)

oddArray= a.filter(num=>num%2!=0)

console.log(oddArray)

cdArray= a.filter(num=>num<13)

console.log(cdArray)