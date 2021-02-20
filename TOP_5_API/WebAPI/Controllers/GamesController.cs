using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using WebAPI.DataAccess;
using WebAPI.DataObjects;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GamesController : Controller
    {
        private readonly IGameDao _gameDao;

        public GamesController(IGameDao gameDao)
        {
            _gameDao = gameDao;
        }

        [HttpGet]
        [Route("/api/game/{gameName}")]
        public ActionResult<string> ReturnSpecificGame([FromRoute]string gameName)
        {
            List<GameDto> gameDtos = _gameDao.GetGameInfo(gameName);
            return Json(gameDtos);
        }

        [HttpGet]
        [Route("/api/games/description/")]
        public ActionResult<string> ReturnGameNavDesc()
        {
            List<GameDto> gameDtos = _gameDao.GetGameNavDesc();
            return Json(gameDtos);
        }
    }
}