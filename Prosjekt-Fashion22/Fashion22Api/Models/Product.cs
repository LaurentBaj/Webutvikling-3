using Fashion22Api.Interfaces;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

// Vi trenger Customer med Id og FirstName: lag Interface og Class

namespace Fashion22Api.Models
{
    public class Product : IProduct
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
    }
}