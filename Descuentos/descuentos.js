function descuentosCalculo (precio, descuento){
    var final = precio*(100-descuento)/100;
    return final;
}

const cupons = [
    "OsoPolar",
    "Giant",
    "Tortlue "
];
const texto = document.getElementById("CuponesT");
texto.innerText = "Los cupones son: "+ cupons;


function descuentoPrecio (){
    var precio = document.getElementById("InputPrice");
    var value1 = precio.value;
    var descuento = document.getElementById("InputDescount");
    var value2 = descuento.value;
    let value3 = document.getElementById("InputCupon");
    let cupones = value3.value;

    if(!cupones) {
        var descuentoNuevo= value2
    }// como no existe cupon es falso entra en el if y me asigna el precio de descuento a la variable
 
    switch (cupones) {
        case cupons[0]:
            var descuentoNuevo = 75;         
            break ;
        case cupons[1]:
            var descuentoNuevo = 50;         
            break ;
        case cupons[2]:
            var descuentoNuevo = 25;         
            break ;
        default:
            alert("No existe cupon ingresado");
            if (!cupons.includes(cupones)){ //el array.includes() permite validar si existe el nombre que se ingresa en el array que establecemos, es decir si el cupon que se ingresa es valido
                alert("El cupón ingresado: "+cupones+" no es válido ")
            }
            break;
    }
     var result = descuentosCalculo(value1,descuentoNuevo);

     var resultP = document.getElementById("ResultP"); // con esto estoy llamando a mi  id del parrafo que deje como etiqueta en html y lo guardo en una variable 
     resultP.innerText = "El precio con descuento es de : $"+result.toFixed(2);


}


