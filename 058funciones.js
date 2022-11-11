var factura1={
    numero:1,
    concepto:"ordenador",
    importe: 1000,
};

var factura2={
    numero:2,
    concepto:"tablet",
    importe: 500,
};


var factura3={
    numero:3,
    concepto:"raton",
    importe: 50,
};
console.log("suma:" + (factura1.importe + factura2.importe + factura3.importe));

var misfacturas=[factura1,factura2,factura3];
var sumahorrible=0;
for (var i=0;i<misfacturas.length;i++){
    sumahorrible=sumahorrible+misfacturas[i].importe;
}
console.log(sumahorrible);

