var car ={
    name : "boleno",
    model : "hatch back",
    manufacturer : "maruti",
    price : "10 lakh"
}

console.log(car);

console.log(car['manufacturer']);

check ='model' in car? 'yes' : 'no'
console.log(check);

'variant' in car? 'yes' : car.variant=['Automatic'];
console.log(car);

car.variant.push("Manual")
console.log(car);