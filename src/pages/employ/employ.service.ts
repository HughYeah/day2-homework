import { Injectable } from "@angular/core";

@Injectable()
export class EmployService{
    isLogined:boolean = false;
    users: Array < any > = [{
    'index': 1,
     'name':'Hugh',
     'Mobile': '1234566666',
     'Email': 'aaa@qq.com'
    },
   {
    'index': 2,
     'name':'Hugh1',
     'Mobile': '1234566666',
     'Email': 'aaa@qq.com'
    },
    {
    'index': 3,
     'name':'Hugh2',
     'Mobile': '1234566666',
     'Email': 'aaa@qq.com'
    },
    {
    'index': 4,
     'name':'Hugh3',
     'Mobile': '1234566666',
     'Email': 'aaa@qq.com'
    },
    {
    'index': 5,
     'name':'Hugh4',
     'Mobile': '1234566666',
     'Email': 'aaa@qq.com'
    }

  ];

    constructor(){

    }

    getUsers(){
        return this.users;
    }

}

