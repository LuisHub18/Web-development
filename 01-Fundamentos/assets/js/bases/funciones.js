function saludar( nombre ){
    console.log(`Hola ${nombre}`);
}
saludar('Felipe');
// const saludar2 =function(){
//     console.log('Hola Mundo');
// }
const saludarFlecha=( nombre ) =>{
    console.log(`Hola ${nombre}`);
    return 100;
}
const retornoSaludar=saludarFlecha('Crack');
console.log(retornoSaludar);
// saludarFlecha('Filomeno');

function sumar(a, b){
    return a+b;
}
console.log(sumar(1,2));

// const sumarCrack=(a,b)=>{
//     return a+b;
// }

const sumarCrack = (a, b) => a + b;

function getAleatorio(){
    return Math.random();
}
//Funcion de flechas que no tiene llaves{}
const getAleatorio2=()=> Math.random();
console.log(getAleatorio2());