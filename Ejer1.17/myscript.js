
class Factura {
    constructor(cliente, elementos){
        this.cliente =cliente;
        this.elementos= elementos;
        this.information={
            baseimponible: 0,
            iva: 21,
            total : 0,
            formaPago: "efectivo"
        }

        this.calculototal=function(){
            for(var i=0;i<this.elementos.length;i++){
                this.information.baseimponible += this.elementos[i].cantidad * this.elementos[i].precio;
            }
            this.information.total=this.information.baseimponible*(1+(this.information.iva/100));

        }
        this.mostartotal= function(){
            this.calculototal();
            alert("El total de los productos es  " + this.information.total);
        }
    }

}

class Cliente{
    constructor(nombre , direccion , telefono, nif){
        this.nombre= nombre;
        this.direccion=direccion;
        this.telefono= telefono;
        this.nif=nif;
    }
}

class Elemento {
    constructor(descripcion,cantidad,precio){
        this.descripcion=descripcion;
        this.cantidad=cantidad;
        this.precio=precio;
    }
}


const primercliente = new Cliente ("Maria", "Segovia","678108618","1234567A");
const arrayElementos = [new Elemento ("Paella",1,5), new Elemento ("coca cola", 2, 5)];
const FacturaTotal = new Factura (primercliente, arrayElementos);
FacturaTotal.mostartotal();


