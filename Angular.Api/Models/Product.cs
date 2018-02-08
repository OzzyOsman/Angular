using System;
using System.Collections.Generic;

namespace Angular.Api.Models
{
    public class ProductSchema
    {
        public string Name { get; set; }
        public string Value { get; set; }
        public string Type { get; set; }
    }
    public class Product
    {
        public int ProductId { get; set; }

        public string ProductName { get; set; }

        public string ProductCode { get; set; }

        public DateTime ReleaseDate { get; set; }

        public string Description { get; set; }

        public decimal Cost { get; set; }

        public decimal Price { get; set; }

        public string  Category { get; set; }

        public IList<string> Tags { get; set; }

        public string ImageUrl { get; set; }
    }
}