products=[
    [1, 'hide and seek' ,50,20] ,
    [2, 'lays' ,20,80],
    [3, 'oreo' ,40, 100],
    [4, 'parleG' , 25,0] ,
    [5, 'tiger' , 20,30] ,
    [6, 'unibic' ,60,20],
    [7, 'good day' , 70,20]
]
console.log('\n===========product name=============');
productName= products.map(pd=>pd[1]).forEach(pd=>console.log(pd))
console.log(productName);
console.log('\n===========price less than 50=============');
priceLiimit= products.filter(pd=>pd[2]<50).forEach(pd=>console.log(pd[1]))
console.log(priceLiimit);
console.log('\n==========oreo price==========');
oreoPrice= products.find(pd=>pd[1]=='oreo')[2]
console.log(oreoPrice);
console.log('\n========costly product=============');
costly= products.reduce((pd1,pd2)=>pd1[2]>pd2[2]?pd1:pd2)[1]
console.log(costly);
console.log('\n=========out of stock===========');
outStock= products.find(pd=>pd[3]==0)[1]
console.log(outStock);
console.log('\n=======max availability============');
maxAvl= products.reduce((p1,p2)=>p1[3]>p2[3]?p1:p2)[1]
console.log(maxAvl);
console.log('\n=======sort in order to availability============');
products.sort((p1,p2)=>p1[3]-p2[3]).forEach(p=>console.log(p[1]))
console.log('\n=======there is any product purchase in 10 rupee============');
checking= products.some(p=>p[2]<=10)
console.log(checking?'yes':'no');
console.log('\n=======there is any product in the range of 10 - 30 rupee============');
p = products.some(p=>p[2]>=10&&p[2]<=30);
console.log(p?'yes':'no');
console.log('\n=======list of product in the range of 10 - 30 rupee============');
products.filter(p=>p[2]>=10&&p[2]<=30).forEach(p=>console.log(p[1]));
