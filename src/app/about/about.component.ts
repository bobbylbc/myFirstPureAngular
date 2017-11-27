import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  goals: any;
  
  constructor(private _data: DataService,
    private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(res => console.log(res.id));
  
   }

//  Initiated when code loads
  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this._data.changeGoal(this.goals);
  }
  
  sendMeHome() {
    this.router.navigate(['']);
  }

}
