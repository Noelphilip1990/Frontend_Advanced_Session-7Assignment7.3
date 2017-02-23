import { Component } from '@angular/core';
import { HighlightDirective } from './Highlight';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Assignament!';
	role: string;

 empList: any = [
{name:"Abraham", role: "Admin", companyName: "AcadGild"},
{ name: "Adam", role: "Admin", companyName: "IBM" },
{ name: "Jose", role: "Supervisor", companyName: "Infosys" },
{ name: "Bill", role: "Super admin", companyName: "IBM" },
{ name: "Jack", role: "Admin", companyName: "HP" },
{ name: "Burney", role: "Member", companyName: "HP" },
{ name: "Justin", role: "Member", companyName: "HP" },
{ name: "Bob", role: "Supervisor", companyName: "HP" },
	 ];
 constructor(private router: Router) { }
 /* 
public  Hello(role) {
	this.router.navigate(['/info',role]);
  }*/

}
