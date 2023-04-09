import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  
  messageFromChild:any;
  constructor() { 
  }
  
  @ViewChild(ChildComponent) child!: ChildComponent;
  ngOnInit(): void {
  }

  ngAfterViewInit()
  {
    this.child.sayWelcome();
  }

}
