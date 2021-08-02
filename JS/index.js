// console.log('Hola Mundo')

// Tipos de datos en JS
// String: Cadena de caracteres.
// Boolean: True or false.
// Null: Nulo.
// Number: 123123 1 12 123.
// "123" es un String, distinto a 123 que es un number.
// Undefined.
// Object: Objeto que agrupa los distintos datos.

// Definicion de variables
// var
// let
// const

// let miPrimeraVariable = "Mi primera variable"
// console.log(miPrimeraVariable);

// let miBoolean = true
// let miOtroBool = false

// let miNumero = 0
// let miNumero2 = 12
// let miNumero3 = -250

// console.log(miNumero, miNumero2, miBoolean, miPrimeraVariable);

// const arrVacio = []
// const arr = [1,2,"Hola", miNumero]

// console.log(arrVacio,arr);

// arr.push(10)
// console.log(arr);

// arr.push(miPrimeraVariable)
// console.log(arr);

// const suma = 1 + 2
// const resta = 1 - 2
// const multiplicar = 2 * 3
//  const division = 9 / 3
// console.log(suma,resta,multiplicar,division);

// const modulo = 10 % 3
// console.log(modulo);

// let num = 5
// num --
// console.log(num);

// const resultado1  = 5

// console.log(resultado1);

// const edad = 5

// if (edad > 5 && edad < 15) {
    // console.log('Puedes entrar a jugar');
// } else {
    // console.log('No puedes jugar');
// }

// function iterar (arg1) {
    // for (let i = 0; i < arg1.length; i++) {
        // console.log(arg1[i]);
    // }    
// }

// const numeros = [1,2,3,4,5]
// const nombres = ['Pedro', 'Juan', 'Alberto', 'Alex', 'Buddy']

// iterar(numeros)
// iterar(nombres[3])

// function suma (a,b) {
    // return a + b;
// }

// const resultadoSuma1 = suma(1,2)
// const resultadoSuma2 = suma(5,6)
// const resultadoSuma3 = suma(resultadoSuma1,resultadoSuma2)

// console.log('resultado', resultadoSuma3);

// function sumar(a,b,cb) {
    // const r = a + b
    // cb(r)
// }

// function callback (result) {
    // console.log('resultado', result);
// }

// callback(6)
// sumar(2, 3, callback)

const miFatArrowFunction = (a,b) => a + b
const otraFAF = (a, b) => {
    return a + b
}
const r = otraFAF(1,2)
console.log(r);