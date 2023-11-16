/*
    Completar el código de la función para que
    devuelva la frase recibida sin vocales.
*/

let sentence = 'Hola soy Edu Feliz Navidad';

function noVowels(str){
        //introdce aquí tu código
        let sentenceNoVowels = sentence.replaceAll('a','')
         sentenceNoVowels = sentenceNoVowels.replaceAll('e','')
         sentenceNoVowels = sentenceNoVowels.replaceAll('i','')
         sentenceNoVowels = sentenceNoVowels.replaceAll('o','')
         sentenceNoVowels = sentenceNoVowels.replaceAll('u','')

    return sentenceNoVowels;
}

console.log(noVowels(sentence));


/*
   Completar la función para que, recibida una palabra,
   devuelva el caracter que está en el medio. Si la palabra
   es par, devuelve los dos caracteres.

   Ejemplo: camión => mi

*/

let word = "camión";

function middleCharacter(str){

   let iniChr = parseInt(word.length /2);
   let numChr = iniChr + 1;
   
   if(word.length %2==0){ 
      iniChr = parseInt((word.length /2)-1);
      numChr = iniChr + 2;
   }

   return word.slice(iniChr,numChr);
}

console.log(middleCharacter(word));


/*
    Completar el código de la función para que 
    devuelva la frase recibida sin el primer y último parámetro.

*/

let sentence2 = 'Hola Don Pepito, hola Don José';

function deleteFirsLast(str){
    //introduce aquí tu código
    let message = sentence2.split(" ");
    message.pop();
    message.shift();
    return message[0] + " " + message[1] + " " + message[2] + " " + message[3];
}

console.log(deleteFirsLast(sentence2));


/*
    Completar el código de la función para que 
    devuelva la suma de los elementos del array.
*/

let numberList = [1,2,-1,3,5,7];

function sumList(list){
    //introduce aquí tu código
    let total = numberList.reduce((a,b) => a + b, 0);
    return total;
}

console.log(sumList(numberList));


/*
    Completar el código de la función para que 
    devuelva el ganador del balón de oro, siendo 
    el que más puntuación tenga.
    Nota: Os toca investigar como ordenar valores númericos ;) 
*/

let playerList = [
    {name:'Cristiano', score:300},
    {name:'Messi', score:250},
    {name:'Benzema', score:500}
];

function winner(list){
  //introduce aquí tu código
  let x = playerList.sort((a,b) => {
    return b.score - a.score;
  });
  return x;
}

console.log(winner(playerList));


/*
¡Se nos han mezclado los rebaños!
Tenemos 2 rebaños de ovejas(o) y vacas(v) mezclados y necesitamos ayuda.
Completar el código de la función para que, dado dos rebaños mezclados,
devuelva un objeto con el número de ovejas y número de vacas totales.

Ejemplo: 
    Rebaño 1 -> ["o","v","v","v","o","o","o","o","o","o","v","v","v","o"]
    Rebaño 2 -> ["o","o","o","v","o","v","o","o","v","o","v","o"]
    Resultado -> {nOvejas: 16, nVacas: 10}
*/

let rebano1 = ["o","v","v","v","o","o","o","o","o","o","v","v","v","o"];
let rebano2 = ["o","o","o","v","o","v","o","o","v","o","v","o"];

function counter(list1, list2){
    // introduce aquí tu código
    let numOvejas = rebano1.filter((wip) => wip ==="o").length;
    numOvejas = numOvejas + rebano2.filter((wip) => wip ==="o").length;

    let numVacas = rebano1.filter((wip) => wip ==="v").length;
    numVacas = numVacas + rebano2.filter((wip) => wip ==="v").length;

    let rebano = new Object();
    rebano.totalOvejas = numOvejas;
    rebano.totalVacas = numVacas;

    return rebano;
}

console.log(counter(rebano1,rebano2));