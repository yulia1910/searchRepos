import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterEvent, NavigationEnd } from '@angular/router';
import { ConfigService } from './config.service';
import { isNullOrUndefined } from 'util';
import { BookMark, Item, Card } from "./bookMark.model";
import {catchError, tap, map, mergeMap} from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ConfigService]
})
export class AppComponent {
  title = 'bookMark';
  firstTitle = 'Search repository'
  public placeHolder = "Enter KeyWord";
  public Search = "Search Repository";
  public NameRepos = "Name Repository";
  items: Card[];
  selectedItems: Card[];
  isShow = false;
  itemsToShow = 4;
  firstIndex = 0;
  lastIndex = 4;
  visibleItemsArr: Card[];
  numCard: number;
  isDisableNext = false;
  isDisablePrev = true;
  show="Show All Selected Items";
  disabled = false;
  name = new FormControl('');

  private subscripsion: Subscription;

  constructor(private configService : ConfigService){}

  ngOnInit(){
  }

  searchBooks() {
    if(this.name.value != "" &&this.name.value != null ){
      this.subscripsion = this.configService.getConfig(this.name.value)
      .subscribe((data: BookMark ) => {
        this.items = data.items.map( (book: Item ) => {
          return {
            name: book.name,
            urlOwner: book.owner.avatar_url,
            id: book.id,
            isSelected: false
          };
        });
        this.firstIndex = 0;
        this.lastIndex = this.itemsToShow;
        this.numCard = this.items.length;
        if( this.numCard < this.itemsToShow ){
          this.lastIndex = this.numCard;
        }
        this.visibleItemsArr = this.visibleItems();
        this.selectedItems = [];
        this.isShow = true;
        this.disabled = false;
        this.show="Show All Selected Items";
console.log(this.items)

      });
    }
  }

  next(){
    if( this.lastIndex < this.numCard ) {
      this.lastIndex = this.lastIndex + 1;
      this.firstIndex = this.firstIndex + 1;
      this.visibleItemsArr =  this.visibleItems();
    }
  }

  prev(){
    if( this.firstIndex > 0) {
      this.lastIndex = this.lastIndex - 1;
      this.firstIndex = this.firstIndex - 1;
      this.visibleItemsArr =  this.visibleItems();
    }
  }

  visibleItems(){
    return this.items.slice(this.firstIndex, this.lastIndex);
  }

  selectItemEvent(e){
    let item = this.items.find(i => i.id == e);
    item.isSelected = true;
    this.items = [...this.items, item];
    this.selectedItems.push(item); 
  }

  showAll(){
    this.firstIndex = 0;
    this.numCard = this.selectedItems.length;
    if( this.selectedItems.length < this.itemsToShow ){
      this.lastIndex = this.selectedItems.length;
    } else {
      this.lastIndex = this.itemsToShow;
    }
    this.items = [...this.selectedItems];

    this.visibleItemsArr = this.selectedItems.slice(this.firstIndex, this.lastIndex);
    this.show = "Your Selected Items";
    this.disabled = true;
  }

  ngOnDestroy(){
    this.subscripsion.unsubscribe();
  }
}
