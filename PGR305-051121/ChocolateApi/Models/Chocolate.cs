using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using ChocolateApi.Interfaces;

namespace ChocolateApi.Models 
{
    public class Chocolate : IChocolate
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
    }
}