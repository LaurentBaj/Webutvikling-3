using ChocolateApi.Models;
using ChocolateApi.DatabaseSettings;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace ChocolateApi.Services 
{
    public class ChocolateService
    {
        private readonly IMongoCollection<Chocolate> _chocolates;

        public ChocolateService(IChocolateDatabaseSettings settings)
        {
            var client = new MongoClient(  settings.ConnectionString );
            var database = client.GetDatabase(  settings.DatabaseName );
            _chocolates = database.GetCollection<Chocolate>( settings.ChocolateCollectionName );
        }

        public List<Chocolate> Get()
        {
            return _chocolates.Find( chocolate => true).ToList();
        }

        public Chocolate Create(Chocolate newChocolate)
        {
            _chocolates.InsertOne( newChocolate );
            return newChocolate;
        }

    }
}