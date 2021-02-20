using Dapper;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using WebAPI.DataObjects;

namespace WebAPI.DataAccess
{
    public class MoviesDao : IMoviesDao
    {
        public List<MoviesDto> GetMovie(string movieName)
        {
            using IDbConnection connection = new SqlConnection("Data Source=localhost;Initial Catalog=TOP_5;Integrated Security=True");
            List<MoviesDto> moviesDtos = connection.Query<MoviesDto>("dbo.Movies_GetMovieInfo @Title",
                new { Title = movieName }).ToList();

            return moviesDtos;
        }

        public List<MoviesDto> GetAllMovies()
        {
            using IDbConnection connection = new SqlConnection("Data Source=localhost;Initial Catalog=TOP_5;Integrated Security=True");
            List<MoviesDto> moviesDtos = connection.Query<MoviesDto>("dbo.Movies_GetAllMoviesDescription").ToList();

            return moviesDtos;
        }
    }
}