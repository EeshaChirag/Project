import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ExamService} from 'src/Service/exam.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private examService: ExamService) 
  { 
    
    
  }




  ngOnInit() 
  {
    
  }

  loginUser() 
  {
    debugger;
    this.router.navigate(['student']);
  }
 
  loginAdmin() 
  {
    this.router.navigate(['admin']);
  }

}
