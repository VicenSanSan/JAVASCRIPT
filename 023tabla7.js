
var tabla  = process.argv[2];
var linea="";
console.log("TABLA DEL "+ tabla)
for (var i=0; i<=10;i=i+1){
    linea=  tabla +  " x "  + i + " = " + i* tabla ;
    console.log(linea)
}



