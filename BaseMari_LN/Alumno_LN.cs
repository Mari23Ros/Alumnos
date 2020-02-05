using BaseMari_Entidades;
using BaseMari_LAD;
using IITCoreV3;
using IITCoreV3.ADOIntelIT.MySQL_AB;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace BaseMari_LN
{
    public class Alumno_LN
    {
        public static EstadoDeEjecucion GuardarCambios(Alumno alumno)
        {
            List<MySqlCommand> listarComando = new List<MySqlCommand>();
            listarComando.Add(Alumno_LAD.MySqlCommand_GuardarCambios(alumno, VariablesGlobales_LN.Conseguir_mySqlConnectionPrincipal()));

            EstadoDeEjecucion estadoDeEjecucion = SQL.EjecutarComandoSQL(listarComando, VariablesGlobales_LN.Conseguir_mySqlConnectionPrincipal());

            if (estadoDeEjecucion.Status)
            {
                estadoDeEjecucion.Mensaje.MensajeGenerado = VariablesGlobales_LN.MensajeExitoConsulta;
            }
            else
            {
                estadoDeEjecucion.Mensaje.MensajeGenerado = VariablesGlobales_LN.MensajeErrorConsulta;
            }
            return estadoDeEjecucion;

        }

        public static EstadoDeEjecucion Eliminar(string codigo)
        {
            List<MySqlCommand> listaComando = new List<MySqlCommand>();
            listaComando.Add(Alumno_LAD.MySqlCommand_Eliminar(VariablesGlobales_LN.Conseguir_mySqlConnectionPrincipal(), codigo));

            EstadoDeEjecucion estadoDeEjecucion = SQL.EjecutarComandoSQL(listaComando, VariablesGlobales_LN.Conseguir_mySqlConnectionPrincipal());

            if (estadoDeEjecucion.Status)
            {
                estadoDeEjecucion.Mensaje.MensajeGenerado = VariablesGlobales_LN.MensajeExitoConsulta;

            }
            else
            {
                estadoDeEjecucion.Mensaje.MensajeGenerado = VariablesGlobales_LN.MensajeErrorConsulta;
            }
            return estadoDeEjecucion;

        }

        public static EstadoDeConsulta ListarPorSexo(Alumno_LAD.TipoDeSexo generoAlumno)
        {
            EstadoDeConsulta estadoDeConsulta = SQL.ConsultarComandoSQLTable(Alumno_LAD.MySqlCommand_listar(VariablesGlobales_LN.Conseguir_mySqlConnectionPrincipal(), generoAlumno));

            if (estadoDeConsulta.Status)
            {
                DataTable dtAlumnoEncontrado = (DataTable)estadoDeConsulta.ValorObjeto;
                Alumno alumnoADevolver = new Alumno();

                try
                {
                    if (dtAlumnoEncontrado.Rows.Count > 0)
                    {
                        alumnoADevolver.idalumno = dtAlumnoEncontrado.Rows[0]["codigo"].ToString();
                        alumnoADevolver.nombre = dtAlumnoEncontrado.Rows[0]["nombre"].ToString();
                        alumnoADevolver.edad = IITCoreV3.Convertir.VacioA_Int(dtAlumnoEncontrado.Rows[0]["edad"].ToString());
                        alumnoADevolver.direccion = dtAlumnoEncontrado.Rows[0]["direccion"].ToString();
                        alumnoADevolver.sexo = dtAlumnoEncontrado.Rows[0]["sexo"].ToString();
                        alumnoADevolver.escuela.nombre = dtAlumnoEncontrado.Rows[0]["escuela"].ToString();
                    }
                    estadoDeConsulta.Status = true;
                    estadoDeConsulta.ValorObjeto = alumnoADevolver;
                    estadoDeConsulta.Mensaje.MensajeGenerado = VariablesGlobales_LN.MensajeExitoConsulta;
                }
                catch (Exception ex)
                {
                    estadoDeConsulta.Mensaje.MensajeGenerado = VariablesGlobales_LN.MensajeErrorConsulta;
                    estadoDeConsulta.Mensaje.DetalleDelMensaje = ex.Message;
                    estadoDeConsulta.Status = false;
                    estadoDeConsulta.ValorObjeto = new Alumno();

                }
            }
            else
            {
                estadoDeConsulta.Mensaje.MensajeGenerado = VariablesGlobales_LN.MensajeErrorConsulta;
            }

            return estadoDeConsulta;

        }

        public static EstadoDeConsulta BuscarPorCodigo(string codigoAlumno)
        {
            EstadoDeConsulta estadoDeConsulta = SQL.ConsultarComandoSQLTable(Alumno_LAD.MySqlCommand_buscarCodigo(VariablesGlobales_LN.Conseguir_mySqlConnectionPrincipal(), codigoAlumno));

            if (estadoDeConsulta.Status)
            {
                DataTable dtAlumnoEncontrado = (DataTable)estadoDeConsulta.ValorObjeto;
                Alumno alumnoADevolver = new Alumno();

                try
                {
                    if (dtAlumnoEncontrado.Rows.Count > 0)
                    {
                        alumnoADevolver.idalumno = dtAlumnoEncontrado.Rows[0]["codigo"].ToString();
                        alumnoADevolver.nombre = dtAlumnoEncontrado.Rows[0]["nombre"].ToString();
                        alumnoADevolver.edad = Convert.ToInt32(dtAlumnoEncontrado.Rows[0]["edad"].ToString());
                        alumnoADevolver.direccion = dtAlumnoEncontrado.Rows[0]["direccion"].ToString();
                        alumnoADevolver.sexo = dtAlumnoEncontrado.Rows[0]["sexo"].ToString();
                        alumnoADevolver.escuela.nombre = dtAlumnoEncontrado.Rows[0]["escuela"].ToString();
                    }

                    estadoDeConsulta.Status = true;
                    estadoDeConsulta.ValorObjeto = alumnoADevolver;
                    estadoDeConsulta.Mensaje.MensajeGenerado = VariablesGlobales_LN.MensajeExitoConsulta;
                }
                catch (Exception ex)
                {
                    estadoDeConsulta.Mensaje.MensajeGenerado = VariablesGlobales_LN.MensajeErrorConsulta;
                    estadoDeConsulta.Mensaje.DetalleDelMensaje = ex.Message;
                    estadoDeConsulta.Status = false;
                    estadoDeConsulta.ValorObjeto = new Alumno();

                }
            }
            else
            {
                estadoDeConsulta.Mensaje.MensajeGenerado = VariablesGlobales_LN.MensajeErrorConsulta;
            }

            return estadoDeConsulta;

        }
    }
}
