import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { AdminComponent } from './admin/admin.component';
import { AdminquesComponent } from './adminques/adminques.component';
import { AdminGuard } from './auth/admin.guard';
import { AuthGuard } from './auth/auth.guard';
import { StudentGuard } from './auth/student.guard';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { QuestionComponent } from './question/question.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { ReportComponent } from './report/report.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';
import { SelectexamComponent } from './selectexam/selectexam.component';
import { StudentComponent } from './student/student.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'selectexam',component:SelectexamComponent,canActivate:[StudentGuard]},
  {path:'result',component:ResultComponent,canActivate:[StudentGuard]},
  {path:'login',component:LoginComponent},
  {path:'question',component:QuestionComponent,canActivate:[StudentGuard]},
  {path:'aboutus',component:AboutusComponent},
  {path:'addquestion',component:AddquestionComponent,canActivate:[AdminGuard]},
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'registration',component:RegisterationComponent},
  {path:'report',component:ReportComponent,canActivate:[StudentGuard]},
  {path:'resetpassword',component:ResetpasswordComponent},
  {path:'search',component:SearchComponent,canActivate:[AdminGuard]},
  {path:'upload',component:UploadComponent,canActivate:[AdminGuard]},
  {path:'adminques',component:AdminquesComponent,canActivate:[AdminGuard]},
  {path:'student',component:StudentComponent},
  {path:'admin',component:AdminComponent},
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
