/*
Resolvendo o Problema 1 
*/


let vetor = [8, 5, 10, 5, 2, 4, 4, 3]

function Ordenador(array){

    //Ordena a lista 
    array.sort(function(a,b){return a-b})

    //Cria uma lista com valores únicos, ou seja, remove valores repetidos
    resultado = [...new Set(array)]

    return resultado
}

console.log(Ordenador(vetor))


/*
Testes:

let vetor1 = [9, 3, 7, 1, 14, 7, 37, 87, 23, 42, 1, 5, 7, 4]
let vetor2 = [34, 27, 45, 89, 423, 34, 56, 3, 4, 6, 33, 45]
let vetor3 = [5, 5, 5, 32, 23, 45, 78, 4, 2, 465, 32, 35]
let vetor4 = [10,9,8,7,6,5,4,3,2,1]
let vetor5 = [10,8,6,4,2,1,3,5,7,9]


console.log(Ordenador(vetor1),Ordenador(vetor2),Ordenador(vetor3),Ordenador(vetor4),Ordenador(vetor5))

Resultado:

[
    1,  3,  4,  5,  7,
    9, 14, 23, 37, 42,
   87
 ] [
    3,  4,  6, 27,  33,
   34, 45, 56, 89, 423
 ] [
    2,  4,  5,  23, 32,
   35, 45, 78, 465
 ] [
   1, 2, 3, 4,  5,
   6, 7, 8, 9, 10
 ] [
   1, 2, 3, 4,  5,
   6, 7, 8, 9, 10
 ]

*/


