using System.Collections.Generic;
using Fashion22Api.Models;
using System.Linq; // Language Integrated Query

namespace Fashion22Api.Services 
{
    public class ProductService 
    {        
        List<Product> productDb = new List<Product> {
            new Product { Id = "abc", Name = "Rød t-skjorte" },
            new Product { Id = "def", Name = "Prada veske" },
            new Product { Id = "efg", Name = "Ecco Sko" },
            new Product { Id = "ghi", Name = "Nike Jumpy" }
        };

        public List<Product> GetProducts()
        {
            return productDb;
        } 

        public Product GetProduct(string id)
        {
            return productDb.SingleOrDefault( product => product.Id == id );
        }

    }
}