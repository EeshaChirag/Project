import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExamService } from 'src/Service/exam.service';
import { search } from '../Model/search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  subject:string[];
  level;
  result;
  sobject:search=new search()
  SForm:FormGroup;

  constructor(private router:Router,private formbuilder:FormBuilder,private httpService:HttpClient,public examservice:ExamService) 
  { 
    this.SForm = new FormGroup({
      sid: new FormControl(null, [Validators.required]),
      lid: new FormControl(null, [Validators.required]),
      marks: new FormControl(null, [Validators.required])
      //LId: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() 
  {
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

  Search()
{
  this.examservice.getSearch(this.sobject).subscribe(
    (data: any) => {
      this.result = data;
  }
  );
}




}
