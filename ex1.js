console.log("Inicio -> " + new Date());

setTimeout(function (){
    console.log("Primeiro timeout -> " + new Date());
}, 3000);


setTimeout(function (){
    console.log("Segundo timeout -> " + new Date());
}, 1000);

console.log("Fim do codigo ->" + new Date());
