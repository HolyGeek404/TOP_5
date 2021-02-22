using Dapper;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using WebAPI.DataObjects;
using WebAPI.Interfaces;

namespace WebAPI.DataAccess
{
    public class GameDao : IGameDao
    {
        public List<GameDto> GetGameInfo(string gameShortTitle)
        {
            using IDbConnection connection = new SqlConnection("Data Source=localhost;Initial Catalog=TOP_5;Integrated Security=True");
            List<GameDto> gameDtos = connection.Query<GameDto>("dbo.Games_GetGameInfo @ShortTitle",
                new { ShortTitle = gameShortTitle }).ToList();

            return gameDtos;
        }

        public List<GameDto> GetGameNavDesc()
        {
            using IDbConnection connection = new SqlConnection("Data Source=localhost;Initial Catalog=TOP_5;Integrated Security=True");
            List<GameDto> gameDtos = connection.Query<GameDto>("dbo.Games_GetNavDescription ").ToList();

            return gameDtos;
        }
    }
}