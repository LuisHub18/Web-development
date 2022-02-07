const  crearPersona=( nombre, apellido)=> ({ nombre, apellido} );

const persona=crearPersona('Eduardo','Tellez')
console.log(persona);

function imprimeArgumento(){
    console.log(arguments);
}

const imprimeArgumento2=( edad, ...args )=>{
    // console.log({edad, args});
    return args;
}
const [edad, vivo] = imprimeArgumento2(10, true);
console.log({edad, vivo});

const {apellido: nuevoApellido} = crearPersona( 'Eduardo', 'Tellez' );
console.log({ nuevoApellido });

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes:['Mark I', 'Mark V', 'Hulkbuster'],
};
// const imprimePropiedades=( personaje )=>{
//     console.log('nombre',personaje.nombre);
//     console.log('codeName', personaje.codeName);
//     console.log('vivo',personaje.vivo);
//     console.log('edad', personaje.edad);
//     console.log('trajes', personaje.trajes);
// }
const imprimePropiedades=({nombre, codeName, vivo, edad=0, trajes})=>{
    
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
    
}
imprimePropiedades(tony);