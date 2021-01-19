import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  secondHalf = false;
  firstHalf = true;
  constructor() { }

  ngOnInit(): void {
  }

  switchSecondHalf(){
    this.secondHalf=true;
    this.firstHalf=false;
  }
}
