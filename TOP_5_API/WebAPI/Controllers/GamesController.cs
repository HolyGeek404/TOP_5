using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using WebAPI.DataAccess;
using WebAPI.DataObjects;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GamesController : Controller
    {
        [HttpGet("{categoryName}")]
        public ActionResult<string> ReturnSpecificCategory(string categoryName)
        {
            List<GameDto> gameDtos = GameDao.GetGameInfo(categoryName);
            return Json(gameDtos);
        }
    }
}