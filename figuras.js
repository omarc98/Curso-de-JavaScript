//Codigo del cuadrado
console.group('Cuadrados'); //es para agrupar los mensajes de un grupo de lineas de codigo y para cerrarlo donde queramos colcamos console.groupEnd();
function perimetroCuadrado(lado){
    return lado*4;
}
function areaCuadrado(lado){
    return lado*lado;
}
console.groupEnd();


//Codigo del circulo
console.group('Circulos');
//Diametro
function diametroCirculo (radio){
    return radio *2;
}
//PI
const PI = Math.PI;
console.log('PI es: '+PI);
//circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio); //aqui estamos creando una variable en donde llamamos una funcion dentro de otra
    return diametro*PI;
} 
//area
function areaCirculo (radio){
    return (radio**2)*PI;
}
console.groupEnd();


//Codigo del rectangulo
console.group("Rectangulos");
function perimetroRectangulo(base, altura){
    return 2*base+2*altura; 
}
function areaRectangulo(base, altura){
    return base*altura; 
}
console.groupEnd();


//Codigo del triangulo
console.group('Triángulos');
function perimetroTriangulo (lado1, lado2, base){
    return lado1+lado2+base;
} 
function areaTriangulo(base, altura){
    return (base*altura)/2;
} 

function calculoTrianguloIso (lado1, lado2, base) {
    if (lado1 != lado2 || lado1 === base) {
        alert("No cumple con los parametros de un TRIÁNGULO ISOCELES");    
    } else {
        alert("!Si es un triángulo Isoceles!");
        var catetoO = Number(base)/2;
        var altura = Math.sqrt((Number(lado1)*Number(lado1)) - (Number(catetoO)*Number(catetoO)));
        return altura;

    }
}
console.groupEnd();


//Aqui interactuamos con el HTML
function calcularperimetroCuadrado() {
    const input= document.getElementById("InputCuadrado");
    const value= input.value; //asi recibimos el valor que escribe el usuario desde el html a mi javascript
    const perimetro = perimetroCuadrado(value);
    alert("El perimetro del cuadrado es: "+perimetro+" cm");

    const im = document.querySelector(".input1") //asi se manda o se añade una linea en el html con una etiqueta para que se logre ver el resultado ahi se utiliza el id del contenedor
    im.innerHTML+=("<div>"+perimetro+"</<div>")
}

function calcularareaCuadrado(){
    const input= document.getElementById("InputCuadrado");
    const value= input.value; 
    const area = areaCuadrado(value);
    alert("El area del cuadrado es de: " +area+" cm");
}

function calcularperimetroRectangulo() {
    const base= document.getElementById("InputRectangulo-base");
    const altura= document.getElementById("InputRectangulo-altura");
    const value1= base.value;
    const value2= altura.value; 
    const perimetro = perimetroRectangulo(value1 ,value2);
    alert("El perimetro del rectángulo es: "+perimetro+" cm");
}

function calcularareaRectangulo(){
    const base= document.getElementById("InputRectangulo-base");
    const altura= document.getElementById("InputRectangulo-altura");
    const value1= base.value;
    const value2= altura.value; 
    const area = areaRectangulo(value1 ,value2);
    alert("El área del rectángulo es: "+area+" cm");
}

function calcularperimetroTriangulo(){
    const lado1 = document.getElementById("InputLado1");
    const lado2 = document.getElementById("InputLado2");
    const lado3 = document.getElementById("InputBase");
    const valor1 = Number(lado1.value);
    const valor2 = Number(lado2.value);
    const valor3 = Number(lado3.value);
    const perimetro = perimetroTriangulo(valor1, valor2, valor3);
    alert("El perimetro del triangulo es de: "+perimetro+" cm");
}

function calcularareaTriangulo (){
    const lado1 = document.getElementById("InputLado1");
    const lado2 = document.getElementById("InputLado2");
    const lado3 = document.getElementById("InputBase");
    const value1 = Number(lado1.value);
    const value2 = Number(lado2.value);
    const value3 = Number(lado3.value);
    const area = areaTriangulo(value1, value3);
    alert("El area de mi triangulo es: "+area+" cm");
}

function altura (){
    const lado1 = document.getElementById("InputLado1");
    const lado2 = document.getElementById("InputLado2");
    const lado3 = document.getElementById("InputBase");
    const value1 = Number(lado1.value);
    const value2 = Number(lado2.value);
    const value3 = Number(lado3.value);
    var result = calculoTrianguloIso(value1, value2, value3);
    alert("La altura del triángulo Isoceles es de: "+ result.toFixed(2)+" cm");
}