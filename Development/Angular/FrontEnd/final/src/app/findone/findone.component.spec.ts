import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindoneComponent } from './findone.component';

describe('FindoneComponent', () => {
  let component: FindoneComponent;
  let fixture: ComponentFixture<FindoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
