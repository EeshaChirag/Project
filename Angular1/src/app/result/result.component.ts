import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from 'src/Service/exam.service';
import { id } from '../Model/Id.model';
import { usid } from '../Model/usid.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  usidobject: usid=new usid();
 lid;

  constructor(public examservice:ExamService,private router:Router) 
  {
    this.examservice.correctAnswerCount = 0;
    this.lid=localStorage.getItem('LId');
   }

  ngOnInit() {

  if (parseInt(localStorage.getItem('qnProgress')) == 10) {
    this.examservice.seconds = parseInt(localStorage.getItem('seconds'));
    this.examservice.qnProgress = parseInt(localStorage.getItem('qnProgress'));
    this.examservice.qns = JSON.parse(localStorage.getItem('qns'));

    this.examservice.getAnswers().subscribe(
      (data: any) => {
        
        this.examservice.correctAnswerCount = 0;
        this.examservice.qns.forEach((e, i) => {
          if (e.answer == data[i])
            this.examservice.correctAnswerCount++;
          e.correct = data[i];
        });
      }
    );
  }
  else
    this.router.navigate(['/selectexam']);
}



/*OnSubmit() {
  this.examservice.submitScore().subscribe(() => {
    this.restart();
  });
}

restart() {
  localStorage.setItem('qnProgress', "0");
  localStorage.setItem('qns', "");
  localStorage.setItem('seconds', "0");
  this.router.navigate(['/selectexam']);
}*/

OnSubmit() 
{
  this.examservice.submitScore().subscribe(() => {;
  });
}

Onnext()
{
  localStorage.setItem('qnProgress', "0");
  localStorage.setItem('qns', "");
  localStorage.setItem('seconds', "0");
  this.router.navigate(['/selectexam']);
  this.usidobject.uid=JSON.parse(sessionStorage.getItem('userId'));
  this.usidobject.sid=JSON.parse(localStorage.getItem('SId'));
    let id = 2;
    localStorage.LId = JSON.stringify(id);
    this.examservice.getQuestion2(this.usidobject).subscribe(
      (data: any) => {
        this.examservice.qns = data;
        this.router.navigate(['/question']);
        this.startTimer();
    }
  );
}

startTimer() {
  this.examservice.timer = setInterval(() => {
    this.examservice.seconds++;
    localStorage.setItem('seconds', this.examservice.seconds.toString());
  }, 1000);
}


restart() {
  localStorage.setItem('qnProgress', "0");
  localStorage.setItem('qns', "");
  localStorage.setItem('seconds', "0");
  this.router.navigate(['/selectexam']);
}

}

