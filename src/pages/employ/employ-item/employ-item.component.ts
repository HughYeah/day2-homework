import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employ-item',
  templateUrl: './employ-item.component.html',
  styleUrls: ['./employ-item.component.scss']
})
export class EmployItemComponent implements OnInit {
  @Input() user:any
  @Output() userClick = new EventEmitter<any>();
  constructor() { 
  }
  onUserClick(){
    this.userClick.emit(this.user)
  }
  ngOnInit() {
  }
}
