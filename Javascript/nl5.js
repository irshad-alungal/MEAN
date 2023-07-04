for (row=1;row<=4;row++) {
    str = ''
    for (space=4 ; space>row; space--) {
        str+=' '
    }
    for (col=1;col<=row;col++) {
        str+="* "
    }
    console.log(str);
}