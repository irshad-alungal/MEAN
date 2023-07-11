products=[
    [1, 'hide and seek' ,50,20] ,
    [2, 'lays' ,20,80],
    [3, 'oreo' ,40, 100],
    [4, 'parleG' , 25,0] ,
    [5, 'tiger' , 20,30] ,
    [6, 'unibic' ,60,20],
    [7, 'good day' , 70,20]
]
console.log('\n================================');
productName= products.map(pd=>pd[1]).forEach(pd=>console.log(pd))
console.log(productName);
console.log('\n================================');
priceLiimit= products.filter(pd=>pd[2]>50)
console.log(priceLiimit);
console.log('\n================================');
// oreoPrice= products.find(pd=>pd[1]==oreo?pd[2]:null)
// console.log(oreoPrice);