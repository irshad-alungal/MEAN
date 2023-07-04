for (row=1; row<=4; row++) {
    str = " ";
    for (col=1; col<=7; col++) {
        if ( row==4 || row+col==5 || col-row==3 ) {
            str+= "*";
        }
        else {
            str+= " ";
        }
    }
    console.log(str);
}