using Microsoft.EntityFrameworkCore;
using P123_10._10._2021.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace P123_10._10._2021.DAL
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options):base(options)
        {
        }
        public DbSet<Setting> Settings { get; set; }
    }
}
