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
    public class LoginController : ApiController
    {
        
        OnlineExamSystemEntities db = new OnlineExamSystemEntities();

        [HttpGet]
        public IHttpActionResult Login(string email, string password)
        {
            string message = "";

            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}
            try
            {
                var isValidUser = false;
                var user = db.UserInfoes.Where(w => w.UserEmail == email && w.UserPassword == password).FirstOrDefault();
                if (user != null)
                    isValidUser = true;

                var model = new
                {
                    IsValidUser = isValidUser,
                    UserId = user != null ? user.UserId : 0,
                    UserName = user != null ? user.UserName : ""
                };
                return Ok(model);
            }
            catch(Exception)
            {
                message = "Please enter the valid input";
                return Ok(message);
            }
            
        }

        [HttpGet]
        [Route("api/AdminLogin")]
        public IHttpActionResult AdminLogin(string email, string password)
        {
            string message = "";
            try 
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                var isValidUser = false;
                var user = db.Admins.Where(w => w.AdminEmail == email && w.AdminPassword == password).FirstOrDefault();
                if (user != null)
                    isValidUser = true;

                var model = new
                {
                    IsValidUser = isValidUser,
                    AdminName = user != null ? "Admin" : ""
                };
                return Ok(model);
            }
            

            catch (Exception)
            {
                message = "Please enter the valid input";
                return Ok(message);
            }
        }



        [ResponseType(typeof(Exam))]
        public IHttpActionResult PostExam(Exam result)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Exams.Add(result);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = result.ExamId }, result);
        }
    }
}

