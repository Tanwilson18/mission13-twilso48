using System.ComponentModel.DataAnnotations;
namespace mission14.Data
{
	public class Movies
	{
		[Key]

		public int MovieId { get; set; }

		public string Title { get; set; }

		public int year { get; set; }

		public string Raiting { get; set; }

        public string Director { get; set; }


    }
}

