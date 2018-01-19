import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
 
	public reviewArray: Array<any> = [{name:"Prabhu",email:"prabhu@utkrishta.com",comment:"asda asd asdad ad asd a asd"},
									{name:"Perumal",email:"perumal@utkrishta.com",comment:"asda asd asdad ad asd a asd"},
									{name:"Sudharsan",email:"ram@utkrishta.com",comment:"asda asd asdad ad asd a asd"}];
    public newReview: any = {};

    addFieldValue() {
        this.reviewArray.push(this.newReview)
        this.newReview = {};
    }
	constructor(){}

	  ngOnInit() {}
 /*
	
	items:[{
		this.name : string,
		this.email : string,
		this.comment : string
	}];
	

	  constructor() { 
		this.items = [{name:"Prabhu",email:"prabhu@utkrishta.com",comment:"asda asd asdad ad asd a asd"},
	{name:"Perumal",email:"perumal@utkrishta.com",comment:"asda asd asdad ad asd a asd"},
	{name:"Sudharsan",email:"ram@utkrishta.com",comment:"asda asd asdad ad asd a asd"}
	] 
	 
	  }
	      
  ngOnInit() {
	   
  }
   addItems() {
 
 this.items.push{{
	 name:this.name;
 email:this.email;
 comment:this.comment;
 }} ;
 
 this.name="";
 this.email="";
 this.comment="";
 
 }
	*/
  

};
