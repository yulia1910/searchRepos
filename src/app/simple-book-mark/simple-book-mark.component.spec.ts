import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleBookMarkComponent } from './simple-book-mark.component';

describe('SimpleBookMarkComponent', () => {
  let component: SimpleBookMarkComponent;
  let fixture: ComponentFixture<SimpleBookMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleBookMarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleBookMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
