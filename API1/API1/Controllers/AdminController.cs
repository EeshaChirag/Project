using API1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace API1.Controllers
{
    public class AdminController : ApiController
    {
        private OnlineExamSystemEntities db = new OnlineExamSystemEntities();

        [HttpGet]
        [Route("api/Search")]
        public IHttpActionResult Search(int sid, int lid, int marks)
        {

            if(sid != 0 && lid != 0 && marks != 0)
            {
                var data = (from e in db.Exams
                           join u in db.UserInfoes
                           on e.UserId equals u.UserId
                           where e.SubjectId == sid &&
                           e.LevelId == lid &&
                           e.ExamMarks >= marks
                           select new
                           {
                               Name = u.UserName,
                               EmailId = u.UserEmail,
                               MobileNo = u.MobileNo,
                               State = u.State,
                               City = u.City,
                               Marks=e.ExamMarks
                           }).ToList();

                return Ok(data);

            }
            else
            {
                return Ok("Please Enter all the details");
            }
            
        }
    }
}