using MongoDB.Driver;
using System.Collections.Generic; 
using System.Linq; 
using MovieApi.Models; 



namespace MovieApi.Services
{
    
    public class MovieService
    {
        private readonly IMongoCollection<Movie> _movies;

        public MovieService(IMovieDatabaseSettings settings)
        {
            var client = new MongoClient( settings.ConnectionString );
            var database = client.GetDatabase( settings.DatabaseName ); 
            _movies = database.GetCollection<Movie>( settings.MoviesCollectionName ); 
        }

        public List<Movie> Get()
        {
            return _movies.Find( movies => true ).ToList(); 
        }

    }

}