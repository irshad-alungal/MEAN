a=[
    [10,30],
    [40,60],
    [50,80],
    [20,90],
    [75,70]
]
console.log('================================');
console.log(a.flat(2));

console.log('\n========print all no <50=============');
p= a.flat().filter(p=>p<50)
console.log(p);
a.flat().filter(p=>p<50).forEach(p=>console.log(p))
console.log('\n========sq of each=============');
sq=a.flat().map(p=>p**2)
console.log(sq);
a.flat().map(p=>p**2).forEach(p=>console.log(p))
console.log('\n========total sum=============');
ts=a.flat().reduce((a1,a2)=>a1+a2);
console.log(ts);
console.log('\n========print highest no=============');
ht=a.flat().reduce((a,b)=>a>b?a:b)
console.log(ht);