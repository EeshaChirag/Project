import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import{Question} from 'src/app/Model/question.model';
import { QuestionService } from 'src/Service/question.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  @ViewChild('fileInput') fileInput;  
  message: string;  
  question: Observable<Question[]>;

  constructor(private http:HttpClient, private questionservice:QuestionService) 
  { 

  }

  ngOnInit(): void 
  {
    this.loadAllQuestion();
  }

   
  loadAllQuestion() 
  {  
    this.question = this.questionservice.BindQuestion();  
  }  
  uploadFile() {  
    let formData = new FormData(); 

   
    formData.append('upload', this.fileInput.nativeElement.files[0])  
  
    this.questionservice.UploadFormExcel(formData).subscribe(result => {  
      this.message = result.toString();  
      this.loadAllQuestion();  
    });   
  
  }  

}
