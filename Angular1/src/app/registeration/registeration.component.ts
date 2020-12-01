import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExamService } from 'src/Service/exam.service';
import { MustMatch } from '../Model/MustMatch';
import{Register} from '../Model/register.model';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  data = false; 
  message:string; 
  registerform:FormGroup;
  submitted = false;

  constructor(private formBuilder:FormBuilder, private examservice:ExamService) { }

  ngOnInit() {
    this.registerform = this.formBuilder.group({
      UserName:['', Validators.required],
      UserEmail:['', [Validators.required, Validators.email]],
      UserPassword:['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', Validators.required],
      MobileNo:['',[Validators.required,Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]],
      DateofBirth:['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      City:['', Validators.required],
      State:['', Validators.required],
      Qualification:['', Validators.required],
      YearofCompletion:['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
   },{
    validator:MustMatch('UserPassword','ConfirmPassword')
   });
  }

  get f()
  {
    return this.registerform.controls;
  }

  /*onSubmit()  
  {    
    if (this.registerform.invalid)
    {
      const user = this.registerform .value;   
      console.log(user);
     
      this.Createuser(user); 
    }
    alert ('Successfully registered!!');
    
       
  } */  

  onSubmit(){
    this.submitted = true;

    if(this.registerform.invalid)
    {
      return;
    }
    const user = this.registerform .value;   
    this.Createuser(user);
    alert ('Successfully registered!!');
  }
  
  Createuser(register:RegisterationComponent)    
  {   
    debugger;
  this.examservice.CreateUser(register).subscribe(    
    ()=>    
    {    
      this.data = true;    
      //this.message = 'Data saved Successfully';    
      this.registerform.reset();    
    });


}

}
