using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace API1.Models
{
    [DataContract]
    public class Search
    {
        [DataMember]
        public string City { get; set; }
        [DataMember]
        public string State { get; set; }

        [DataMember]
        public Nullable<int> LevelId { get; set; }
        [DataMember]
        public Nullable<int> SubjectId { get; set; }
        [DataMember]
        public Nullable<int> ExamMarks { get; set; }

    }
}