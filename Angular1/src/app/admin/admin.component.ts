import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExamService } from 'src/Service/exam.service';
import { login } from '../Model/login.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
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

  doLogin()
  {
    this.examService.ALogin(this.loginobject).subscribe((response: any) => {
      if (response.IsValidUser) {
        sessionStorage.setItem('email', this.loginobject.email);
        sessionStorage.setItem('userName', response.AdminName);
        this.router.navigate(['/adminques']);
      }
      else {
        this.err = 'Invalid username or password!!';
      }
    });
  }

  ngOnInit(): void {
  }

}
