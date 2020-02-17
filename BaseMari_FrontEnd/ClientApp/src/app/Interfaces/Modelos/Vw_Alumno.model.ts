import { Escuela } from './escuela.model';

export class Vw_Alumno {
    codigoAlumno: string;
    nombreAlumno: string;
    edadAlumno: number;
    direccionAlumno: string;
    sexoAlumno: string;
    codigoEscuelaAlumno: string;
    nombreEscuela: string;
    numeroEscuela: string;
    regionEscuela: string;

    escuela?: Escuela; // Para el listar_Map
}