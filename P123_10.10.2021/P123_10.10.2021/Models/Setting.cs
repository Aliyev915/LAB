using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace P123_10._10._2021.Models
{
    public class Setting
    {
        public int Id { get; set; }
        [Required,MaxLength(100)]
        public string HeaderLogo { get; set; }
        [Required,MaxLength(20)]
        public string Phone { get; set; }
        [Required,MaxLength(100)]
        public string Email { get; set; }

    }
}
