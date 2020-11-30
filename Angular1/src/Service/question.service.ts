import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{Question} from 'src/app/Model/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
    correctAnswerCount: any;

  constructor(private http:HttpClient) { }

  readonly uri = "https://localhost:44380/api/Questions/";

  url="https://localhost:44380/";

  getQues() {
      return this.http.get(this.uri);
  }

  insertQues(ques) {
      return this.http.post(this.uri, ques);
  }

  
  deleteQues(id) {
      return this.http.delete(this.uri + id);
  }
    
  public getquesbyid(id)
  {
  //debugger;
      return this.http.get(this.uri+id);
  }

  public updateQues(question:Question)
  {
      debugger;
      console.log(question);
      return this.http.put(this.uri+question.QuestionId,question)

  }


  
  
  UploadFormExcel(formData: FormData) 
  {  
    let headers = new HttpHeaders();  
  
    headers.append('Content-Type', 'multipart/form-data');  
    headers.append('Accept', 'application/json');  
  
    const httpOptions = { headers: headers };  
  
    return this.http.post(this.url + '/UploadExcel', formData, httpOptions)  
  }  
  BindQuestion(): Observable<Question[]> {  
    
    return this.http.get<Question[]>(this.url + 'api/ExcelUpload');
    
  }
}
