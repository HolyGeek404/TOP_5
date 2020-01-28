using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GamesController : Controller
    {
        [HttpGet]
        public ActionResult<IEnumerable<string>> ReturnAllCategories()
        {
            return new string[] { "games", "films", "actors" };
        }

        [HttpGet("{categoryName}")]
        public ActionResult<string> ReturnSpecificCategory(string categoryName)
        {
            switch (categoryName)
            {
                case "games":
                    return "gamesaaaa";

                case "films":
                    return "filmsaaaa";

                case "actors":
                    return "actorsaaa";

                default:
                    return "category doesn't exist";

            }
        }
    }
}