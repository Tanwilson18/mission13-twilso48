using System.ComponentModel.DataAnnotations;
namespace mission14.Data
{
    public class Movies
    {
        //key and parts of the table that are going to be built out
        [Key]
        public int MovieId { get; set; }
        public string? Category { get; set; }
        public string? Title { get; set; }
        public int Year { get; set; }
        public string? Director { get; set; }
        public string? Rating { get; set; }
        public string? Edited { get; set; }
        public string? LentTo { get; set; }
        public string? Notes { get; set; }
    }
}


