using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using API1.Models;

namespace API1.Controllers
{
    public class UserInfoesController : ApiController
    {
        private OnlineExamSystemEntities db = new OnlineExamSystemEntities();

        // GET: api/UserInfoes
        public IQueryable<UserInfo> GetUserInfoes()
        {
            return db.UserInfoes;
        }

        

        // POST: api/UserInfoes
        [ResponseType(typeof(UserInfo))]
        public IHttpActionResult PostUserInfo(UserInfo userInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.UserInfoes.Add(userInfo);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = userInfo.UserId }, userInfo);
        }

        [HttpGet]
        [Route("api/Report")]
        public IHttpActionResult Report(int uid)
        {
            var userid=(from e in db.Exams
                       where e.UserId==uid
                       select e.UserId).FirstOrDefault();

            if(userid!=null)
            {
                var data = (from e in db.Exams
                            join s in db.Subjects
                            on e.SubjectId equals s.SubjectId
                            join l in db.Levels
                            on e.LevelId equals l.LevelId
                            where e.UserId == uid
                            select new
                            {
                                subjectname = s.SubjectName,
                                levelname = l.LevelName,
                                marks = e.ExamMarks
                            }).ToList();
                return Ok(data);
            }
            return Ok();
        }

    }
}