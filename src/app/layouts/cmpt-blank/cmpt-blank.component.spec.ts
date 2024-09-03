import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmptBlankComponent } from './cmpt-blank.component';

describe('CmptBlankComponent', () => {
  let component: CmptBlankComponent;
  let fixture: ComponentFixture<CmptBlankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmptBlankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CmptBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
