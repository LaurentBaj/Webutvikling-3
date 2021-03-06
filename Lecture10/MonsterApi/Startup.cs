using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;

using MonsterApi.Services; 
using MonsterApi.Models; 
using Microsoft.Extensions.Options; 


namespace MonsterApi
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

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "MonsterApi", Version = "v1" });
            });

            services.Configure<MonsterDatabaseSettings>(
                Configuration.GetSection(nameof(MonsterDatabaseSettings))
            );

            services.AddSingleton<IMonsterDatabaseSettings>(
                sp => sp.GetRequiredService<IOptions<MonsterDatabaseSettings>>().Value
            );

            services.AddSingleton<MonsterService>();

            services.AddCors(
                options => {
                    options.AddPolicy("AllowAny", 
                        builder => builder
                            .AllowAnyOrigin()
                            .AllowAnyHeader()
                            .AllowAnyMethod()
                    );
                }
            );

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "MonsterApi v1"));
            }

            // Bruk index.html i root 
            DefaultFilesOptions newOptions = new DefaultFilesOptions();
            newOptions.DefaultFileNames.Append("index.html");
            app.UseDefaultFiles(newOptions);

            app.UseStaticFiles(); 

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("AllowAny");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
