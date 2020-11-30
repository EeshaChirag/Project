import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterationComponent } from 'src/app/registeration/registeration.component';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  qns: any[];
  seconds: number;
  timer;
  qnProgress: number;
  correctAnswerCount: number = 0;
  header:any;
  Url:string;
  token : string;  
 

  constructor(private http:HttpClient) 
  {
    

    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings); 
  }

  displayTimeElapsed() 
  {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }

 /* getSubject()
  {
    this.http.get('https://localhost:44380/api/Subjects'); 
  }

  getLevel()
  {
    this.http.get('https://localhost:44380/api/Levels').subscribe((data) => {this.level = data;}); 
  }*/



  /*getQuestions(sid) 
  {
    return this.http.get("https://localhost:44380/api/Exam/"+sid);
  }*/

  /*getQuestions(model) 
  {
    return this.http.get('https://localhost:44380/api/Exam?sid=' + model.sid + '&lid=' + model.lid);
  }*/

  /*getQuestion1() 
  {
    var model={
      UserId:JSON.parse(sessionStorage.getItem('userId')),
      SubjectId:JSON.parse(localStorage.getItem('SId'))
    }
    return this.http.get("https://localhost:44380/api/Question1",model);
  }

  getQuestion2() 
  {
    var model={
      UserId:JSON.parse(sessionStorage.getItem('userId')),
      SubjectId:JSON.parse(localStorage.getItem('SId'))
    }
    return this.http.get("https://localhost:44380/api/Question1",model);
  }*/

  getQuestion1(model)
  {
    return this.http.get('https://localhost:44380/api/Question1?uid=' + model.uid + '&sid=' + model.sid);
  }

  getQuestion2(model)
  {
    return this.http.get('https://localhost:44380/api/Question2?uid=' + model.uid + '&sid=' + model.sid);
  }

  getAnswers() 
  {
    var body = this.qns.map(x => x.QuestionId);
    return this.http.post("https://localhost:44380/api/Answers", body);
  }

  Login(model) 
  {
    return this.http.get('https://localhost:44380/api/Login?email=' + model.email + '&password=' + model.password);
  }

  ALogin(model) 
  {
    return this.http.get('https://localhost:44380/api/AdminLogin?email=' + model.email + '&password=' + model.password);
  }

  submitScore() 
  {
    var body = 
    {
    UserId:JSON.parse(sessionStorage.getItem('userId')),
    SubjectId:JSON.parse(localStorage.getItem('SId')),
    LevelId:JSON.parse(localStorage.getItem('LId')),
    ExamMarks:this.correctAnswerCount}
    return this.http.post("https://localhost:44380/api/Login", body);
  }

  getSearch(model)
  { 
   return this.http.get('https://localhost:44380/api/Search?sid='+model.sid+'&lid='+model.lid+'&marks='+model.marks); 
  }


  
  CreateUser(register:RegisterationComponent):Observable<RegisterationComponent> 
   {  
     debugger;
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}; 
    return this.http.post<RegisterationComponent>('https://localhost:44380/api/UserInfoes/', register)
   }


   ForgotPassword(email){
    return this.http.get('https://localhost:44380/api/OTP/VerifyEmail?email=' + email);
  }
  ChangePassword(model){
    return this.http.post('https://localhost:44380/api/OTP/ChangePassword', model);
  }

  Report(uid)
  {
    return this.http.get('https://localhost:44380/api/Report?uid='+uid)
  }


}

