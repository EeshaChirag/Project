using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace API1.Models
{
    [DataContract]
    public class Usid
    {
        [DataMember]
        public int UserId { get; set; }

        [DataMember]
        public int SubjectId { get; set; }
    }
}