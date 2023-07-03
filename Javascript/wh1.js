input =2
up = 36
low = 8
i=1

while (i<=up) {
    let sq=i**input
    if (sq>=low && sq<=up) {
        console.log(i);
    }
    i++
}