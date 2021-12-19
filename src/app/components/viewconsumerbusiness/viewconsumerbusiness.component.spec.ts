import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewconsumerbusinessComponent } from './viewconsumerbusiness.component';

describe('ViewconsumerbusinessComponent', () => {
  let component: ViewconsumerbusinessComponent;
  let fixture: ComponentFixture<ViewconsumerbusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewconsumerbusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewconsumerbusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
