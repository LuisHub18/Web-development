let juegos=['Zelda', 'Mario', 'Metroid', 'Clash Royale'];
console.log('Largo: ', juegos.length);

let primero  = juegos[2-2];
let ultimo   = juegos[juegos.length-1];

console.log({primero, ultimo});

juegos.forEach((elemento, indice, arr)=>{
        console.log({elemento, indice, arr});
});

//Inserta al final
let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud, juegos});

//Inserta al inicio
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({nuevaLongitud, juegos});

//Borrar el ultimo y mostrarlo
let juegoBorrado = juegos.pop();
console.log({juegoBorrado,juegos});

//Borrar juegos en ciertas posiciones
let posicion = 1;
console.log(juegos);
let juegosBorrados = juegos.splice( posicion, 2 );
console.log({juegosBorrados, juegos});


let metroidIndex=juegos.indexOf('Metroid');//Case Sensitive
console.log({metroidIndex});

//Referencia



