using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.OData;
using Angular.Api.Models;

namespace Angular.Api.Controllers
{
    [EnableQuery]
    [EnableCors("http://localhost/Angular/", "*", "*")]
    public class ProductController : ApiController
    {
        public List<Product> _products { get; set; }

        public ProductController ()
        {
            _products = new List<Product> {
                new Product {
                    ProductId = 1,
                    ProductName =  "Leaf Rake",
                    ProductCode = "GDN-0011",
                    ReleaseDate = new DateTime(2013, 5, 10),
                    Description = "Leaf rake with 48-inch wooden handle.",
                    Cost = 9.00M,
                    Price = 19.95M,
                    Category=  "garden",
                    Tags =  new List<string>{"leaf", "tool"},
                    ImageUrl = "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
                },
                new Product {
                    ProductId = 2,
                    ProductName = "Garden Cart",
                    ProductCode = "GDN-0023",
                    ReleaseDate =  new DateTime(2010, 3, 18),
                    Description = "15 gallon capacity rolling garden cart",
                    Cost = 20.00M,
                    Price = 32.99M,
                    Category = "garden",
                    Tags = new List<string>{"barrow", "cart", "wheelbarrow"},
                    ImageUrl = "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
                },
                 new Product {
                    ProductId = 5,
                    ProductName = "Hammer",
                    ProductCode = "TBX-0048",
                    ReleaseDate =  new DateTime(2013, 5, 21),
                    Description = "Curved claw steel hammer",
                    Cost = 1.00M,
                    Price = 8.99M,
                    Category = "toolbox",
                    Tags = new List<string>{"tool"},
                    ImageUrl = "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
                },
                new Product {
                    ProductId = 8,
                    ProductName = "Saw",
                    ProductCode = "TBX-0022",
                    ReleaseDate =  new DateTime(2009, 5, 15),
                    Description = "15-inch steel blade hand saw",
                    Cost = 6.95M,
                    Price = 11.55M,
                    Category = "garden",
                    Tags = new List<string>{"garden", "mower"},
                    ImageUrl = "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
                },
                new Product {
                    ProductId = 10,
                    ProductName = "Video Game Controller",
                    ProductCode = "GMG-0042",
                    ReleaseDate =  new DateTime(2002, 10, 15),
                    Description = "Standard two-button video game controlle",
                    Cost = 2.22M,
                    Price = 35.95M,
                    Category = "gaming",
                    Tags = new List<string>{"gaming", "controller", "video game"},
                    ImageUrl = "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
                }
            };
        }

        public IHttpActionResult Get(){
            return Ok(_products.AsQueryable());
        }

        public IHttpActionResult Get(int productId)
        {
            return Ok(_products.Where(i => i.ProductId == productId).FirstOrDefault());
        }
        
        public IHttpActionResult Get(string search)
        {
            return Ok(_products.Where(p => p.ProductCode.Contains(search)));
        }

        // POST: api/Products
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Products/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Products/5
        public void Delete(int id)
        {
        }
    }
}
