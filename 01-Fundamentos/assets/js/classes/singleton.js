class PersonaService{
    static instancia;//undefined
    nombre='';
    constructor(nombre=''){

        if(!!PersonaService.instancia){
            return PersonaService.instancia;
        }
        PersonaService.instancia=this;
        this.nombre= nombre;
        
    }
}
const instancia1= new PersonaService('Ironman');
const instancia2=  new PersonaService('Spiderman');
const instancia3=  new PersonaService('BlackPanther');

console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia1 es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia1 es: ${instancia3.nombre}`);