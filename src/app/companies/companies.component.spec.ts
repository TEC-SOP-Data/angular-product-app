import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyComponent } from '../companies/companies.component';

describe('CompaniesComponent', () => {
  let component: CompanyComponent;
  let fixture: ComponentFixture<CompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
