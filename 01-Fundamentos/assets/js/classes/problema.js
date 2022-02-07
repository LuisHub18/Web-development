const edu={
    nombre:'Eduardo',
    edad:19,
} 
function Persona(nombre, edad){

    console.log('Se ejecuto la linea');
    this.nombre=nombre;
    this.edad=edad;
    this.imprimir=()=>{
        console.log(`Nombre: ${this.nombre}- edad: ${this.edad}`);
    }
}
const maria=new Persona('Maria', 18);
const melissa=new Persona('Melissa', 38);

// console.log(maria);
maria.imprimir();
melissa.imprimir();