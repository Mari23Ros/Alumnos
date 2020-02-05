using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BaseMari.Extensions
{
    public static class ServiceExtensions
    {
        public static void ConfigureCors(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin() //Se puede cambiar este metodo AllowAnyOrigin() que permite recibir peticiones desde cualquier punto y usar en cambio WithOrigins("http://www.something.com") que recibira peticiones solo de esa punto
                    .AllowAnyMethod() //En vez de usar AllowAnyMethod() que permite recibir cualquier metodo HTTP, se puede usar WithMethods("POST", "GET") que permitira solo metodos HTTP especificos
                    .AllowAnyHeader() //Los mismos cambios se pueden aplicar para AllowAnyHeader(), que podria usar, por ejemplo el metodo WithHeaders("accept", "content-type") que permitira solo headers especificos
                    .AllowCredentials());
            });
        }

        public static void ConfigureIISIntegration(this IServiceCollection services)
        {
            services.Configure<IISOptions>(options =>
            {
                //No inicializamos ninguna propiedad dentro de las opciones por que las por defecto son suficiente
                //claro que si se quisiera se podria modificar esto para mas control                
            });
        }
    }
}
