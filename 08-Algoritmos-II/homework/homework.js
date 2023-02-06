'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // Caso base
  if (array.length <= 1) return array

  // Definir un pivote 
  // definir una izq y una der

  let pivot = array[0]
  let left = []
  let right = [] 
  let equal = []

  // recorrer el array
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element < pivot) left.push(element)
    else if(element > pivot) right.push(element)
    else equal.push(element)
  }
return quickSort(left).concat(equal).concat (quickSort(right))
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
  // caso base
  if(array.length === 1) return array

// la particion
// Math || floor --> piso P.E 3.8 --> 3
// Math.ceil --> techo --> 3.3 --> 4
let middle = Math.floor(array.length/2) // [1,2,3,4,5,6,7] --> [1,2,3]  [4,5,6,7]
// middle = 3 --> indice
let left = array.slice(0,middle)
let right = array.slice(middle)
return merge(mergeSort(left),mergeSort(right))
}

function merge (left, right) {
  let leftIndex = 0
  let rightIndex = 0
  let array = []

  while (leftIndex < left.length && rightIndex < right.length) {
    let pointerLeft = left[leftIndex]
    let pointerRight = right[rightIndex]
    if(pointerLeft < pointerRight){
      array.push(pointerLeft);
      leftIndex++
    }else{
      array.push(pointerRight);
      rightIndex++;
    }
  }
  return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
