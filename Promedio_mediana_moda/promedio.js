const lista1 = [
    100,
    200,
    300,
    500,
];

let sumaLista1 = 0;
for (let i = 0; i<lista1.length; i++){
    sumaLista1 = sumaLista1 + lista1[i]; //con los corchetes hacemos para entrar a la posicion y valor que tenemos en nuestro array
}

const promedioLista1 = sumaLista1/ lista1.length;


function calcularMediaAritmetica (lista) {
   /*  let sumaLista = 0;
    for (let i = 0; i<lista.length; i++){
        sumaLista = sumaLista + lista[i]; //con los corchetes hacemos para entrar a la posicion y valor que tenemos en nuestro array
    } */

    const sumalista = lista.reduce(  // esto es lo mismo que con el for 
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumalista / lista.length;
    return promedioLista;
}
