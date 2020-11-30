import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from 'src/Service/exam.service';
import{login} from 'src/app/Model/login.model'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  loginobject: login = new login();
  err: string;
  loginForm: FormGroup;

  constructor(private router: Router, private examService: ExamService) 
  { 
    this.loginForm = new FormGroup({
      mailid: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });
  }

  doLogin() {
    this.examService.Login(this.loginobject).subscribe((response: any) => {
      if (response.IsValidUser) {
        sessionStorage.setItem('email', this.loginobject.email);
        sessionStorage.setItem('userId', response.UserId);
        sessionStorage.setItem('userName', response.UserName);
        this.router.navigate(['/selectexam']);
      }
      else {
        this.err = 'Invalid username or password!!';
      }
    });
  }

  ngOnInit(): void {
  }

}
