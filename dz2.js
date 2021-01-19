let a = prompt('Birinchi sonni kiriting')
let b = prompt('Ikkinchi sonni kiriting')
let c = prompt('Uchinchi sonni kiriting')
if ((a>b && a<c) || (a<b && a>c)) {
    alert(a)
}
else if((b>a && b<c) || (b<a && b>c)){
    alert(b)
}
else{
    alert(c)
}