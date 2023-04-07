using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using mission14.Data;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace mission14.Controllers
{
 
        [ApiController]
        [Route("[controller]")]
        public class MovieController : Controller
        {
            // Context
            private MoviesDbContext context;

            // Constructor
            public MovieController(MoviesDbContext temp)
            {
                context = temp;
            }

            // edited movies
            public IEnumerable<Movies> Get()
            {
                var x = context.Movies
                    .Where(m => m.Edited == "Yes")
                    .OrderBy(m => m.Title)
                    .ToArray();

                return x;
            }
        }
    }
