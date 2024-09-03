import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCategogyComponent } from './details-categogy.component';

describe('DetailsCategogyComponent', () => {
  let component: DetailsCategogyComponent;
  let fixture: ComponentFixture<DetailsCategogyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsCategogyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsCategogyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
