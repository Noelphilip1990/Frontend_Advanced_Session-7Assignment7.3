import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-infouser',
  templateUrl: './infouser.component.html',
  inputs: ['empList'],
  styleUrls: ['./infouser.component.css']
})
export class InfouserComponent implements OnInit {
	public rolls: string;
	emplist: any = [];
	constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
  	this.route.params.subscribe(params=>{
			this.rolls = params['role'];
			
  	})
  }

}
