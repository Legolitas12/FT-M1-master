# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
//EJERCICIO 01//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
x = 1;// x aun no esta deficina
var a = 5;// Variable ya definida en 5
var b = 10; //Variable definida en 10
   //=====================================
var c = function (a, b, c) { // Sabemos aca que esta linea sera interpretada de la funcion c de abajo como a=8, b=9, c=10.
   var x = 10;// esta se definira 10
   console.log(x); //10
   console.log(a);// esta se definira con el valor a de la variable de abajo c que es 8
   //------------------------------------
   var f = function (a, b, c) {// aca pasaria lo mismo seria igual a a=8, b=9, c=10.
      b = a; // en este caso la cosa cambia ya que b = a significa que b tomara el resultado de a = 8 === (b=8)
      console.log(b);//8
      b = c; // en este pasa igual pasamos el b = c sigifica que b tomara el resultado de c = 10 === (c=10)
      var x = 5;//Tenemos arriba una var x = 10 pero en este caso es linea distinta asi que esta es x = 5
   };
   //------------------------------------
   f(a, b, c);// que pasa aca sabemos que a, b, c, tienen un valor definido ya cual sera ese valor abajo ?
   console.log(b);// b= ?  aca teemos que tener en cuenta que arriba se modifico la b pero aca la que que resultado tiene ?
   // b = 9
};
   //=====================================
c(8, 9, 10);// ya sabemos como funciono esto en todo nuestro codigo ahora abajo veremos como se soluciono nuestro problema
console.log(b); // este sera un igual a ?        b=10
console.log(x); // en este poner atencion!!!      x= 1/10/5    es     x = 1
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
```

```javascript
//EJERCICIO 02//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
console.log(bar); //undfined
console.log(baz); // is not defined
foo(); // no deja ejecutar si baz se ejecuta
// =====================================
function foo() { //la funcon de arriba 
   console.log('Hola!'); // aca se ejecutara Hola!
}
// =====================================
var bar = 1;
baz = 2;
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
```

```javascript
//EJERCICIO 03//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
var instructor = 'Tony'; //define la variable como Tony
// =====================================
if (true) { //en este bloque de comando tony cambia ya que abajo inicializamos otra variable 
   var instructor = 'Franco';//esta variable como esta en el comando de if (true) y tiene un boleano todo lo que se valla a interpretar en ese codigo se implemtenta en el console.log 
}
// =====================================
console.log(instructor); // Aca la respuesta es "Franco" ya que se cambio en el if(true)
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
```

```javascript
//EJERCICIO 04//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
var instructor = 'Tony';//Inicializamos el var 
console.log(instructor);// Nos muestra el var instructor primario = "Tony"
// =====================================
(function () { //Aca creamos una funcion anonima donde todo lo que este en estas funciuon solo sera interpretada en ella 
   if (true) {
      var instructor = 'Franco'; // La inicializamos en esta funcion un var instructor Franco
      console.log(instructor); // se inicializa el comando = "Franco"
   }
})(); // aca se termina el codigo
// =====================================
console.log(instructor); //aca coge el contexto global donde el resultado es "Tony"
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
```

```javascript
//EJERCICIO 05//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
var instructor = 'Tony'; // Aca inicializamos la var 
// =====================================
let pm = 'Franco'; //pero aqui le decimos que esta funcion let no se cambiara pero lo que hay abajo de if (true) solo cambiara la var no la let
if (true) {
   var instructor = 'The Flash'; //Aca el var de instructor Tony cambia por var instructor 'The Flash' ya que esta en esta linea de codigo
   let pm = 'Reverse Flash';//Aca este let esta inicializado en la linea queda 
   console.log(instructor); //instuctor cambia a 'The Flash'
   console.log(pm);// pm se quedo con el 'Reverse Flash' en este Scope
}
// =====================================
console.log(instructor);//en el contexto global este var instructor sera 'The Flash'
console.log(pm); //Pero este si cambia ya que el let de pm no se va a modificar queda igual al contexto globlal de let pm = "Franco"
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
//EJERCICIO 06//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
6 / "3"//2                           //COHERCION DE DATOS 
"2" * "3"//6
4 + 5 + "px" + 7//9px7 
"$" + 4 + 5//"$45"         //CONCATETA LA PALABRA
"4" - 2//-2                
"4px" - 2//  NaN    
7 / 0 //Infinity
{}[0] //0
parseInt("09") //9
5 && 2 // 2 (5 es equivalente a true)       //true
2 && 5 // 5 (2 es equivalente a true)       //true
5 || 0 //5
0 || 5 //5
[3]+[3]-[10] // 23  arreglo se convierte en string y al restar 10 lo lleva a 23
3>2>1 //false  3>2 da true, pero true es 1 y por eso devuelve false
[0] == ![] //arreglo vacio es un 0 y la negacion del arreglo es false (que se numeriza como 0)     //true
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
//EJERCICIO 07//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
```

Y el de este código? :

```javascript
//EJERCICIO 08//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false);
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
//EJERCICIO 09//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
//EJERCICIO 10//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing();
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
```
