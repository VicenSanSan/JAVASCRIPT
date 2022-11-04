var hasta = process.argv[2];
console.log("piramide de asteriscos")

var lineai = "";
var linead="*";
for (var i = 1; i <= hasta; i = i + 1) {
    for (var j = 1; j <= (hasta-i); j = j + 1) {
        lineai = lineai + "-";
    }    
    console.log(lineai + linead);
    linead = "*" + linead + "*";
    lineai = "";
}



