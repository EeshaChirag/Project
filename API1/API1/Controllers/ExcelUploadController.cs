using API1.Models;
using ExcelDataReader;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace API1.Controllers
{
    public class ExcelUploadController : ApiController
    {
        private OnlineExamSystemEntities db = new OnlineExamSystemEntities();

        [Route("UploadExcel")]
        [HttpPost]

        public string UploadExcel()
        {

            string message = "";
            HttpResponseMessage result = null;
            var httpRequest = HttpContext.Current.Request;
                if (httpRequest.Files.Count > 0)
                {
                    HttpPostedFile file = httpRequest.Files[0];
                    Stream stream = file.InputStream;
                    IExcelDataReader reader = null;
                    if (file.FileName.EndsWith(".xls"))
                    {
                        reader = ExcelReaderFactory.CreateBinaryReader(stream);
                    }
                    else if (file.FileName.EndsWith(".xlsx"))
                    {
                        reader = ExcelReaderFactory.CreateOpenXmlReader(stream);
                    }
                    else
                    {
                        message = "This file format is not supported";
                    }
                    DataSet XLSRecords = reader.AsDataSet();
                    reader.Close();

                    var finalRecords = XLSRecords.Tables[0];

                    for (int i = 0; i < finalRecords.Rows.Count; i++)
                    {
                        Question objqtbl = new Question();

                        objqtbl.SubjectId = Convert.ToInt32(finalRecords.Rows[i][0]);
                        objqtbl.LevelId = Convert.ToInt32((finalRecords.Rows[i][1]));
                        objqtbl.Question1 = finalRecords.Rows[i][2].ToString();
                        objqtbl.Option1 = finalRecords.Rows[i][3].ToString();
                        objqtbl.Option2 = finalRecords.Rows[i][4].ToString();
                        objqtbl.Option3 = finalRecords.Rows[i][5].ToString();
                        objqtbl.Option4 = finalRecords.Rows[i][6].ToString();
                        objqtbl.Answer = Convert.ToInt32(finalRecords.Rows[i][7]);


                        db.Questions.Add(objqtbl);
                    }
                    int output = db.SaveChanges();
                    if (output > 0)
                    {
                        message = "Excel file has been successfully uploaded";
                    }
                    else
                    {
                        message = "Excel file uploaded has failed";
                    }


                }
                else
                {
                    result = Request.CreateResponse(HttpStatusCode.BadRequest);
                }
            return message;

        }
        // [Route("Questions")]
        [HttpGet]
        public List<Question> BindQuestion()
        {
            List<Question> lstQues = new List<Question>();
                lstQues = db.Questions.ToList();

            return lstQues;
        }
    }
}
