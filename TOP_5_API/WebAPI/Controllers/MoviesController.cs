using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using WebAPI.DataAccess;
using WebAPI.DataObjects;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : Controller
    {
        [HttpGet("{movieName}")]
        public ActionResult<string> ReturnSpecificMovie(string movieName)
        {
            List<MoviesDto> moviesDtos = MoviesDao.GetMovie(movieName);
            return Json(moviesDtos);
        }

        public ActionResult<string> ReturnMoviesDescription()
        {
            List<MoviesDto> moviesDtos = MoviesDao.GetAllMovies();
            return Json(moviesDtos);
        }
    }
}