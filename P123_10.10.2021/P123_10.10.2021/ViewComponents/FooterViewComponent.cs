using Microsoft.AspNetCore.Mvc;
using P123_10._10._2021.DAL;
using P123_10._10._2021.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace P123_10._10._2021.ViewComponents
{
    public class FooterViewComponent:ViewComponent
    {
        private AppDbContext _context { get; }
        public FooterViewComponent(AppDbContext context)
        {
            _context = context;
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            Setting setting = _context.Settings.FirstOrDefault();
            return View(await Task.FromResult(setting));
        }
    }
}
