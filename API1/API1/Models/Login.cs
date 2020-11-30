using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;


namespace API1.Models
{
    [DataContract]
    public class Login
    {
        [DataMember]
        public string UserEmail { get; set; }
        [DataMember]
        public string UserPassword { get; set; }
    }
}