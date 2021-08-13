// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
 
  //let claves = Object.keys(objeto);
 // let valores = Object.values(objeto);
 // var acum = [];
 // var acu = [acum];
 // var a = null;
  //for (var i = 0; i < claves.length; i++){
  //  for (var j = 0; j < valores.length; j++){
     //a= acum.push(i, j);
    //  acum = acum + a;
     // return acu;
     var a =[];
     var f = [];
     for ( i = 0; i < objeto.length; i++)
    {
       a = a + [i];
    }
    return a;

    

  
}
//npm test JSX.test.js


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  function atr (str)
  {
    for ( var i = 0; i < str.length; i++){
      var p = 0;
      str.charAt(i);
      p = p + i;
    }
  }

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí 
 function nene (s){

  for ( var i = 0; i < s.length; i++)
  var L = "";
   if (s.charAt(i) === s.toUpperCase(i)){
  L = L + s.substring(i);
return L;}
 /* M = M + s.slice(i);*/
  var v = s.unshift(L);
  return v;
   
}
  
  
     /*    function alFrent(s){
       for ( var i = 0; i < s.length; i++){
word = "";
      var L = L + s.chart(i)
      if (isUpperCase(L))
      word = word + L;
      return word;
       }
      return s.unshift(word);*/
     
   
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  function toEnd (str){
    for ( var i = 0; i < str.length; i++) 
   str[i].reverse();
    
    return str;
  }
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  function capi (numero){
for ( var i = 0; i < numero.length; i++)
 var re = numero.toString();
 
 if ( numero.toString(numero) === re.reverse(numero) )
 {return "Es capicua";}
 else {return "No es capicua";}

  }
  
  
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

    function del (cadena){
   for (var i = 0; i < cadena.length; i ++){
   
   if (cadena[i] === "a" || cadena[i] === "b" || cadena[i] === "c")
   return delete cadena[i];
   }
   if (cadena[i] === "a" || cadena[i] === "b" || cadena[i] === "c")
return cadena;
else
return cadena;
    }

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
 
 arr.sort( function ( a, b) {
   if (a.length > b.length) return 1;
   if (a.length < b.length) return -1;
 return  0});
return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
 function inter  (arreglo1, arreglo2) { 
   for ( var p = 0; p < arreglo1.length; p++)

  if ( arreglo1.length(p) === arreglo2.length(p)){
    var W = [];
    var empty = [];
    W.push(p);}
    return W;
 
    
  return empty;
 }
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

