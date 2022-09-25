import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuecertComponent } from './issuecert.component';

describe('IssuecertComponent', () => {
  let component: IssuecertComponent;
  let fixture: ComponentFixture<IssuecertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuecertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssuecertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
