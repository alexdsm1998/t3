var palabras=["hola","buenas","como","estas","hoy"];
var aleat=Math.floor(Math.random()*palabras.length);
var adivinar=palabras[aleat];
var intentos=0;
var array=[];
var n = adivinar.length;

for (var i = 0; i < n; i++) {
  array[i]='0'*i;
}
console.log(palabras);
console.log(array);
while(intentos<5)
var letrausu= prompt('Introduzca una letra');

for (var i = 0; i < adivinar.length; i++) {
if(letrausu== adivinar.charAt(i)){
  array[i]=adivinar.charAt(i);
  alert('letra encontrada')
}else {
  alert('prueba otra vez')
  intentos++
}
}
console.log('Numero de intenros: ',intentos)
