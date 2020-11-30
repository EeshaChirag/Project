import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ExamService } from 'src/Service/exam.service';
import { Forgotmodel } from '../Model/forget.model';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  forgotModel: Forgotmodel = new Forgotmodel();
  forgotForm: FormGroup;
  submitted = false;
  emailId: string = '';
  isValidEmailId: boolean = false;
  errorMsg: string = '';

  constructor(private examservice:ExamService,private router:Router) { }

  ngOnInit(): void {
    this.VerifyEmail();
  }

  VerifyEmail() {
    this.examservice.ForgotPassword(this.emailId).subscribe((response: any) => {
      if (response == "Success") {
        this.isValidEmailId = true;
        this.errorMsg = '';
        debugger;
        this.router.navigate(['/resetpassword']);
      }
      else {
        this.errorMsg = 'Invalid User';
      }
    });
  }

}
