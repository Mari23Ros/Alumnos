using BaseMari_Entidades;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Text;

namespace BaseMari_LAD
{
    public class Escuela_LAD
    {
        public static MySqlCommand MySqlCommand_GuardarCambios(Escuela escuela, MySqlConnection conexionABD)
        {
            MySqlCommand comandoSQL = new MySqlCommand();

            try
            {
                //Cadena de comando
                string strComandoSQL = "INSERT INTO escuela(idescuela,nombre,numero,region) VALUES (@idescuela,@nombre,@numero,@region) ON DUPLICATE KEY UPDATE nombre=VALUES(nombre),numero=VALUES(numero),region=VALUES(region)";

                //Construimos el MysqlCOmand
                comandoSQL = new MySqlCommand(strComandoSQL, conexionABD);
                //Creamos los parametros
                MySqlParameter prm_idescuela = new MySqlParameter("idescuela", MySqlDbType.VarChar);
                MySqlParameter prm_nombre = new MySqlParameter("nombre", MySqlDbType.VarChar);
                MySqlParameter prm_numero = new MySqlParameter("numero", MySqlDbType.VarChar);
                MySqlParameter prm_region = new MySqlParameter("region", MySqlDbType.VarChar);
                //Asignamos valores a los parametros
                prm_idescuela.Value = escuela.idescuela;
                prm_nombre.Value = escuela.nombre;
                prm_numero.Value = escuela.numero;
                prm_region.Value = escuela.region;
                //Agregamos parametros al comando
                comandoSQL.Parameters.Add(prm_idescuela);
                comandoSQL.Parameters.Add(prm_nombre);
                comandoSQL.Parameters.Add(prm_numero);
                comandoSQL.Parameters.Add(prm_region);

            }
            catch (Exception)
            {
                comandoSQL = null;
            }
            return comandoSQL;
        }

        public static MySqlCommand MySqlCommand_Eliminar(MySqlConnection conexionABD, string codigo)
        {
            MySqlCommand comandoSQL = new MySqlCommand();

            try
            {
                //Cadena de comando
                string strComandoSQL = "DELETE  FROM escuela WHERE idescuela=@idescuela";
                //Construimos el MysqlCOmand
                comandoSQL = new MySqlCommand(strComandoSQL, conexionABD);
                //Creamos los parametros
                MySqlParameter prm_idescuela = new MySqlParameter("idescuela", MySqlDbType.VarChar);
                //Asignamos valores a los parametros
                prm_idescuela.Value = codigo;
                //Agregamos parametros al comando
                comandoSQL.Parameters.Add(prm_idescuela);

            }
            catch (Exception)
            {
                comandoSQL = null;
            }

            return comandoSQL;
        }

        public static MySqlCommand MySqlCommand_listar(MySqlConnection coneccionABD)
        {
            MySqlCommand comandoSQL = new MySqlCommand();
            try
            {
                string cadenaConsulta = "SELECT * FROM escuela";

                comandoSQL = new MySqlCommand(cadenaConsulta, coneccionABD);
            }
            catch (Exception)
            {
                comandoSQL = null;
            }
            return comandoSQL;
        }
    }
}
