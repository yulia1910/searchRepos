import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-book-mark',
  templateUrl: './simple-book-mark.component.html',
  styleUrls: ['./simple-book-mark.component.css']
})
export class SimpleBookMarkComponent implements OnInit {
  @Input() name: string;
  @Input() url: string;
  @Input() id: number;
  @Input() isSelected: boolean;
  public search = 'Select';
  
  @Output() selectItem: EventEmitter<any> = new EventEmitter();

  constructor() { }
  
  ngOnInit(): void { }

  onSelectItem(e){
    console.log(e);
   // this.isSelected = true;
    this.selectItem.emit(e);
  }

}
