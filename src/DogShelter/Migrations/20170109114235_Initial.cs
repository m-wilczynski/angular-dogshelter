using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DogShelter.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Dogs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Autoincrement", true),
                    Adopted = table.Column<bool>(nullable: false),
                    AdoptedOn = table.Column<DateTime>(nullable: true),
                    Age = table.Column<uint>(nullable: false),
                    BroughtToShelter = table.Column<DateTime>(nullable: false),
                    CareTaker = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Male = table.Column<bool>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Dogs", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Dogs");
        }
    }
}
