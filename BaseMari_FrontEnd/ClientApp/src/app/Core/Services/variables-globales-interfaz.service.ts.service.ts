import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariablesGlobalesInterfaz{
  public regiones: any = [
    {valor: 'Amazonas', nombre: 'Amazonas'},
    {valor: 'Ancash', nombre: 'Ancash'},
    {valor: 'Apurimac', nombre: 'Apurimac'},
    {valor: 'Arequipa', nombre: 'Arequipa'},
    {valor: 'Ayacucho', nombre: 'Ayacucho'},
    {valor: 'Cajamarca', nombre: 'Cajamarca'},
    {valor: 'Cusco', nombre: 'Cusco'},
    {valor: 'Huancavelica', nombre: 'Huancavelica'},
    {valor: 'Huanuco', nombre: 'Huanuco'},
    {valor: 'Ica', nombre: 'Ica'},
    {valor: 'Junin', nombre: 'Junin'},
    {valor: 'La Libertad', nombre: 'La Libertad'},
    {valor: 'Lambayeque', nombre: 'Lambayeque'},
    {valor: 'Lima', nombre: 'Lima'},
    {valor: 'Loreto', nombre: 'Loreto'},
    {valor: 'Madre de Dios', nombre: 'Madre de Dios'},
    {valor: 'Moquegua', nombre: 'Moquegua'},
    {valor: 'Pasco', nombre: 'Pasco'},
    {valor: 'Piura', nombre: 'Piura'},
    {valor: 'Puno', nombre: 'Puno'},
    {valor: 'San Martin', nombre: 'San Martin'},
    {valor: 'Tacna', nombre: 'Tacna'},
    {valor: 'Tumbes', nombre: 'Tumbes'},
    {valor: 'Ucayali', nombre: 'Ucayali'}
  ]

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
