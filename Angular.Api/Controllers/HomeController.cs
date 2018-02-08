using System.IO;
using System.Web.Mvc;
using System.Xml.Serialization;
using Angular.Api.Models;

namespace Angular.Api.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        public ActionResult Deserialise()
        {
            Parts result;
            XmlSerializer serializer = new XmlSerializer(typeof(Parts));

            string testData = @"<Parts>
                                    <Part>
                                        <Item>Motherboard</Item>
                                        <Manufacturer>ASUS</Manufacturer>
                                        <Model>P3B-F</Model>
                                        <Cost>123.00</Cost>
                                    </Part>
                                    <Part>
                                      <Item>Sound Card</Item>
                                      <Manufacturer>Creative Labs</Manufacturer>
                                      <Model>Sound Blaster Live</Model>
                                      <Cost>80.00</Cost>
                                    </Part>
                    </Parts>";

            using (TextReader reader = new StringReader(testData))
            {
                result = (Parts) serializer.Deserialize(reader);
            }

            return View(result);
        }

        public ActionResult DeserializeStream()
        {
            Parts result;
            XmlSerializer serializer = new XmlSerializer(typeof (Parts));

            using (FileStream fileStream = new FileStream(@"c:\parts.xml", FileMode.Open))
            {
                result = (Parts) serializer.Deserialize(fileStream);
            }

            return View(result);
        }
    }
}
