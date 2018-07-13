import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-Child',
  templateUrl: './Child.component.html',
  styleUrls: ['./Child.component.css']
})
export class ChildComponent implements OnInit 
{
   @ Input() public parentData;
 
  @Output() public event = new EventEmitter();
 
  public Demo()
  {
    this.event.emit('Hello I Am child Component');
  }
  constructor() { }

  ngOnInit() {
  }

}
