import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariablesGlobalesInterfaz{
  public regiones: Array <any> = [{
    value:'Huancayo', nombre:'Huancayo'
  }]

  constructor() { }


  public generarCodigo() {

    let codigoADevolver:string = "";
    
    let fechaActual = new Date();

    let anho = fechaActual.getFullYear();
    let mes = ((fechaActual.getMonth()+1) < 10)? `0${(fechaActual.getMonth()+1)}`:(fechaActual.getMonth()+1);
    let dia = (fechaActual.getDate() < 10)? `0${fechaActual.getDate()}`:fechaActual.getDate();
    let hora = (fechaActual.getHours() < 10)? `0${fechaActual.getHours()}`:fechaActual.getHours();
    let minutos = (fechaActual.getMinutes() < 10)? `0${fechaActual.getMinutes()}`:fechaActual.getMinutes();
    let segundos = (fechaActual.getSeconds() < 10)? `0${fechaActual.getSeconds()}`:fechaActual.getSeconds();
    
    let milisegundos = fechaActual.getMilliseconds();

    if (milisegundos < 10) {      
      var milisegundosConFormato = ("00" + milisegundos);
    }
    else if (milisegundos >= 10 && milisegundos <= 99) {
      var milisegundosConFormato = ("0" + milisegundos);  
    }
    else{
      var milisegundosConFormato = milisegundos.toString();
    }

    codigoADevolver = `${anho}${mes}${dia}${hora}${minutos}${segundos}${milisegundosConFormato}`;
    return codigoADevolver;

  }

}
