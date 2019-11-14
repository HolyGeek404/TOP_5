using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TOP_5_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<string>> ReturnAllCategories()
        {
            return new string[] { "games", "films", "actors" };
        }

        [HttpGet("{categoryName}")]
        public ActionResult<string> ReturnSpecificCategory(string categoryName)
        {
            switch(categoryName)
            {
                case "games":
                    return "games";      

                case "films":
                    return "films";
                    
                case "actors":
                    return "actors";
                   
                default:
                    return "category doesn't exist";
                    
            }
        }
    }
}