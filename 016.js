var importe = process.argv[2];
if (importe < 50) {
    if (importe < 40) {
        if (importe < 30) {
            if (importe < 20) {
                if (importe < 10) {
                    console.log("muy barato");
                } else {
                    console.log("barato");
                }
            } else {
                console.log("normal");
            }
        } else {
            console.log("me duele");
        }
    } else {
        console.log("no te lo compro");
    }
}