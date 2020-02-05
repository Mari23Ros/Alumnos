using BaseMari_Entidades;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Text;

namespace BaseMari_LAD
{
    public class Alumno_LAD
    {
        public static MySqlCommand MySqlCommand_GuardarCambios(Alumno alumno, MySqlConnection conexionABD)
        {
            MySqlCommand comandoSQL = new MySqlCommand();
            try
            {
                //Cadena de comando
                string strComandoSQL = "INSERT INTO alumno(idalumno,nombre,edad,direccion,sexo,escuela_idescuela) VALUES (@idalumno,@nombre,@edad,@direccion,@sexo,@escuela_idescuela) ON DUPLICATE KEY UPDATE nombre=VALUES(nombre),edad=VALUES(edad),direccion=VALUES(direccion),sexo=VALUES(sexo),escuela_idescuela=VALUES(escuela_idescuela)";
                //Construimos el MysqlCOmand
                comandoSQL = new MySqlCommand(strComandoSQL, conexionABD);
                //Creamos los parametros
                MySqlParameter prm_idalumno = new MySqlParameter("idalumno", MySqlDbType.VarChar);
                MySqlParameter prm_nombre = new MySqlParameter("nombre", MySqlDbType.VarChar);
                MySqlParameter prm_edad = new MySqlParameter("edad", MySqlDbType.Int32);
                MySqlParameter prm_direccion = new MySqlParameter("direccion", MySqlDbType.VarChar);
                MySqlParameter prm_sexo = new MySqlParameter("sexo", MySqlDbType.VarChar);
                MySqlParameter prm_escuela_idescuela = new MySqlParameter("escuela_idescuela", MySqlDbType.VarChar);
                //Asignamos valores a los parametros
                prm_idalumno.Value = alumno.idalumno;
                prm_nombre.Value = alumno.nombre;
                prm_edad.Value = alumno.edad;
                prm_direccion.Value = alumno.direccion;
                prm_sexo.Value = alumno.sexo;
                prm_escuela_idescuela.Value = alumno.escuela.idescuela;
                //Agregamos parametros al comando
                comandoSQL.Parameters.Add(prm_idalumno);
                comandoSQL.Parameters.Add(prm_nombre);
                comandoSQL.Parameters.Add(prm_edad);
                comandoSQL.Parameters.Add(prm_direccion);
                comandoSQL.Parameters.Add(prm_sexo);
                comandoSQL.Parameters.Add(prm_escuela_idescuela);
            }
            catch (Exception)
            {
                comandoSQL = null;
            }

            return comandoSQL;
        }


        public static MySqlCommand MySqlCommand_Eliminar(MySqlConnection conexionABD, string codigoAlumno)
        {
            MySqlCommand comandoSQL = new MySqlCommand();
            try
            {
                //Cadena de comando
                string strComandoSQL = "DELETE  FROM alumno WHERE idalumno=@idalumno";
                //Construimos el MysqlCOmand
                comandoSQL = new MySqlCommand(strComandoSQL, conexionABD);
                //Creamos los parametros
                MySqlParameter prm_idalumno = new MySqlParameter("idalumno", MySqlDbType.VarChar);
                //Asignamos valores a los parametros
                prm_idalumno.Value = codigoAlumno;
                //Agregamos parametros al comando
                comandoSQL.Parameters.Add(prm_idalumno);
            }
            catch (Exception)
            {
                comandoSQL = null;
            }

            return comandoSQL;
        }


        public enum TipoDeSexo
        {
            Masculino, Femenino
        }
        public static MySqlCommand MySqlCommand_listar(MySqlConnection conexionABD, TipoDeSexo generoAlumno)
        {
            MySqlCommand comandoSQL = new MySqlCommand();
            string cadenaConsulta = "";
            try
            {
                if (generoAlumno == TipoDeSexo.Femenino)
                {
                    cadenaConsulta = "SELECT * FROM alumno WHERE sexo = 'Femenino'";
                }
                else if (generoAlumno == TipoDeSexo.Masculino)
                {
                    cadenaConsulta = "SELECT * FROM alumno WHERE sexo = 'Masculino'";
                }
                comandoSQL = new MySqlCommand(cadenaConsulta, conexionABD);

            }
            catch (Exception)
            {
                comandoSQL = null;

            }
            return comandoSQL;
        }

        public static MySqlCommand MySqlCommand_buscarCodigo(MySqlConnection conexionABD, string codigoAlumno)
        {
            MySqlCommand comandoSQL = new MySqlCommand();
            try
            {
                string comandoConsulta = "SELECT * FROM alumno WHERE idalumno = @prm_idalumno";
                comandoSQL = new MySqlCommand(comandoConsulta, conexionABD);

                MySqlParameter prm_idalumno = new MySqlParameter("prm_idalumno", MySqlDbType.VarChar);

                prm_idalumno.Value = codigoAlumno;

                comandoSQL.Parameters.Add(prm_idalumno);
            }
            catch (Exception)
            {
                comandoSQL = null;
            }

            return comandoSQL;

        }
    }
}
