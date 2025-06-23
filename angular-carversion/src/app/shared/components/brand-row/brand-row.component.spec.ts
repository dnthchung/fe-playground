import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandRowComponent } from './brand-row.component';

describe('BrandRowComponent', () => {
  let component: BrandRowComponent;
  let fixture: ComponentFixture<BrandRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrandRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
