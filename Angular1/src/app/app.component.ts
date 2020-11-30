import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from 'src/Service/navbar.service';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular1';
  loginsessionuser;
  loginsessionadmin;
  adminemail;
  username;


  constructor(private router:Router, private navbarService: NavbarService)
  {

  }

  ngDoCheck()
  {
    if(sessionStorage.getItem('userName'))
    {
      this.username= sessionStorage.getItem('userName');
      if(this.username=='Admin')
      {
        this.loginsessionadmin=true;
        this.adminemail=true;
      }
      else
      {
        this.loginsessionuser=true;
      }
    }
    else
    {
      this.loginsessionadmin=false;
      this.loginsessionuser=false;
    }
  }

logOut()
{
  
  sessionStorage.clear();
  localStorage.clear();
  this.router.navigate(['/home']);
}
}


