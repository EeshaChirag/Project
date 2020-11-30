using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace API1.Models
{
    [DataContract]
    public class ChangePasswordModel
    {
        [DataMember]
        public string Password { get; set; }
        [DataMember]
        public int OTP { get; set; }
        [DataMember]
        public string EmailId { get; set; }

    }
}