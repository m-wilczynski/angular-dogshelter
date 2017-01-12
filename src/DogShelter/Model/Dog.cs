namespace TIN.Angular.Model
{
    using System;

    public class Dog
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool Male { get; set; }
        public double Age { get; set; }
        public DateTime BroughtToShelter { get; set; }
        public string Description { get; set; }
        public string CareTaker { get; set; }
        public string CareTakerPhone { get; set; }
        public bool Adopted { get; set; }
        public DateTime? AdoptedOn { get; set; }

    }
}
