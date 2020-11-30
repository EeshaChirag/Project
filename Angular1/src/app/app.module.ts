import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectexamComponent } from './selectexam/selectexam.component';
import { ResultComponent } from './result/result.component';
import { LoginComponent } from './login/login.component';
import { ExamService } from 'src/Service/exam.service';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { QuestionComponent } from './question/question.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ReportComponent } from './report/report.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarService } from 'src/Service/navbar.service';
import { QuestionService } from 'src/Service/question.service';
import { AuthGuard } from './auth/auth.guard';
import { UploadComponent } from './upload/upload.component';
import { AdminquesComponent } from './adminques/adminques.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectexamComponent,
    ResultComponent,
    LoginComponent,
    HomeComponent,
    SearchComponent,
    QuestionComponent,
    AboutusComponent,
    ReportComponent,
    RegisterationComponent,
    PagenotfoundComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,
    AddquestionComponent,
    StudentComponent,
    AdminComponent,
    UploadComponent,
    AdminquesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    LoginComponent,
    StudentComponent,
    AdminComponent
  ],
  providers: [ExamService,NavbarService,QuestionService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
