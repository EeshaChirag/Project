import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/Service/question.service';
import{Question} from 'src/app/Model/question.model';
import { Route } from '@angular/compiler/src/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {
  questions: any;
  quesform:FormGroup;

  constructor(private questionservice:QuestionService) 
  { 
    this.fetchQues();
  }

  ngOnInit() {

    
  }

  
  fetchQues()
  {
    this.questionservice.getQues().subscribe((data) =>{
      this.questions=data;
      console.log(data);
    })
  }

  ques:any={};
  result;
  addQues()
  {
    debugger;
    this.questionservice.insertQues(this.ques).subscribe((data)=>{this.result = data;})
    //window.alert("Question Added!!!")
    this.quesform.reset();
    this.fetchQues();
  }
  
  removeQues(id)
  {
    this.questionservice.deleteQues(id).subscribe((data)=>{this.result=data;})
    window.alert("Question Deleted!!")
    this.fetchQues();
  }

  getparticularQues(id)
  {
   this.questionservice.getquesbyid(id).subscribe((data)=>{ this.ques=data;console.log(this.ques)})
 
  }


  updateparticularQues(ques:Question)
  {
    this.questionservice.updateQues(ques).subscribe((data)=>{this.result=data;console.log(this.ques)})
    window.alert("Question Updated!!!")
     
    this.fetchQues();
  }

}
