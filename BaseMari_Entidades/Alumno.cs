using System;
using System.Collections.Generic;
using System.Text;

namespace BaseMari_Entidades
{
    public class Alumno
    {
        public string idalumno { get; set; }
        public string nombre { get; set; }
        public int? edad { get; set; }
        public string direccion { get; set; }
        public string sexo { get; set; }
        public Escuela escuela { get; set; }

        public Alumno()
        {
            this.idalumno = "";
            this.nombre = "";
            this.edad = null;
            this.direccion = "";
            this.sexo = "";
            this.escuela = new Escuela();
        }
    }
}
