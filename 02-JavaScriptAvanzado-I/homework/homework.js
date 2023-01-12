//EJERCICIO 01//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
x = 1;
var a = 5;
var b = 10;
   //=====================================
var c = function (a, b, c) { //a=8, b=9 c=10
var x = 10;
    console.log(x); //10
    console.log(a); //8
   //------------------------------------
var f = function (a, b, c) {//a=8, b=9 c=10
    b = a;
    console.log(b);//8
    b = c;
    var x = 5;
};
   //------------------------------------
f(a, b, c);
    console.log(b);//9
};
   //=====================================
c(8, 9, 10);
console.log(b);//10
console.log(x);//1
//-_-_-_-_-_-_-_-_-__-_-_-_-_-_-_-_-_-_-_-_//





//EJERCICIO 02//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
console.log(bar); //undefined
console.log(baz); //bazz is not defined
foo();//

function foo() {//
    console.log('Hola!'); // No aparece nada!!!     "Hola!"
}

var bar = 1;//BUENA PRACTICA 
baz = 2;//MALA PRACTIVA
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//




//EJERCICIO 03//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//
var instructor = 'Tony'; 
if (true) {
    var instructor = 'Franco';
}
console.log(instructor); //Franco
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_//






// ===============================
var instructor = 'Tony';
console.log(instructor);//Tony
// ------------------------------
(function () {
    if (true) {
        var instructor = 'Franco';
        console.log(instructor);//Franco
    }
})();
// ------------------------------
console.log(instructor);//Tony
// ==================================






// ==================================
var instructor = 'Tony'; //Se inicia con tony
// 
let pm = 'Franco'; 
if (true) {
    var instructor = 'The Flash';
    let pm = 'Reverse Flash';
    console.log(instructor);
    console.log(pm); // reverse flash ya que esta en el contexto
}
// 
console.log(instructor);
console.log(pm);
// ==================================









// ==================================
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
// ==================================




// ==================================
function test() {
    console.log(a);//undefined ya que a esta definida en la linea de mas abajo 
    console.log(foo()); //2 resulta de ejecutar la funcion foo

    var a = 1;
    function foo() {
        return 2;
    }
}

test();
// ==================================










// ==================================
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;    //"Meow mix" pues no se entra al if ya que la funcion 
}
                    //getFood recibe un false
getFood(false);
// ==================================








// ==================================
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
// ==================================






// ==================================
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
// ==================================