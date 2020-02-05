import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnviromentUrlService } from './enviroment-url.service';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService { // Este RepositoryService será usado en el componente principal - en 'principal.ts'

  constructor(private http: HttpClient, // aqui le asigno la clase HttpClient a la variable http
              private envUrl: EnviromentUrlService ) { } // aqui le asigno la clase EnviromentUrlService a la variable envUrl (La clase EnviromentUrlService esta siendo definida en el ts de enviroment)

  public getData(route: string) {
  return this.http.get(this.createCompleteRoute(route, this.envUrl.urlAddress)); // con '.get' estoy accediendo al metodo get, el cual me pide parametros
  }

  public create(route: string, body) {
  return this.http.post(this.createCompleteRoute(route, this.envUrl.urlAddress), body, this.generateHeaders());
  }

  public update(route: string, body){
  return this.http.put(this.createCompleteRoute(route, this.envUrl.urlAddress), body, this.generateHeaders());
  }

  public delete(route: string){
  return this.http.delete(this.createCompleteRoute(route, this.envUrl.urlAddress));
  }

  private createCompleteRoute(route: string, envAddress: string) {
  return `${envAddress}/${route}`;
  }

  private generateHeaders() {
  return {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  }
}
