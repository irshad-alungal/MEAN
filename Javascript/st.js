str = "Hello Hai"

console.log(Array.from(str));
vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

// for ( let char of str ) {
//     if (vowels.includes(char)){
//         console.log(char);
//     }
// }

Array.from(str).filter(char=>vowels.includes(char)).forEach(char=>console.log(char))