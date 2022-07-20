var useryear = prompt('Yoshingizni kriting');

if(useryear <= 18){
    console.log("Yoshsiz oqishingiz kerak!");
} else if (useryear <= 50) {
    console.log("Ishlashingiz kerak!");
} else if (useryear <= 59){
    console.log("Yaqinda pensiyaga chiqasiz!");
} else if (useryear <= 150){
    console.log("Pensioner ekansiz");
} else {
    console.log("ERROR!!!");
}
