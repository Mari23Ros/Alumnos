using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BaseMari.Extensions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MySql.Data.MySqlClient;

namespace BaseMari
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.ConfigureCors();

            services.ConfigureIISIntegration();

            string strConexionMysql = "Server = 127.0.0.1; Database = alumno; Uid = root; Pwd = Intel-IT; pooling = true";

            services.AddSingleton<MySqlConnection>(sp =>
            {
                //AsignarCadenaDeConexionPrincipal(strConexionMysql);
                MySqlConnection mySqlConnection = null;
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
            });

            //services.AddScoped<Usuario_LN>();
            //services.AddScoped<Usuario_LAD>();

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                //si es desarrollo nos dira que usara la pagina de excepciones de desarrollo
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler();

                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                // app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseCors("CorsPolicy");
            app.UseForwardedHeaders(new ForwardedHeadersOptions
            {
                ForwardedHeaders = ForwardedHeaders.All
            });
            app.UseStaticFiles();

            // con esto le decimos que se necesita usar las paginas de estatus de codigo
            //app.UseStatusCodePages();

            //app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
