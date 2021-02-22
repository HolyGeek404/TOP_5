using System.Collections.Generic;
using WebAPI.DataObjects;

namespace WebAPI.Interfaces
{
    public interface IGameDao
    {
        List<GameDto> GetGameInfo(string gameShortTitle);
        List<GameDto> GetGameNavDesc();
    }
}