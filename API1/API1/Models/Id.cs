using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace API1.Models
{
    [DataContract]
    public class Id
    {
        [DataMember]
        public int SubjectId { get; set; }
        [DataMember]
        public int LevelId { get; set; }
    }
}