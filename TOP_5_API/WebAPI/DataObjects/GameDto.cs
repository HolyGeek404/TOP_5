namespace WebAPI.DataObjects
{
    public class GameDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Short_title { get; set; }
        public string Background_img_path { get; set; }
        public string Description { get; set; }
        public string Description_img_path { get; set; }
    }
}