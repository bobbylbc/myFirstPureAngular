import {Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import {trigger, style, transition, animation, keyframes, query, stagger, animate} from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          
          ]))]), {optional: true}),
        
        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
          
          ]))]), {optional: true})
      ])

    ])

  ]

})
export class HomeComponent implements OnInit {

  itemCount: number;

  btnText: string = 'Add an item';
  goalText: string = 'My first life goal';
  goals: any;

  constructor(private _data: DataService) {
    
  
  }

//  Initiated when code loads
  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this._data.changeGoal(this.goals);
    this.itemCount = this.goals.length;
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

   removeItem(i) {
     this.goals.splice(i, 1);
   }
}
