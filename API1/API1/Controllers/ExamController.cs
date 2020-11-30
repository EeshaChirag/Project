using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using API1.Models;

namespace API1.Controllers
{
    public class ExamController : ApiController
    {
        OnlineExamSystemEntities db = new OnlineExamSystemEntities();

        [HttpGet]
        [Route("api/Subjects")]
        public IEnumerable<Subject> GetSubject()
        {
            return db.Subjects.ToList();
        }

        [HttpGet]
        [Route("api/Levels")]
        public IEnumerable<Level> GetLevel()
        {
            return db.Levels.ToList();
        }

        [HttpGet]
        [Route("api/Exam")]
        public IEnumerable<Exam> GetExam()
        {
            return db.Exams.ToList();
        }

        [HttpGet]
        [Route("api/User")]
        public IEnumerable<UserInfo> GetUser()
        {
            return db.UserInfoes.ToList();
        }


        //[ResponseType(typeof(Question))]
        //public IHttpActionResult GetQuestions(int sid, int lid)
        //{
        //    Subject subject = db.Subjects.Find(sid);
        //    Level level = db.Levels.Find(lid);
        //    if (subject != null && level != null)
        //    {
        //        var questions = (from q in db.Questions
        //                         join s in db.Subjects
        //                         on q.SubjectId equals s.SubjectId
        //                         join l in db.Levels
        //                         on q.LevelId equals l.LevelId
        //                         where s.SubjectId == sid && l.LevelId == lid
        //                         select new
        //                         {
        //                             QuestionId = q.QuestionId,
        //                             Question1 = q.Question1,
        //                             q.Option1,
        //                             q.Option2,
        //                             q.Option3,
        //                             q.Option4
        //                         }).OrderBy(y => Guid.NewGuid()).Take(10).ToArray();

        //        var updated = questions.AsEnumerable().Select(x => new
        //        {
        //            QuestionId = x.QuestionId,
        //            Question = x.Question1,
        //            Options = new string[] { x.Option1, x.Option2, x.Option3, x.Option4 }
        //        }).ToList();

        //        return Ok(updated);

        //    }
        //    else
        //    {
        //        return NotFound();
        //    }
        //}


        [ResponseType(typeof(Question))]
        [Route("api/Question1")]
        public IHttpActionResult GetQuestion1(int uid, int sid)
        {
            UserInfo userinfo = db.UserInfoes.Find(uid);
            Subject subject = db.Subjects.Find(sid);
            if(userinfo != null)
            {
                var level = (from e in db.Exams
                             where e.UserId == uid
                             select e.LevelId).FirstOrDefault();

                var marks=(from e in db.Exams
                          where e.SubjectId==sid &&
                          e.UserId==uid &&
                          e.LevelId==level
                          select e.ExamMarks).FirstOrDefault();

                if (subject != null && marks>=5)
                {
                    var questions = (from q in db.Questions
                                     join s in db.Subjects
                                     on q.SubjectId equals s.SubjectId 
                                     where q.SubjectId == sid && q.LevelId == 2
                                     select new
                                     {
                                         QuestionId = q.QuestionId,
                                         Question1 = q.Question1,
                                         q.Option1,
                                         q.Option2,
                                         q.Option3,
                                         q.Option4
                                     }).Take(10).ToArray();

                    var updated = questions.AsEnumerable().Select(x => new
                    {
                        QuestionId = x.QuestionId,
                        Question = x.Question1,
                        Options = new string[] { x.Option1, x.Option2, x.Option3, x.Option4 }
                    }).ToList();

                    return Ok(updated);

                }
                else
                {

                    var questions = (from q in db.Questions
                                     join s in db.Subjects
                                     on q.SubjectId equals s.SubjectId
                                     where q.SubjectId == sid && q.LevelId == 1
                                     select new
                                     {
                                         QuestionId = q.QuestionId,
                                         Question1 = q.Question1,
                                         q.Option1,
                                         q.Option2,
                                         q.Option3,
                                         q.Option4
                                     }).Take(10).ToArray();

                    var updated = questions.AsEnumerable().Select(x => new
                    {
                        QuestionId = x.QuestionId,
                        Question = x.Question1,
                        Options = new string[] { x.Option1, x.Option2, x.Option3, x.Option4 }
                    }).ToList();

                    return Ok(updated);
                }

            }
            else
            {
                if (subject != null)
                {
                    var questions = (from q in db.Questions
                                     join s in db.Subjects
                                     on q.SubjectId equals s.SubjectId
                                     where q.SubjectId == sid && q.LevelId==1
                                     select new
                                     {
                                         QuestionId = q.QuestionId,
                                         Question1 = q.Question1,
                                         q.Option1,
                                         q.Option2,
                                         q.Option3,
                                         q.Option4
                                     }).OrderBy(y => Guid.NewGuid()).Take(10).ToArray();

                    var updated = questions.AsEnumerable().Select(x => new
                    {
                        QuestionId = x.QuestionId,
                        Question = x.Question1,
                        Options = new string[] { x.Option1, x.Option2, x.Option3, x.Option4 }
                    }).ToList();

                    return Ok(updated);

                }
                else
                {
                    return NotFound();
                }
            }   
        }



        [ResponseType(typeof(Question))]
        [Route("api/Question2")]
        public IHttpActionResult GetQuestion2(int uid, int sid)
        {
            UserInfo userinfo = db.UserInfoes.Find(uid);
            Subject subject = db.Subjects.Find(sid);
            if (userinfo != null && subject!=null)
            {
                    var questions = (from q in db.Questions
                                     join s in db.Subjects
                                     on q.SubjectId equals s.SubjectId
                                     where q.SubjectId == sid && q.LevelId == 2
                                     select new
                                     {
                                         QuestionId = q.QuestionId,
                                         Question1 = q.Question1,
                                         q.Option1,
                                         q.Option2,
                                         q.Option3,
                                         q.Option4
                                     }).Take(10).ToArray();

                    var updated = questions.AsEnumerable().Select(x => new
                    {
                        QuestionId = x.QuestionId,
                        Question = x.Question1,
                        Options = new string[] { x.Option1, x.Option2, x.Option3, x.Option4 }
                    }).ToList();

                    return Ok(updated);

                }

            else
            {
                return NotFound();
            }
        }



        [HttpPost]
        [Route("api/Answers")]

        public HttpResponseMessage GetAnswers(int[] qIDs)
        {
            var result = db.Questions.AsEnumerable()
            .Where(y => qIDs.Contains(y.QuestionId))
            .OrderBy(x => { return Array.IndexOf(qIDs, x.QuestionId); })
            .Select(z => z.Answer)
            .ToArray();

            return this.Request.CreateResponse(HttpStatusCode.OK, result);
        }

    }
}
