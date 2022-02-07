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
const spiderman=new Persona('Peter Parker','Spiderman','Soy tu amigable vecino hombre araña');
const ironman  =new Persona('Tony Stark','IronMan','Yo soy ironman')
// spiderman.quienSoy();
// ironman.quienSoy();
spiderman.setComidaFavorita='El pay de cereza de la tia May';
// console.log(spiderman);