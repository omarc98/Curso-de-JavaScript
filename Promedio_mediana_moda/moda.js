/*const lista1 = [
    1,
    1,
    2,
    3,
    4,
    4,
    4,
    5,
    1,
    2
];
// la lista se lo esta conviertiendo en un objeto,
//para que este array se vea cual es el elemento mas grande

const lista1Count = {}; //aqui creo el objeto 
// esta parte cuenta cuantas veces se repite el numero dentro de la lista o el array
lista1.map(
    function (elemento){
        if (lista1Count[elemento]){
            lista1Count[elemento] += 1;
        } else{
        lista1Count[elemento] = 1;
        }
    }
);
//Ahora se debe volver a convertir este objeto en un array y se lo hace con el entries, esto para encontrar el numeor que se repite mas veces en el objeto que eso ya nos da
const lista1Array = Object.entries(lista1Count).sort(
    function(valorAcumulado, nuevoValor){
        return valorAcumulado[1] - nuevoValor[1];
    }
);

const moda =lista1Array[lista1Array.length - 1];*/

function calcularModa (lista){
    const listaCount = {};

    lista.map(
        function(elemento){
            if (listaCount[elemento]){
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    )
    const listaArray = Object.entries(listaCount).sort(
        function(valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1];
        }
    );
    const moda = listaArray[listaArray.length -1];

    return moda;
};

