'use strict';

// EJERCICIO 1
function nFactorial(n) {
   // caso base
   if(n === 0 || n === 1) return 1
   // descontamos negativos
   else if(n < 0) return 0
   // aplicar la recurcion 
   return n * nFactorial(n-1)
}

// EJERCICIO 2
function nFibonacci(n) {
   // caso base
   if(n <= 0) return 0
   else if(n === 1) return 1
   return nFibonacci(n-1) + nFibonacci(n-2)
}

// EJERCICIO 3
function Queue() {
   this.array = []
}

Queue.prototype.enqueue = function(value){
   return this.array.push(value);
};

Queue.prototype.dequeue = function (){
   return this.array.shift()
}

Queue.prototype.size =function (){
   return this.array.length
}

var nuevaQueue = new Queue()
console.log(nuevaQueue)


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
