using Microsoft.AspNetCore.Mvc;
using MovieApi.Services;
using System.Collections.Generic; 
using MovieApi.Models; 




namespace MovieApi.Controllers
{


    [ApiController]
    [Route("[controller]")]
    public class MovieController : ControllerBase
    {
        private readonly MovieService _movieService; 


        public MovieController(MovieService movieService)
        {
            _movieService = movieService; 
        }


        [HttpGet]
        public IEnumerable<Movie> Get()
        {
                return _movieService.Get(); 
        }
    
    }

}