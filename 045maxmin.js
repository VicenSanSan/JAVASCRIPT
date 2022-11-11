var lista=[3,5,6,7,34,17]
var max=lista[1];
var min=lista[1];

for (var i = 0; i < lista.length; i = i + 1) {
    if (lista[i]>max){
    max=lista[i];
    }
    if (lista[i] <min) {
    min=lista[i];
    }
}

console.log("La edad maxima es " + max);
console.log("La edad minima es " + min);
