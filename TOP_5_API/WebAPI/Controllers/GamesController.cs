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
        [HttpGet("{gameName}")]
        public ActionResult<string> ReturnSpecificGame(string gameName)
        {
            List<GameDto> gameDtos = GameDao.GetGameInfo(gameName);
            return Json(gameDtos);
        }

        public ActionResult<string> ReturnGameNavDesc()
        {
            List<GameDto> gameDtos = GameDao.GetGameNavDesc();
            return Json(gameDtos);
        }
    }
}