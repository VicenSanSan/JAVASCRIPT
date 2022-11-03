var importe = process.argv[2];

if (importe > 0 && importe < 10) {
    console.log("es muy barato");
}
else if (importe >= 10 && importe < 20) {
    console.log("es barato");
}
else if (importe >= 20 && importe < 30) {
    console.log("es normal");
}
else if (importe >= 30 && importe < 40) {
    console.log("me duele");
}
else {
    console.log("no te lo compro");
}
