var lista1= process.argv;
var lista=[3,7,9]
var suma=0;


for (var i = 2; i < lista1.length; i = i + 1) {
   console.log("el valor de lista1 [" + i +"] es " + lista1[i]);
        }    

    
for (var i = 2; i < lista1.length; i = i + 1) {
    suma= suma + parseInt(lista1[i])
    }    

    console.log(suma);
