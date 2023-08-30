import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{
  
  ngOnInit(): void {
  }
  
  @Input()
  Push(){ this.filter = !this.filter;
    console.log(this.Push)
  }
  
   
}
