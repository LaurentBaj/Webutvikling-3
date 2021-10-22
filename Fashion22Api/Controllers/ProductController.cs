using Microsoft.AspNetCore.Mvc; 
using Fashion22Api.Services;
using System.Collections.Generic; 
using Fashion22Api.Models;

namespace Fashion22Api.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {

        private readonly ProductService productService; 

        public ProductController(ProductService _productService)
        {
            productService = _productService; 
        }

        [HttpGet]
        public IEnumerable<Product> GetProducts()
        {
            return productService.GetProducts(); 
        }


        [HttpGet("{id}")]
        public ActionResult<Product> GetProduct(string id)
        {
            Product product = productService.GetProduct(id);
            if (product != null) { return product; }
            else { return NotFound(); }
        }
    }
}