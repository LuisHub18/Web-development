class Persona{
    static _conteo=0;

    nombre='';
    codigo='';
    frase='';
    comida='';
    constructor(nombre='Sin nombre', codigo='Sin codigo', frase='Sin frase'){
        conteo++;
        this.nombre=nombre;
        this.codigo= codigo;
        this.frase= frase;

    }
    set setComidaFavorita(comida){
        this.comida=comida.toUpperCase();
    }
    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }
    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }
    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

class Heroe extends Persona{
    clan='Sin clan';
    constructor(nombre, codigo, frase,clan){
        super(nombre, codigo, frase);
        this.clan=clan;
    }
}
const spiderman=new Heroe('Peter Parker','Spiderman','Soy tu amigable vecino hombre araña');
const spiderman= new Heroe();
console.log( spiderman );