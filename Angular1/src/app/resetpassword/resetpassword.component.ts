import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExamService } from 'src/Service/exam.service';
import { Forgotmodel } from '../Model/forget.model';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  forgotModel: Forgotmodel = new Forgotmodel();
    forgotForm: FormGroup;
    submitted = false;
    emailId: string = '';
    isValidEmailId: boolean = false;
    errorMsg: string = '';

  constructor(private formBuilder: FormBuilder, private examservice: ExamService, private router: Router) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      OTP: ['', [Validators.required, Validators.minLength(6)]]
    },
      //{ validator: MustMatch('password', 'confirmPassword') }
    );
  }

  get f() { return this.forgotForm.controls; }



  ChangePassword(model) {
    this.submitted = true;
    if (this.forgotForm.invalid) {
      return;
    }
    model.EmailId = this.emailId;
    this.examservice.ChangePassword(model).subscribe((response: any) => {
      if (response == "Success") {
        alert("Password changed Successfully.");
        this.router.navigate(['login']);
      }
      else {
        this.errorMsg = response;
      }
    });
  }
    
  }


