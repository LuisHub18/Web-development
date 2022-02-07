



const regresaTrue=()=>{
    console.log('Regresa true');
    return true;
}
const regresaFalse=()=>{
    console.log('Regresa false');
    return false;
}
console.warn('Not o la negacion');
console.log(true);
console.log(!true);
console.log(!false);

console.log(!regresaFalse());

console.warn('And');//True si todos los valores son verdaderos
console.log(true && true);//true
console.log(true && false);//false

console.log('==========');
console.log(regresaFalse() && regresaTrue());
console.log(regresaTrue() && regresaFalse());

console.log('==========');
regresaTrue() && regresaFalse();
console.warn('Or');
console.log(true || false);
console.log(false || false);

console.log(regresaTrue() || regresaFalse());

console.warn('Asignaciones');
const soyUndifined=undefined;
const soyNull= null;
const soyFalso= false;
const al= true && 'Hola Mundo' && 150;
const a2= 'Hola' && 'Mundo'&& soyFalso && true;
const a3=soyFalso || 'Ya no soy falso';
console.log({ al,a2,a3 });
