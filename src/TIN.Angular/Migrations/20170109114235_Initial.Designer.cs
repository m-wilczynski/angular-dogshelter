using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using TIN.Angular.Data;

namespace TIN.Angular.Migrations
{
    [DbContext(typeof(DogContext))]
    [Migration("20170109114235_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.2");

            modelBuilder.Entity("TIN.Angular.Model.Dog", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Adopted");

                    b.Property<DateTime?>("AdoptedOn");

                    b.Property<uint>("Age");

                    b.Property<DateTime>("BroughtToShelter");

                    b.Property<string>("CareTaker");

                    b.Property<string>("Description");

                    b.Property<bool>("Male");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Dogs");
                });
        }
    }
}
