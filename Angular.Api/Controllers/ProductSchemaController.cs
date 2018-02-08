using System;
using System.Collections.Generic;
using System.Web.Http;
using Angular.Api.Models;

namespace Angular.Api.Controllers
{
    public class ProductSchemaController : ApiController
    {
        public IHttpActionResult Get()
        {
            List<ProductSchema> schemaList = new List<ProductSchema> { };

            Type t = typeof(Product);

            foreach (var prop in t.GetProperties())
            {
                var t1 = prop.Name;
                var t2 = prop.PropertyType.Name;

                ProductSchema schema = new ProductSchema
                {
                    Name = t1,
                    Value = t1,
                    Type = (t2 == "String")
                        ? "Text"
                        : (t2.Contains("IList"))
                            ? "List"
                            : "Number"
                };

                schemaList.Add(schema);
            }

            return Ok(schemaList);
        }
    }
}
