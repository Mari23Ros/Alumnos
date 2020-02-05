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
    public class Escuela_LN
    {
        public static EstadoDeEjecucion GuardarCambios(Escuela escuela)
        {
            List<MySqlCommand> listarComandos = new List<MySqlCommand>();
            listarComandos.Add(Escuela_LAD.MySqlCommand_GuardarCambios(escuela, VariablesGlobales_LN.Conseguir_mySqlConnectionPrincipal()));

            EstadoDeEjecucion estadoDeEjecucion = SQL.EjecutarComandoSQL(listarComandos, VariablesGlobales_LN.Conseguir_mySqlConnectionPrincipal());

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
            List<MySqlCommand> listarComando = new List<MySqlCommand>();
            listarComando.Add(Escuela_LAD.MySqlCommand_Eliminar(VariablesGlobales_LN.Conseguir_mySqlConnectionPrincipal(), codigo));

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

        public static EstadoDeConsulta Listar()
        {
            EstadoDeConsulta estadoDeConsulta = SQL.ConsultarComandoSQLTable(Escuela_LAD.MySqlCommand_listar(VariablesGlobales_LN.Conseguir_mySqlConnectionPrincipal()));

            if (estadoDeConsulta.Status)
            {
                DataTable dtEscuelas = (DataTable)estadoDeConsulta.ValorObjeto;
                if (dtEscuelas.Rows.Count > 0)
                {
                    estadoDeConsulta.Status = true;
                    estadoDeConsulta.ValorObjeto = dtEscuelas;
                    estadoDeConsulta.Mensaje.MensajeGenerado = VariablesGlobales_LN.MensajeExitoConsulta;
                }
                else
                {
                    estadoDeConsulta.Status = false;
                    estadoDeConsulta.ValorObjeto = dtEscuelas;
                    estadoDeConsulta.Mensaje.MensajeGenerado = "No se encontro ningun registro en la tabla";
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
