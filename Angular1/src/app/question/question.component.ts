import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ExamService } from 'src/Service/exam.service';
import { id } from '../Model/Id.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  idobject: id=new id();

  constructor(private router:Router,private formbuilder:FormBuilder,private httpService:HttpClient,
    public examservice:ExamService) 
  {
    
  }

  ngOnInit()
  {
    
  }
  

  


Answer(qID, choice) 
{
  this.examservice.qns[this.examservice.qnProgress].answer = choice;
  localStorage.setItem('qns', JSON.stringify(this.examservice.qns));
  this.examservice.qnProgress++;
  localStorage.setItem('qnProgress', this.examservice.qnProgress.toString());
  if (this.examservice.qnProgress == 10) 
  {
    clearInterval(this.examservice.timer);
    this.router.navigate(['/result']);
  }
}

}
