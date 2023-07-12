a=['irshad','anas','farasha','fahima']

some=a.some(item=>item=='irshad')
console.log(some);

inc=a.includes('irshad')
console.log(inc);

a.splice(1,2, 'hassan','sara');
console.log(a);
