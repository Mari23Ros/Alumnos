using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BaseMari_LN;
using IITCoreV3;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BaseMari.Controllers
{
    [Route("api/escuela")]
    [ApiController]
    public class EscuelaController : ControllerBase
    {
        #region Variables Locales

        EstadoDeConsulta estadoConsulta = new EstadoDeConsulta();
        EstadoDeEjecucion estadoEjecucion = new EstadoDeEjecucion();        

        #endregion

        [HttpGet]
        public IActionResult Get_ListaDeEscuelast()
        {
            try
            {
                estadoConsulta = new EstadoDeConsulta();
                estadoConsulta = Escuela_LN.Listar();

                if (estadoConsulta.Status)
                {
                    return Ok(new JsonResult(estadoConsulta.ValorObjeto));
                }
                else
                {
                    //TODO : FALTA TESTEAR ESTA LINEA
                    //el mensaje me dira si ocurrio error al ejecutar el comando sql o si la tabla esta sin datos
                    //return NotFound(estadoConsulta.Mensaje.MensajeGenerado);
                    return StatusCode(404, new JsonResult(new { mensaje = estadoEjecucion.Mensaje.MensajeGenerado, detalle = estadoEjecucion.Mensaje.DetalleDelMensaje }));
                }
            }
            catch (Exception ex)
            {
                //error de servidor
                return StatusCode(500, $"InternalServer error: {ex.Message}");
            }
        }


        //// GET: api/<controller>
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
