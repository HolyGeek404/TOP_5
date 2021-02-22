using System.Collections.Generic;
using WebAPI.DataObjects;

namespace WebAPI.Interfaces
{
    public interface IMoviesDao
    {
        List<MoviesDto> GetMovie(string movieName);
        List<MoviesDto> GetAllMovies();
    }
}