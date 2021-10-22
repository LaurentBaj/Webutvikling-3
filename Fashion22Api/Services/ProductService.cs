using System.Collections.Generic; 
using Fashion22Api.Models;
using System.Linq; // Language Integrated Query

namespace Fashion22Api.Services
{

    public class ProductService
    {
        List<Product> productdb = new List<Product> 
        {
            new Product { Id = "abc", Name = "Jacket" },
            new Product { Id = "def", Name = "Pants" },
            new Product { Id = "ghi", Name = "Skirt" },
            new Product { Id = "jkl", Name = "Trouser" }            
        }; 


        public List<Product> GetProducts()
        {
            return productdb; 
        }

        
        public Product GetProduct(string id)
        {
            return productdb.SingleOrDefault( product => product.Id == id ); 
        }
    }

}