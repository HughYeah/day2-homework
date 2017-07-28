import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { EmployService } from '../employ.service'


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
  private location: Location) {
  }
  back(){
    this.location.back();
  }
  save(){
    this.employServ.users.push(this.employ)
    this.location.back();
  }
  ngOnInit() {
    this.getUserSubscribe = this.route.params.subscribe(params=>{
      this.getEmploy(params['sid']).then(employ=>{
      console.log(employ)
      this.employId = employ.index;
      this.employ = employ
    }).catch(err=>{
      console.log(err)
    })
    })
  }
  ngOnDestroy(){
    this.getUserSubscribe.unsubscribe();
  }

  getEmploy(id: any): Promise<any> {
    
    let p = new Promise((resolve,reject)=>{
      if(id=="new"){
        let employ = {name:""}
        this.isNew = true;
        resolve(employ)
      }
      let employ = this.employServ.users.find(item=>item.index == id)
      if(employ){
        resolve(employ)
      }else{
        reject("employ not found")
      }
    })
    return p
}

}
