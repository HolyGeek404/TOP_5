using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using WebAPI.DataObjects;
using Dapper;

namespace WebAPI.DataAccess
{
    public static class GameDao
    {
        public static List<GameDto> GetGameInfo(string gameShortTitle)
        {
            using (IDbConnection connection = new SqlConnection("Data Source=localhost;Initial Catalog=TOP_5;Integrated Security=True"))
            {
                List<GameDto> gameDtos = connection.Query<GameDto>("dbo.Games_GetGameInfo @ShortTitle",
                    new { ShortTitle = gameShortTitle }).ToList();

                return gameDtos;
            }
        }

        public static List<GameDto> GetGameNavDesc()
        {
            using (IDbConnection connection = new SqlConnection("Data Source=localhost;Initial Catalog=TOP_5;Integrated Security=True"))
            {
                List<GameDto> gameDtos = connection.Query<GameDto>("dbo.Games_GetNavDescription ").ToList();

                return gameDtos;
            }
        }
    }
}
