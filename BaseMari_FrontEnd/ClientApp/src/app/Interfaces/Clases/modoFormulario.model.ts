export class ModoFormulario{
    // tslint:disable-next-line: no-unused-expression
    crear: boolean;
    modificar: boolean;
    eliminar: boolean;

    // HACER QUE EL CONSTRUCTOR TENGA COMO PARAMETRO UN ESTADO TIPO STRING PARA ESTABLECER SEL MODO
    constructor(){
        this.crear = false;
        this.modificar = false;
        this.eliminar = false;
    }

    public modoCrear(){
        this.crear = true;
        this.modificar = false;
        this.eliminar = false;
    }

    public modoEditar(){
        this.crear = false;
        this.modificar = true;
        this.eliminar = false;
    }

    public modoEliminar(){
        this.crear = false;
        this.modificar = false;
        this.eliminar = true;
    }
}