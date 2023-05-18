/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function doble(array) {
  // la funcion recibe un array de numeros enteros y debe devolver otro arreglo con el doble de cada valor
  // ej:
  //doble([1, 2, 3]) devuelve [2, 4, 6]
  // Tu código aca:
  let multiplicadosXDos = array.map((num) => num * 2);

  return multiplicadosXDos;
}

// No modifiques nada debajo de esta linea //

module.exports = doble;

const square = function (number) {
  return number * number;
};
var x = square(4);

class player {
  constructor /*crador de constructor(parabra reservada constructor)*/(
    nombre,
    colorSombrero
  ) /*dentro de los parentesis colocamos los parametros que se convertiran en cada uno de los valores de los atributos que va tener el objeto*/ {
    this._nombre = nombre;
    this._colorSombrero = colorSombrero;
  } /*creamos la propiedade so atrubutos que va a tener el objeto*/
  saltar() {}
  correr() {}
  saludar() {
    return `Hola soy ${this._nombre} y mi sombrero es ${this._colorSombrero}`;
  }
  /* metodos get y set para poder tener accceso a leer o modiifcar un atributo del objeto*/

  /* get mostrar el valor del atributo */

  /*sintaxis*/ get nombre() {
    return this._nombre;
  }
  /* set modificar el valor del atributo */

  /*sintaxis*/ set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }
}
/*creacion objetos*/

let player1 = new player("MARIO", "ROJO");

let player2 = new player("LUIGI", "VERDE");

//COMO UTILIZARLOS

//GET
console.log(player1.nombre);

//SET
player1.nombre = "ALBERTO";
console.log(player1.nombre);
