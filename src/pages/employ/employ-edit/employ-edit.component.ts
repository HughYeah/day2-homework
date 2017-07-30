import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { EmployService } from '../employ.service'
import {Parse} from "../../../cloud/parse"
import { Http } from '@angular/http'
@Component({
  selector: 'app-employ-edit',
  templateUrl: './employ-edit.component.html',
  styleUrls: ['./employ-edit.component.scss']
})
export class EmployEditComponent implements OnInit,OnDestroy {
  employId:string="";
  employ:any={
    name:""
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getUserSubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private employServ:EmployService,
  private location: Location,
  private http:Http) {
  }
  back(){
    this.location.back();
  }
  save(){
    //this.employServ.users.push(this.employ)
    this.location.back();
  }
  ngOnInit() {
        this.route.params.subscribe(params=>{
          let id = params['id']
          if(id=="new"){
            let employ = {name:""}
            this.isNew = true;
            this.employ = employ
          }else{
            let query = new Parse.Query("Employ",this.http)
            query.equalTo("index",id);
            query.find().subscribe(data=>{
           console.log(data)
          this.employ = data
        })
      }

    })
  }
  ngOnDestroy(){
    this.getUserSubscribe.unsubscribe();
  }


}
