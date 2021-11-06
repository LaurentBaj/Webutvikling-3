using Microsoft.AspNetCore.Mvc;
using ChocolateApi.Models;
using ChocolateApi.Services;
using System.Collections.Generic;

namespace ChocolateApi.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class ChocolateController : ControllerBase
    {
        private readonly ChocolateService _chocolateService;

        public ChocolateController(ChocolateService chocolateService)
        {
            _chocolateService = chocolateService;
        }

        [HttpGet]
        public IEnumerable<Chocolate> Get()
        {
            return _chocolateService.Get();
        }

        [HttpPost]
        public Chocolate Post(Chocolate newChocolate)
        {
            return _chocolateService.Create( newChocolate );
        }
        

    }

}