import { Escuela } from './escuela.model';

export class Alumno {
    idalumno: string;
    nombre: string;
    edad: number;
    direccion: string;
    sexo: string;
    escuela: Escuela;
}