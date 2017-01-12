using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using TIN.Angular.Data;

namespace DogShelter.Migrations
{
    [DbContext(typeof(DogContext))]
    partial class DogContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.0-rtm-22752");

            modelBuilder.Entity("TIN.Angular.Model.Dog", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Adopted");

                    b.Property<DateTime?>("AdoptedOn");

                    b.Property<double>("Age");

                    b.Property<DateTime>("BroughtToShelter");

                    b.Property<string>("CareTaker");

                    b.Property<string>("CareTakerPhone");

                    b.Property<string>("Description");

                    b.Property<bool>("Male");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Dogs");
                });
        }
    }
}
