alert('El primer código en JavaScript');
const volumen= 16*23*13;
console.log ('volumen', volumen);


function parimpar(numero){
    let resto= numero%2
    if (resto == 0){
        return 'Par'
    }else{
        return 'Impar'
    }
}