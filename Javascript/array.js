// create array
weekDays = ['monday', 'tuesday', 'wednesday']

// to add new items to inside array
weekDays.push ('thursday', 'friday')

// remove an item from array - remove last one item only
weekDays.pop()

// find number of itms in array
console.log(weekDays.length);

// to get first item from array
console.log(weekDays[0]);

// to get last item from array 
console.log(weekDays[weekDays.length - 1]);

// display an array method-1
console.log(weekDays)

// display array using for loop method-2

for ( i = 0; i < weekDays.length; i++) {
    console.log(weekDays[i]);
}

// display array using for  loop and of keyword - methods-3
for (let day of weekDays) {
    console.log(day);
}