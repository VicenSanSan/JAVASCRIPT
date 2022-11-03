var edad = process.argv[2];
var nota = process.argv[3];
var paga = 0;

if (edad >= 12) {

    if (nota >= 5 && nota < 8) {
        paga = paga + 5;
        console.log(paga)
    } else if (nota >= 8 && nota < 10) {
        paga = paga + 10;
        console.log(paga)
    } else {
        paga = paga + 20
        console.log(paga)
    }

} else {
    console.log("no tienes paga")
}