
function calcularMediaAritmetica (lista) {

     const sumalista = lista.reduce(  // esto es lo mismo que con el for 
         function(valorAcumulado = 0, nuevoElemento){
             return valorAcumulado + nuevoElemento;
         }
     );
 
     const promedioLista = sumalista / lista.length;
     return promedioLista;
 }
 
const lista1 = [
    100,
    10000,
    2,
    500

];

const mitadlista1 = parseInt(lista1.length / 2);

function esPar(numerito){
    if (numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
}

let mediana;

lista1.sort(function(a,b){
    return a-b; // con esta funcion anonima ordeno en fomra ascendente el array, si se quiere en forma descendente solo es de colcoar b-a 
});

if (esPar(lista1.length)){
    const elemento1 = lista1[mitadlista1 - 1];
    const elemento2 = lista1[mitadlista1];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
    mediana = promedioElemento1y2;

} else {
    //posicion mitadLista1 dentre lista1
    //-> mediana
    mediana = lista1[mitadlista1];
}


// Ahora se va a crear una funcion que haga que el array se ordene y devuelva la mediana
function calcularMediana (lista){
    const mitadlista = parseInt(lista.length / 2);

    let mediana;

    lista.sort(function(a,b){
        return a-b;  
    });

    if (esPar(lista.length)){
        const elemento1 = lista[mitadlista - 1];
        const elemento2 = lista[mitadlista];

        const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
        return mediana = promedioElemento1y2;

    } else {
        //posicion mitadLista1 dentre lista1
        //-> mediana
        return mediana = lista[mitadlista];
    }

}