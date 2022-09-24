import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateDataComponent } from './certificate-data.component';

describe('CertificateDataComponent', () => {
  let component: CertificateDataComponent;
  let fixture: ComponentFixture<CertificateDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
