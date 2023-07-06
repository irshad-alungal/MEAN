expense =[22000,56000,14000,63000,5000 ]

total=0
for (let amount of expense) {
    total+=amount
}
console.log(total);

maxExpense=0

for (let amount of expense) {
    if (amount>maxExpense) {
            maxExpense=amount
        }
}
console.log(maxExpense);

minExpense=expense[0]

for (let amount of expense) {
    if (amount<minExpense) {
            minExpense=amount
        }
}

console.log(minExpense);