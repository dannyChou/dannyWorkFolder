import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-demo',
  templateUrl: './my-demo.component.html',
  styleUrls: ['./my-demo.component.css']
})
export class MyDemoComponent implements OnInit {

  myname: string;

  myData: string = "My Data ";
  isavailable = true;

  isDisabled = true;
  

  title = 'Angular 7 Project!'; 
  todaydate = new Date(); 
  jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}}; 
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", 
     "Sept", "Oct", "Nov", "Dec"]; 

  constructor() {
    this.myname = "Test Sub Component";
   }

  ngOnInit() {
  }

  public getVal() {
    return "6666";
  }
  
  public changeDisabled(){
    this.isDisabled = !this.isDisabled;
    alert('changeDisabled,changeDisabled=' + this.isDisabled );
  }

}
