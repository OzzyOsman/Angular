using System.Collections.Generic;
using System.Web.Http;

namespace Angular.Api.Controllers
{
    public class TestData
    {
        public List<TagData> TagData { get; set; }
    }

    public class TagData
    {
        public string Tag { get; set; }
        public string TestDescription { get; set; }
    }

    public class TestDataController : ApiController
    {
        
        public IHttpActionResult Get()
        {
            TestData data = new TestData();

            data.TagData = new List<TagData>();
            data.TagData.Add(new TagData { Tag = "This is Tag 1", TestDescription = "Add button should add [This is Tag 1] search tag if tag entered" });
            data.TagData.Add(new TagData { Tag = "This is Tag 2", TestDescription = "Add button should add [This is Tag 2] search tag if tag entered" });

            return Ok(data);
        }
    }
}
