var mobileValid = (mobile) =>{
    return mobile.length==10? 'valid': 'not valid'
}
console.log(mobileValid("0123546789"));