import { Component, OnInit } from '@angular/core';
import { ExamService } from 'src/Service/exam.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private examservice:ExamService) 
  { 
  }

  ngOnInit(): void {
  }
  report()
  {
    var uid=JSON.parse(sessionStorage.getItem('userId'));
    this.examservice.Report(uid).subscribe(
      (data: any) => {
        this.report = data;
    }
  );
  }

}
