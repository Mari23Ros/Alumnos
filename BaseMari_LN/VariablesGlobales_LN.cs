using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Text;

namespace BaseMari_LN
{
    public class VariablesGlobales_LN
    {
        public static string MensajeExitoConsulta = "Registro procesado con éxito.";
        public static string MensajeErrorConsulta = "No se procesó el registro. Intente nuevamente.";

        private static MySqlConnection mySqlConnection = null;
        private static string strConexionMysql = "Server = 127.0.0.1; Database = alumno; Uid = root; Pwd = Intel-IT; pooling = true";
        //private static string strConexionMysql = "Server = 127.0.0.1; Database = iit_baseweb; Uid = root; Pwd = Intel-IT; pooling = true";

        public static void AsignarCadenaDeConexionPrincipal(string cadena)
        {
            strConexionMysql = cadena;
            mySqlConnection = new MySqlConnection(strConexionMysql);
        }
        public static MySqlConnection Conseguir_mySqlConnectionPrincipal()
        {
            //AsignarCadenaDeConexionPrincipal(strConexionMysql);
            try
            {
                if (mySqlConnection == null)
                {
                    mySqlConnection = new MySqlConnection(strConexionMysql);
                    mySqlConnection.Open();
                }
                else
                {
                    if (mySqlConnection.State != System.Data.ConnectionState.Open)
                    {
                        mySqlConnection.Open();
                    }
                }
            }
            catch (Exception ex)
            {
                string mensaje = ex.Message;
            }

            return mySqlConnection;
        }
    }
}
