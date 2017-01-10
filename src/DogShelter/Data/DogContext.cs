namespace DogShelter.Data
{
    using Microsoft.EntityFrameworkCore;
    using Model;

    public class DogContext : DbContext
    {
        public DogContext(DbContextOptions<DogContext> options) : base(options)
        {
        }

        public DbSet<Dog> Dogs { get; set; }
    }
}
