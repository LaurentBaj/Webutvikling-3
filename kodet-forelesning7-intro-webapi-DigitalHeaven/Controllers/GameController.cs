using System.Collections.Generic;
using DigitalHeaven.Models;
using Microsoft.AspNetCore.Mvc;

namespace DigitalHeaven.Controllers 
{
    [ApiController] // Decoration
    [Route("api/[controller]")]
    public class GameController : ControllerBase 
    {
        private List<Game> GetAllGames() 
        {
            List<Game> newGameList = new List<Game> 
            { // Allman notation
                new Game 
                { 
                    Id = 1000, 
                    Title = "League of Legends", 
                    Console = "PC", 
                    Price = 0 
                },
                new Game { Id = 1001, Title = "Pikmin", Console = "Nintendo Switch", Price = 599 },
                new Game { Id = 1002, Title = "New World", Console = "PC", Price = 199 },
                new Game { Id = 1003, Title = "Apex Legends", Console = "PC", Price = 99},
                new Game { Id = 1004, Title = "Fifa22", Console = "PS5", Price = 599 }
            };

            return newGameList;
        }

        [HttpGet] // domene/api/controller
        public IEnumerable<Game> Get()
        {
            return GetAllGames();
        }

        [HttpGet("{id}")] // domene/api/controller/id
        public Game Get(int id)
        {
            Game game = GetAllGames().Find( game => game.Id == id );
            return game;
        }



    }

}