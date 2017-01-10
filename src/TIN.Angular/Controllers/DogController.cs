namespace TIN.Angular.Controllers
{
    using Data;
    using Microsoft.AspNetCore.Mvc;
    
    public class DogController : Controller
    {
        private readonly DogContext _context;

        public DogController(DogContext context)
        {
            _context = context;
        }


    }
}
