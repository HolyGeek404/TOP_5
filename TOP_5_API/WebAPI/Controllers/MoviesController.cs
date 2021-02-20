using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using WebAPI.DataAccess;
using WebAPI.DataObjects;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MoviesController : Controller
    {
        private readonly IMoviesDao _moviesDao;

        public MoviesController( IMoviesDao moviesDao)
        {
            _moviesDao = moviesDao;
        }

        [HttpGet]
        [Route("/api/movie/{movieName}")]
        public ActionResult<string> ReturnSpecificMovie([FromRoute]string movieName)
        {
            List<MoviesDto> moviesDtos = _moviesDao.GetMovie(movieName);
            return Json(moviesDtos);
        }
        [HttpGet]
        [Route("/api/movies/description/")]
        public ActionResult<string> ReturnMoviesDescription()
        {
            List<MoviesDto> moviesDtos = _moviesDao.GetAllMovies();
            return Json(moviesDtos);
        }
    }
}