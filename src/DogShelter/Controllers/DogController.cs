namespace DogShelter.Controllers
{
    using System;
    using System.Linq;
    using System.Threading.Tasks;
    using Data;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using Model;
    using Results;

    [Route("api/[controller]")]
    public class DogController : Controller
    {
        private readonly DogContext _context;

        public DogController(DogContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            return new JsonResult(await _context.Dogs.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetDogById(int id)
        {
            return new JsonResult(await _context.Dogs.SingleOrDefaultAsync(dog => dog.Id == id));
        }

        [HttpPost]
        public async Task<IActionResult> AddNewDog(Dog dog)
        {
            _context.Dogs.Add(dog);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                return new JsonResult(new AjaxResult(false, "Failed to add new dog."));
            }
            return new JsonResult(new AjaxResult(true, "New dog added successfully."));
        }

        [HttpPut]
        public async Task<IActionResult> UpdateExistingDog(Dog dog)
        {
            var attached = _context.Dogs.Attach(dog);
            _context.Entry(attached).Entity.State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                return new JsonResult(new AjaxResult(false, "Failed to update dog data."));
            }
            return new JsonResult(new AjaxResult(true, "Dog data updated successfully."));
        }
    }
}
