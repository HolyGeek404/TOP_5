using System.Collections.Generic;
using WebAPI.DataObjects;

namespace WebAPI.DataAccess
{
    public interface IGameDao
    {
        List<GameDto> GetGameInfo(string gameShortTitle);
        List<GameDto> GetGameNavDesc();
    }
}