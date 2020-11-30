import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminques',
  templateUrl: './adminques.component.html',
  styleUrls: ['./adminques.component.css']
})
export class AdminquesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  file()
  {
    this.router.navigate(['/upload']);
  }

  addques()
  {
    this.router.navigate(['/addquestion']);
  }

}
