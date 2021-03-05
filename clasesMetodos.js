
var num1;
var num2;
var operacion;

class Operacion{
    constructor(numero1, numero2, operacion){
        this.numero1 = parseInt(numero1);
        this.numero2 = parseInt(numero2);
        this.operacion = operacion;
    }
        
    Suma() {
        let r = this.numero1 + this.numero2;
        return `La Suma es ${r}`; 
    }   
    Resta() {
        let r = this.numero1 - this.numero2;
        return `La resta es ${r}`;
    }
    Multiplicacion() {
        let r = this.numero1 * this.numero2;
        return `La multiplicacion es ${r} `;
    }
    Division() {
        let r = parseFloat(this.numero1) / parseFloat(this.numero2);
        return `La division es ${r} `;
     }

    // En esta funcion mostramos los resultados e incluimos la logica 
    Mostrar(){
        switch (this.operacion) {
            case '1':
                // PARA LOGRAR ATRAPAR EL METODO DESDE LA MISMA CLASE ES NECESARIA LA PALABRA RESERVADA THIS.
                // Tambien para utilziar las variables del constructor, utlizamos la plabra .this
                alert(this.Suma());
                break;
            case '2':
                alert(this.Resta());   
                break;
            case '3':
                alert(this.Multiplicacion());
                break;
            case '4':
                if (this.numero2 != 0) {
                    alert(this.Division());   
                }
                else{
                    alert('No se puede dividir por 0');
                }
                break;    
            default: alert('Opcion incorrecta');
                break;
        }
    }
 }   
 // Funcion para solicitar datos al usuario
 function solicitar(){
    num1 = prompt("Primer numero");
    num2 = prompt("Segundo numero");
    operacion = prompt("Operacion  \n1.Suma \n2.Resta \n3.Multiplicacion \n4.Division");

 } 
    // Llamamos la funcion solicitar
    solicitar();
    // Creamos un  objeto de de la calse Operacion
    const ejecutar = new Operacion(num1, num2, operacion);
    ejecutar.Mostrar(); 

/*
    // Solicitamos nuevamente los datos al usuario para el segundo objeto
    solicitar();
    // Creamos un nuevo objeto de de la calse Operacion
    const porFin = new Operacion(num1, num2, operacion);
    porFin.Mostrar();      */

