import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycpageComponent } from './kycpage.component';

describe('KycpageComponent', () => {
  let component: KycpageComponent;
  let fixture: ComponentFixture<KycpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KycpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KycpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
