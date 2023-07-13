employee={
    id : 1,
    username : 'max',
    desg : 'developer',
    salary : 3400
}

console.log(typeof employee);

console.log(employee);

console.log(employee['username']);

console.log(employee.desg);

check = 'username' in employee?'yes': 'no'
console.log(check);

'experience' in employee? 'present': employee.experience=3
console.log(employee);

employee.salary+=6000
console.log(employee);

for ( let key in employee) {
    console.log(key+  " : " +  employee[key] );
}
