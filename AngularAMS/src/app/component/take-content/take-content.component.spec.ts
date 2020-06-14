import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeContentComponent } from './take-content.component';

describe('TakeContentComponent', () => {
  let component: TakeContentComponent;
  let fixture: ComponentFixture<TakeContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
