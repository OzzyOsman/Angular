using System.Collections.Generic;
using System.Xml.Serialization;

namespace Angular.Api.Models
{
    [XmlRoot("Parts")]
    public class Parts
    {
        [XmlElement("Partslist")]
        public Partslist PartsList { get; set; }
    }

    public class Partslist
    {
        [XmlElement("Part")]
        public List<Part> PartsList { get; set; }
    }

    public class Part
    {
        [XmlElement("Item")]
        public string Item { get; set; }

        [XmlElement("Manufacturer")]
        public string Manufacturer { get; set; }

        [XmlElement("Model")]
        public string Model { get; set; }

        [XmlElement("Cost")]
        public string Cost { get; set; }
    }
}