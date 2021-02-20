namespace WebAPI.DataObjects
{
    public class MoviesDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Release_data { get; set; }
        public string Description { get; set; }
        public string Description_img_path { get; set; }
        public string FullName { get; set; }
    }
}