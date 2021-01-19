let age = prompt ('Yoshingizni kiriting')
if(age>0 && age<=18) {
    alert("Yoshsiz. O'qishiningiz kerak");
}
if(age>18 && age<=50){
    alert("Ishlashingiz kerak");
}
if(age>50 && age<=59){
    alert("Yaqinda pensiyaga chiqasiz");
}
else if(age>59 && age<=150) {
    alert("Pensionerga o'xshaysiz, hali tirik bo'lsangiz :)");
}
else {
    alert("Nimadir notog'ri ketib qoldi");
}