import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateconsumerbusinessComponent } from './createconsumerbusiness.component';

describe('CreateconsumerbusinessComponent', () => {
  let component: CreateconsumerbusinessComponent;
  let fixture: ComponentFixture<CreateconsumerbusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateconsumerbusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateconsumerbusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
