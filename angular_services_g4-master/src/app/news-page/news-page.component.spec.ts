import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPAgeComponent } from './news-page.component';

describe('NewsPAgeComponent', () => {
  let component: NewsPAgeComponent;
  let fixture: ComponentFixture<NewsPAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsPAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
