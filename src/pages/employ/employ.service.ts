import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http"

import { Location } from '@angular/common';


import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/zip';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

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

    constructor(private http:Http,private location:Location){
    }

     getUsers():Observable<any[]>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://localhost:1337/parse"
        let path = "/classes/"
        let className = "Employ"
        let url = serverURL+path+className

        let headers:Headers = new Headers({
            "X-Parse-Application-Id":"dev",
            "X-Parse-Master-Key":"angulardev",
            // "X-Parse-Session-Token":"r:059bbbebdc201de090f16fe9716b43bf",
            "Content-Type":"application/json; charset=utf-8"
        })

        // 2. 发起HTTP GET查询请求
        return this.http.get(url,{ headers:headers })
        .map(data=>data.json())
        .map(data=>data.results)        
    }

     getUserById(objectId):Observable<any>{
        // 1. 拼接HTTP请求所需的URL和Headers
        let serverURL = "http://localhost:1337/parse"
        let path = "/classes/"
        let className = "Employ"
        let url = serverURL+path+className+"/index/:"+objectId

        let headers:Headers = new Headers({
            "X-Parse-Application-Id":"dev",
            "X-Parse-Master-Key":"angulardev",
            // "X-Parse-Session-Token":"r:059bbbebdc201de090f16fe9716b43bf",
            "Content-Type":"application/json; charset=utf-8"
        })

        // 2. 发起HTTP GET查询请求
        return this.http.get(url,{ headers:headers })
        .map(data=>data.json())
    }
   
}

