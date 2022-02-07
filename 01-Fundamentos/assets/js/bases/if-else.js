let a=10;

if(a>=10){
    console.log('A es mayor o igual a 10');
}else{
    console.log('A es menor a 10');
}
// console.log('Fin del programa');

const hoy = new Date();
let   dia = hoy.getDay();

console.log({ dia });

if(dia==4){
    console.log('Jueves');
}else if(dia==2){
    console.log('No es jueves');
}

//Sin usar if else o switch, unicamente objetos
//dia de la semana
const diasLetras={
   0: 'domingo',  
   1: 'lunes',  
   2: 'martes',  
   3: 'miercoles',  
   4: 'jueves',  
   5: 'viernes',
   6: 'sabado,'
}
const dias=['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
console.log(dias[dia]);