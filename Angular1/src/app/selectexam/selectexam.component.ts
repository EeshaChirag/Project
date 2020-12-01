import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ExamService } from 'src/Service/exam.service';
import { id } from '../Model/Id.model';
import { usid } from '../Model/usid.model';

@Component({
  selector: 'app-selectexam',
  templateUrl: './selectexam.component.html',
  styleUrls: ['./selectexam.component.css']
})
export class SelectexamComponent implements OnInit {
  //subjectform:FormGroup;
  subject:string[];
  level;
  //idobject: id=new id();
  usidobject:usid=new usid();
  IdForm:FormGroup;




  constructor(private router:Router,private formbuilder:FormBuilder,private httpService:HttpClient,public examservice:ExamService) 
  { 

  this.IdForm = new FormGroup({
    SId: new FormControl(null, [Validators.required])
    //LId: new FormControl(null, Validators.required)
  });
  }

  ngOnInit() 
  {
    this.examservice.seconds = 0;
    this.examservice.qnProgress = 0;
    this.getSubject();
    this.getLevel(); 
  }

  getSubject()
  {
    this.httpService.get('https://localhost:44380/api/Subjects').subscribe(data => {this.subject = data as string [];}); 
  }

  getLevel()
  {
    this.httpService.get('https://localhost:44380/api/Levels').subscribe((data) => {this.level = data;}); 
  }

  /*Submit()
  {
    localStorage.setItem('SId',this.idobject.sid.toString());
    localStorage.setItem('LId',this.idobject.lid.toString());
    this.examservice.getQuestions(this.idobject).subscribe(
      (data: any) => {
        this.examservice.qns = data;
        this.router.navigate(['/question']);
        this.startTimer();
      }
    );
  }*/

  Submit()
  {
    this.usidobject.uid=JSON.parse(sessionStorage.getItem('userId'));
    localStorage.setItem('SId',this.usidobject.sid.toString());
    //localStorage.setItem('SId',this.usidobject.sid.toString());
    let id = 1;
    localStorage.LId = JSON.stringify(id);
    this.examservice.getQuestion1(this.usidobject).subscribe(
      (data: any) => {
        this.examservice.qns = data;
        this.router.navigate(['/question']);
        this.startTimer();
      }
    );
  }

  startTimer() {
    this.examservice.timer = setInterval(() => {
      this.examservice.seconds++;
      localStorage.setItem('seconds', this.examservice.seconds.toString());
    }, 1000);
  }

  

}
