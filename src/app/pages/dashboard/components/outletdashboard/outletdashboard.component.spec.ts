import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletdashboardComponent } from './outletdashboard.component';

describe('OutletdashboardComponent', () => {
  let component: OutletdashboardComponent;
  let fixture: ComponentFixture<OutletdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutletdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
